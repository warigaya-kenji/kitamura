<template>
  <div id="header-common" v-scroll="onScroll">
    <!-- 960px以上 -->
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <div class="header-area-wide">
        <!-- ヘッダ固定部分 -->
        <div class="header-area-fixed" ref="headerAreaWideFixed">
          <!-- 非対応ブラウザの警告表示は現状OFFとする
          <notification-unsupported />
          -->
          <div class="header-menu">
            <div class="header-contents">
              <hearder-top />
              <search-menu />
            </div>
          </div>
        </div>
        <!-- ヘッダスクロール部分 -->
        <div class="header-area-rel" ref="headerAreaWideRel">
          <div class="header-menu">
            <div class="header-contents">
              <tab-menu />
            </div>
          </div>
          <div class="header-line"></div>
          <div class="header-banner ec-back-color">
            <banner />
          </div>
        </div>
      </div>
    </div>

    <!-- 960px未満 -->
    <div v-if="$vuetify.breakpoint.smAndDown">
      <div class="header-area-narrow">
        <div class="header-area-fixed" ref="headerAreaNarrowFixed">
          <div class="header-menu">
            <hearder-top :welcomeHide="headerAreaWelcomeHide" :narrowSlideFixed="headerAreaNarrowSlideFixed" />
          </div>
        </div>
        <div ref="headerAreaNarrowRel">
          <div class="header-menu">
            <tab-menu />
          </div>
        </div>
        <div class="header-banner ec-back-color">
          <banner />
        </div>
        <div
          ref="headerAreaNarrowSlide"
          class="header-area-narrow-slide"
          :class="{
            fixed: headerAreaNarrowSlideFixed
          }"
        >
          <search-menu />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, ref, SetupContext } from '@vue/composition-api';
import Banner from '@/components/header/banner.vue';
import HearderTop from '@/components/header/header-top.vue';
import SearchMenu from '@/components/header/search-menu.vue';
import TabMenu from '@/components/header/tab-menu.vue';
// import NotificationUnspported from '@/components/header/notification-unsupported.vue';

export default Vue.extend({
  name: 'app-header',
  components: {
    banner: Banner,
    'search-menu': SearchMenu,
    'tab-menu': TabMenu,
    'hearder-top': HearderTop
    // 非対応ブラウザの警告表示は現状OFFとする
    // 'notification-unsupported': NotificationUnspported
  },
  setup: (_, context: SetupContext) => {
    const { header } = context.root.$store;

    const state = reactive({
      clipped: false,
      headerAreaWideFixed: ref<HTMLElement>(),
      headerAreaWideRel: ref<HTMLElement>(),
      headerAreaNarrowFixed: ref<HTMLElement>(),
      headerAreaNarrowRel: ref<HTMLElement>(),
      headerAreaNarrowSlide: ref<HTMLElement>(),
      headerAreaNarrowSlideFixed: false,
      headerAreaWelcomeHide: false
    });

    const onScroll = () => {
      if (state.headerAreaNarrowRel && state.headerAreaNarrowSlide && state.headerAreaNarrowFixed) {
        if (window.pageYOffset >= state.headerAreaNarrowRel.clientHeight) {
          state.headerAreaNarrowSlideFixed = true;
          const top = state.headerAreaNarrowFixed?.clientHeight ? state.headerAreaNarrowFixed?.clientHeight : 0;
          state.headerAreaNarrowSlide.style.top = top + 'px';
          const headerFixedHeight = state.headerAreaNarrowSlide.clientHeight + state.headerAreaNarrowFixed.clientHeight;
          state.headerAreaNarrowRel.style.marginTop = headerFixedHeight + 'px';
          header.setHeight(headerFixedHeight);
        } else {
          state.headerAreaNarrowSlideFixed = false;
          const headerFixedHeight = state.headerAreaNarrowFixed.clientHeight;
          state.headerAreaNarrowRel.style.marginTop = headerFixedHeight + 'px';
          header.setHeight(headerFixedHeight);
        }
      }
      if (window.pageYOffset > 5) {
        state.headerAreaWelcomeHide = true;
      } else {
        state.headerAreaWelcomeHide = false;
      }
    };

    onMounted(() => {
      if (state.headerAreaWideRel) {
        state.headerAreaWideRel.style.marginTop = (state.headerAreaWideFixed?.clientHeight ? state.headerAreaWideFixed?.clientHeight : 0) + 'px';
      }
      if (state.headerAreaNarrowRel) {
        state.headerAreaNarrowRel.style.marginTop = (state.headerAreaNarrowFixed?.clientHeight ? state.headerAreaNarrowFixed?.clientHeight : 0) + 'px';
      }

      // 要素の変更検出
      const mutationObserver = new MutationObserver(() => {
        if (state.headerAreaWideRel) {
          state.headerAreaWideRel.style.marginTop = (state.headerAreaWideFixed?.clientHeight ? state.headerAreaWideFixed?.clientHeight : 0) + 'px';
        }
        if (state.headerAreaNarrowRel) {
          state.headerAreaNarrowRel.style.marginTop = (state.headerAreaNarrowFixed?.clientHeight ? state.headerAreaNarrowFixed?.clientHeight : 0) + 'px';
        }
      });
      const target = document.querySelector('.header-area-fixed');
      if (target) {
        mutationObserver.observe(target, {
          childList: true
        });
      }
    });

    return {
      onScroll,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
#header-common {
  width: 100%;

  .fixed {
    position: fixed;
  }
}

.header-contents {
  margin: $ec-contents-margin;
  max-width: $ec-contents-max-width;
}

.header-area-fixed {
  position: fixed;
  z-index: 300;
  top: 0;
  margin: 0 auto;
  width: 100%;
  background: $bg-white;

  .header-menu {
    padding: 10px 0;
    background-color: $bg-white;
  }
}

.header-area-rel {
  margin: 0 auto;
  width: 100%;

  .header-menu {
    background-color: $bg-white;
  }
}

.header-area-wide {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  background: $bg-white;
}

.header-area-narrow {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  background: $bg-white;
}

.header-area-narrow-slide {
  width: 100%;
  z-index: 300;
  background: $bg-white;
}

// PC幅のみ画面全体に広がる横線表示
@media screen and (min-width: 960px) {
  .header-line {
    border-bottom: 5px solid $ec-primary;
    width: 100%;
  }
}

::v-deep .v-toolbar__content {
  padding: 0px !important;
}
</style>
