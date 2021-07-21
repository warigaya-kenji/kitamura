<template>
  <!-- vue-inner-image-zoom をtypescript Verに修正 -->
  <!-- afterZoomIn, afterZoomOutは、emitで対応 -->
  <figure
    class="iiz"
    ref="img"
    v-bind:class="{
      [className]: className,
      'iiz--drag': currentMoveType === 'drag'
    }"
    v-on="{
      touchstart: handleTouchStart,
      click: handleClick,
      mouseenter: isTouch ? () => {} : handleMouseEnter,
      mousemove: currentMoveType === 'drag' || !isZoomed ? () => {} : handleMouseMove
      // mouseleave: isTouch ? () => {} : handleMouseLeave
    }"
  >
    <template v-if="validSources">
      <picture>
        <source
          v-for="(source, i) in validSources"
          v-bind:key="i"
          v-bind:srcSet="source.srcSet"
          v-bind:sizes="source.sizes"
          v-bind:media="source.media"
          v-bind:type="source.type"
        />
        <img
          class="iiz__img"
          v-bind:class="{ 'iiz__img--invisible': isZoomed }"
          v-bind:style="{
            transition: `linear 0ms opacity ${isZoomed ? fadeDuration : 0}ms, linear 0ms visibility ${isZoomed ? fadeDuration : 0}ms`
          }"
          v-bind:src="src"
          v-bind:srcSet="srcSet"
          v-bind:sizes="sizes"
          v-bind:alt="alt"
          @error="noimage"
        />
      </picture>
    </template>

    <template v-else>
      <img
        class="iiz__img"
        v-bind:class="{ 'iiz__img--invisible': isZoomed }"
        v-bind:style="{
          transition: `linear 0ms opacity ${isZoomed ? fadeDuration : 0}ms, linear 0ms visibility ${isZoomed ? fadeDuration : 0}ms`
        }"
        v-bind:src="src"
        v-bind:srcSet="srcSet"
        v-bind:sizes="sizes"
        v-bind:alt="alt"
        @error="noimage"
      />
    </template>

    <template v-if="isActive">
      <template v-if="isFullscreen">
        <mounting-portal mount-to="body" name="iizPortal" append>
          <div class="iiz__zoom-portal">
            <img
              class="iiz__zoom-img"
              alt=""
              @error="noimage"
              v-bind:class="{ 'iiz__zoom-img--visible': isZoomed }"
              v-bind:style="{
                top: `${top}px`,
                left: `${left}px`,
                transition: `linear ${isFullscreen ? 0 : fadeDuration}ms opacity, linear ${isFullscreen ? 0 : fadeDuration}ms visibility`
              }"
              v-bind:src="zoomSrc || src"
              v-on="{
                load: handleLoad,
                touchstart: handleDragStart,
                touchend: handleDragEnd,
                mousedown: handleDragStart,
                mouseup: handleDragEnd
              }"
            />

            <button
              v-if="isTouch"
              type="button"
              class="iiz__btn iiz__close"
              aria-label="Zoom Out"
              v-bind:class="{ 'iiz__close--visible': isZoomed }"
              v-bind:style="{
                transition: `linear ${isFullscreen ? 0 : fadeDuration}ms opacity, linear ${isFullscreen ? 0 : fadeDuration}ms visibility`
              }"
              v-on:click.stop="handleClose"
            />
          </div>
        </mounting-portal>
      </template>

      <template v-else>
        <img
          class="iiz__zoom-img"
          alt=""
          @error="noimage"
          v-bind:class="{ 'iiz__zoom-img--visible': isZoomed }"
          v-bind:style="{
            top: `${top}px`,
            left: `${left}px`,
            transition: `linear ${isFullscreen ? 0 : fadeDuration}ms opacity, linear ${isFullscreen ? 0 : fadeDuration}ms visibility`
          }"
          v-bind:src="zoomSrc || src"
          v-on="{
            load: handleLoad,
            touchstart: handleDragStart,
            touchend: handleDragEnd,
            mousedown: handleDragStart,
            mouseup: handleDragEnd
          }"
        />

        <button
          v-if="isTouch"
          class="iiz__btn iiz__close"
          type="button"
          aria-label="Zoom Out"
          v-bind:class="{ 'iiz__close--visible': isZoomed }"
          v-bind:style="{
            transition: `linear ${isFullscreen ? 0 : fadeDuration}ms opacity, linear ${isFullscreen ? 0 : fadeDuration}ms visibility`
          }"
          v-on:click.stop="handleClose"
        />
      </template>
    </template>

    <!-- <span v-if="!isZoomed" class="iiz__btn iiz__hint"></span> -->
  </figure>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref, reactive, toRefs, computed } from '@vue/composition-api';
import { MountingPortal } from 'portal-vue';
import { noimage } from '@/logic/utils';

type offset = {
  x: number;
  y: number;
};

type ratios = {
  x: number;
  y: number;
};

type eventPosition = {
  x: number;
  y: number;
};

export default Vue.extend({
  name: 'product-inner-image-zoom',
  components: {
    'mounting-portal': MountingPortal
  },
  props: {
    moveType: {
      type: String,
      default: 'pan'
    },
    src: {
      type: String,
      required: true
    },
    srcSet: String,
    sizes: String,
    sources: Array,
    zoomSrc: String,
    alt: String,
    fadeDuration: {
      type: Number,
      default: 150
    },
    fullscreenOnMobile: Boolean,
    mobileBreakpoint: {
      type: Number,
      default: 640
    },
    className: String
  },
  setup: (props, { emit }) => {
    const state = reactive({
      img: ref<HTMLElement>(),
      isActive: false,
      isTouch: false,
      isZoomed: false,
      isFullscreen: false,
      isDragging: false,
      currentMoveType: props.moveType,
      left: 0,
      top: 0,
      imgProps: {
        isLoaded: false,
        onLoadCallback: null as Function | null,
        zoomImg: {} as HTMLButtonElement,
        bounds: {} as DOMRect,
        offsets: {} as offset,
        ratios: {} as ratios,
        eventPosition: {} as eventPosition
      }
    });

    const setDefaults = () => {
      state.imgProps.isLoaded = false;
      state.imgProps.onLoadCallback = null;
      state.imgProps.zoomImg = {} as HTMLButtonElement;
      state.imgProps.bounds = {} as DOMRect;
      state.imgProps.offsets = {} as offset;
      state.imgProps.ratios = {} as ratios;
      state.imgProps.eventPosition = {} as eventPosition;
    };

    const getBounds = (isFullscreen: boolean, img?: HTMLElement): DOMRect => {
      if (isFullscreen) {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
          left: 0,
          top: 0
        } as DOMRect;
      }
      return img
        ? img.getBoundingClientRect()
        : ({
            width: window.innerWidth,
            height: window.innerHeight,
            left: 0,
            top: 0
          } as DOMRect);
    };

    const getOffsets = (pageX: number, pageY: number, left: number, top: number) => {
      return {
        x: pageX - left,
        y: pageY - top
      };
    };

    const getRatios = (bounds: any, zoomImg: any) => {
      return {
        x: (zoomImg.offsetWidth - bounds.width) / bounds.width,
        y: (zoomImg.offsetHeight - bounds.height) / bounds.height
      };
    };

    const handleMouseMove = (e: any) => {
      let left = e.pageX - state.imgProps.offsets.x;
      let top = e.pageY - state.imgProps.offsets.y;

      left = Math.max(Math.min(left, state.imgProps.bounds.width), 0);
      top = Math.max(Math.min(top, state.imgProps.bounds.height), 0);

      (state.left = left * -state.imgProps.ratios.x), (state.top = top * -state.imgProps.ratios.y);
    };

    const initialMove = (pageX: number, pageY: number) => {
      state.imgProps.offsets = getOffsets(window.pageXOffset, window.pageYOffset, -state.imgProps.bounds.left, -state.imgProps.bounds.top);
      handleMouseMove({
        pageX: pageX,
        pageY: pageY
      });
    };
    const handleDragMove = (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      let left = (e.pageX || e.changedTouches[0].pageX) - state.imgProps.offsets.x;
      let top = (e.pageY || e.changedTouches[0].pageY) - state.imgProps.offsets.y;

      left = Math.max(Math.min(left, 0), (state.imgProps.zoomImg.offsetWidth - state.imgProps.bounds.width) * -1);
      top = Math.max(Math.min(top, 0), (state.imgProps.zoomImg.offsetHeight - state.imgProps.bounds.height) * -1);

      state.left = left;
      state.top = top;
    };

    const initialDragMove = (pageX: number, pageY: number) => {
      const initialPageX = (pageX - (window.pageXOffset + state.imgProps.bounds.left)) * -state.imgProps.ratios.x;
      const initialPageY = (pageY - (window.pageYOffset + state.imgProps.bounds.top)) * -state.imgProps.ratios.y;

      state.imgProps.bounds = getBounds(state.isFullscreen, state.img);
      state.imgProps.offsets = getOffsets(0, 0, 0, 0);

      handleDragMove({
        changedTouches: [
          {
            pageX: initialPageX,
            pageY: initialPageY
          }
        ]
      });
    };

    const zoomIn = (pageX: number, pageY: number) => {
      state.isZoomed = true;
      if (state.currentMoveType === 'drag') {
        initialDragMove(pageX, pageY);
      } else {
        initialMove(pageX, pageY);
      }
      emit('after-zoom-in');
    };

    const zoomOut = (callback?: any) => {
      state.isZoomed = false;
      emit('after-zoom-out');
      if (callback) {
        callback();
      }
    };

    const handleMouseEnter = () => {
      state.isActive = true;
    };

    const handleTouchStart = () => {
      state.isFullscreen =
        props.fullscreenOnMobile && window.matchMedia && window.matchMedia(`(max-width: ${props.mobileBreakpoint}px)`).matches ? true : false;
      state.isTouch = true;
      state.currentMoveType = 'drag';
    };

    const handleClick = (e: any) => {
      if (state.isZoomed) {
        if (!state.isTouch && !state.isDragging) {
          zoomOut();
        }
        return;
      }

      if (state.isTouch) {
        state.isActive = true;
      }

      if (state.imgProps.isLoaded) {
        zoomIn(e.pageX, e.pageY);
      } else {
        state.imgProps.onLoadCallback = zoomIn.bind(state, e.pageX, e.pageY);
      }
    };

    const handleLoad = (e: any) => {
      state.imgProps.isLoaded = true;
      state.imgProps.zoomImg = e.target;
      state.imgProps.bounds = getBounds(false, state.img);
      state.imgProps.ratios = getRatios(state.imgProps.bounds, state.imgProps.zoomImg);

      if (state.imgProps.onLoadCallback) {
        state.imgProps.onLoadCallback();
        state.imgProps.onLoadCallback = null;
      }
    };

    const handleDragStart = (e: any) => {
      state.imgProps.offsets = getOffsets(
        e.pageX || e.changedTouches[0].pageX,
        e.pageY || e.changedTouches[0].pageY,
        state.imgProps.zoomImg.offsetLeft,
        state.imgProps.zoomImg.offsetTop
      );

      state.imgProps.zoomImg.addEventListener(state.isTouch ? 'touchmove' : 'mousemove', handleDragMove, { passive: false });

      if (!state.isTouch) {
        state.imgProps.eventPosition = {
          x: e.pageX,
          y: e.pageY
        };
      }
    };

    const handleDragEnd = (e: any) => {
      state.imgProps.zoomImg.removeEventListener(state.isTouch ? 'touchmove' : 'mousemove', handleDragMove);

      if (!state.isTouch) {
        const moveX = Math.abs(e.pageX - state.imgProps.eventPosition.x);
        const moveY = Math.abs(e.pageY - state.imgProps.eventPosition.y);
        state.isDragging = moveX > 5 || moveY > 5;
      }
    };

    const handleClose = () => {
      zoomOut(() => {
        setTimeout(() => {
          setDefaults();
          state.isActive = false;
          state.isTouch = false;
          state.isFullscreen = false;
          state.currentMoveType = props.moveType;
        }, props.fadeDuration as number);
      });
    };

    const handleMouseLeave = (e: any) => {
      state.currentMoveType === 'drag' && state.isZoomed ? handleDragEnd(e) : handleClose();
    };

    const validSources = computed(() => {
      const sources = props.sources as [];
      return sources ? sources.filter((source: any) => source.srcSet) : [];
    });

    setDefaults();

    return {
      ...toRefs(state),
      noimage,
      handleMouseEnter,
      handleTouchStart,
      handleClick,
      handleLoad,
      handleMouseMove,
      handleDragStart,
      handleDragMove,
      handleDragEnd,
      handleMouseLeave,
      handleClose,
      initialMove,
      initialDragMove,
      zoomIn,
      zoomOut,
      setDefaults,
      getBounds,
      getOffsets,
      getRatios,
      validSources
    };
  }
});
</script>
<style scoped>
.iiz {
  margin: 0;
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: zoom-in;
}
.iiz--drag .iiz__zoom-img--visible {
  cursor: grab;
}
.iiz__img {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  visibility: visible;
  opacity: 1;
  object-fit: contain;
}
.iiz__img--invisible {
  visibility: hidden;
  opacity: 0;
}
.iiz__zoom-img {
  width: 300% !important;
  height: 300% !important;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  display: block;
  object-fit: contain;
}
.iiz__zoom-img--visible {
  visibility: visible;
  opacity: 1;
  cursor: zoom-out;
}
.iiz__zoom-portal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
}
.iiz__btn {
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  padding: 0;
  position: absolute;
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-appearance: none;
  appearance: none;
}
.iiz__btn:before {
  content: '';
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}
/* .iiz__hint {
  bottom: 10px;
  right: 10px;
  pointer-events: none;
}
.iiz__hint:before {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.9'%3E%3Cpath d='M13.9 7.4C13.9 3.8 11 .9 7.4.9S.9 3.8.9 7.4s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm5.3 12.5l-6.7-7.2c-1.4 1.3-3.2 2.1-5.1 2.1-4.1 0-7.4-3.3-7.4-7.4S3.3 0 7.4 0s7.4 3.3 7.4 7.4c0 1.7-.6 3.4-1.7 4.7l6.8 7.2-.7.6z' fill='%23000222'/%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
} */
.iiz__close {
  top: 10px;
  right: 10px;
  visibility: hidden;
  opacity: 0;
}
.iiz__close--visible {
  visibility: visible;
  opacity: 1;
}
.iiz__close::before {
  content: '';
  width: 29px;
  height: 29px;
  background-image: linear-gradient(#222, #222), linear-gradient(#222, #222);
  background-size: 100% 1px, 1px 100%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
