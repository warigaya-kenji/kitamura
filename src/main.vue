<template>
  <v-app id="page-top">
    <!-- 共通 -->
    <overlay-loading v-if="!rendered" />
    <error-dialog />
    <confirm-dialog />

    <!-- 960px以上 -->
    <div class="outer-header-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <app-header :simpleHeader="simpleHeader" v-if="this.$route.path.indexOf('tablet') === -1" />
    </div>
    <div class="outer-main-wide">
      <div class="width-wide" v-if="$vuetify.breakpoint.mdAndUp">
        <v-main>
          <router-view />
        </v-main>
      </div>
    </div>
    <div class="outer-footer-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <app-footer v-if="this.$route.path.indexOf('tablet') === -1" />
    </div>

    <!-- 960px未満 -->
    <div class="width-narrow" v-if="$vuetify.breakpoint.smAndDown">
      <app-header :simpleHeader="simpleHeader" v-if="this.$route.path.indexOf('tablet') === -1" />
      <v-main>
        <router-view />
      </v-main>
      <app-footer v-if="this.$route.path.indexOf('tablet') === -1" />
      <v-app-bar-nav-icon @click="drawer = true" class="menu-position menu-bar-nav-icon" v-show="!simpleHeader"></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" fixed temporary class="menu-drawer" v-if="$vuetify.breakpoint.smAndDown">
        <nav-drawer-menu @on-close-menu="closeMenu" />
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';
import AppHeader from '@/components/header/app-header.vue';
import AppFooter from '@/components/footer/app-footer.vue';
import NavDrawerMenu from '@/components/header/nav-drawer-menu/nav-drawer-menu.vue';
import OverlayLoading from '@/components/common/overlay-loading.vue';
import ErrorDialog from './components/common/error-dialog.vue';
import ConfirmDialog from './components/common/confirm-dialog.vue';

export default Vue.extend({
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'nav-drawer-menu': NavDrawerMenu,
    'overlay-loading': OverlayLoading,
    'error-dialog': ErrorDialog,
    'confirm-dialog': ConfirmDialog
  },
  setup: (_, context) => {
    const state = reactive({
      drawer: false,
      rendered: false,
      simpleHeader: false
    });

    // routerイベントをwatch
    watch(
      () => context.root.$store.loader.isRouteLoaded,
      (isRouteLoaded) => {
        state.rendered = isRouteLoaded;
      },
      { deep: true, immediate: true }
    );

    watch(
      () => context.root.$route.meta,
      () => {
        const meta = context.root.$route.meta;
        state.simpleHeader = meta?.simpleHeader != null ? meta.simpleHeader : false;
      },
      { immediate: true }
    );

    /**
     * スマホ版のナビゲーションメニューを閉じる
     */
    const closeMenu = () => (state.drawer = false);

    return {
      closeMenu,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.outer-header-wide {
  background-color: #fff;
}

.outer-footer-wide {
  background-color: #fff;
}

.width-wide {
  margin: $ec-contents-margin;
  max-width: $ec-contents-max-width;
}

.width-narrow {
  width: 100%;
  margin: 0 auto;
}

/* メニューアイコン */
.menu-position {
  z-index: 500;
  position: fixed;
  top: 10px;
  left: 5px;
  width: 10%;
}

/* メニュードロワー */
.menu-drawer {
  z-index: 510;
}

.menu-bar-nav-icon {
  height: 35px;
  width: 35px;
  border: 1px solid #707070;
  border-radius: 5px;
}
</style>
