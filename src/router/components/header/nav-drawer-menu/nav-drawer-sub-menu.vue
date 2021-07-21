<template>
  <div class="nav-drawer-container">
    <v-list nav dense class="nav-drawer-header">
      <v-list-item @click="backToMainMenu">
        <v-icon>fas fa-chevron-left</v-icon>
        <v-list-item-title>メインメニュー</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="overflow-y-auto" style="max-height: 90vh">
      <v-list dense v-for="(subMenu, i) in subMenus" :key="i">
        <v-list-item-group>
          <v-list-item link v-for="(item, i) in subMenu.items" :key="i" @click="onLinkClick(item.linkType, item.url)">
            <v-list-item-content>
              <v-list-item-title
                :class="{
                  'font-weight-bold': item.type === 'title',
                  'ml-3': item.type === 'main',
                  'ml-6': item.type === 'sub'
                }"
                v-text="item.text"
              >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div v-if="subMenu.plus === true">
          <v-list-item-group>
            <v-list-item class="grey lighten-2 text-center" @click="onClick(subMenu, i)">
              <v-list-item-content>
                <v-list-item-title>{{ expandTitle[i] }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>
      </v-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onBeforeMount } from '@vue/composition-api';

export interface NavDrawerSubMenuContent {
  title: string;
  link: string;
  subContents: NavDrawerSubMenuContent[];
}

export default Vue.extend({
  name: 'nav-drawer-sub-menu',
  components: {},
  props: {
    selectSubMenu: {
      type: Array,
      required: true
    }
  },
  setup: (props, context) => {
    // データ格納
    const state = reactive<any>({
      subMenus: props.selectSubMenu,
      itemsCount: [],
      itemsPlusCount: [],
      expand: [],
      expandTitle: []
    });
    onBeforeMount(() => {
      state.subMenus.forEach(function(_: any, index: number) {
        if (state.subMenus[index].plus) {
          state.expand[index] = false;
          state.expandTitle[index] = 'もっと見る +';
          state.itemsCount[index] = state.subMenus[index].items.length;
          state.itemsPlusCount[index] = state.subMenus[index].itemsPlus.length;
        }
      });
    });
    // もっと見る
    const open = (subMenu: any, index: number) => {
      state.expandTitle[index] = '閉じる -';
      // リスト追加
      subMenu.itemsPlus.forEach(function(v: any) {
        subMenu.items.push(v);
      });
    };
    // 閉じる
    const close = (subMenu: any, index: number) => {
      state.expandTitle[index] = 'もっと見る +';
      // リスト削除
      subMenu.items.splice(state.itemsCount[index], state.itemsPlusCount[index]);
    };
    // クリック
    const onClick = (subMenu: any, index: number) => {
      state.expand[index] = !state.expand[index];
      if (state.expand[index]) {
        open(subMenu, index);
      } else {
        close(subMenu, index);
      }
    };
    // リンクのクリック操作
    const onLinkClick = (linkType: 'external' | 'internal', url: string): void => {
      switch (linkType) {
        case 'external':
          window.location.href = url;
          break;
        case 'internal':
          context.root.$router.push({ path: url });
          break;
      }
    };

    const backToMainMenu = () => {
      context.emit('back-to-main-event');
    };

    return {
      ...toRefs(state),
      onClick,
      onLinkClick,
      open,
      close,
      backToMainMenu
    };
  }
});
</script>

<style scoped>
.nav-drawer-container .v-list {
  padding: 0;
}

.v-list:not(.nav-drawer-header) .v-list-item {
  border-bottom: 1px solid #ddd;
}

.v-list .v-list-item {
  height: 60px;
}

.nav-drawer-header {
  border-bottom: 10px solid #ddd;
}

.nav-drawer-header-contents .v-list-item {
  padding-left: 26px;
  height: 40px;
}
</style>
