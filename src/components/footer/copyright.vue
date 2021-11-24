<template>
  <div class="copyright">
    <!-- 960px以上 -->
    <div class="copyright-area container-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <v-container class="px-0">
        <div class="float-left copyright-height">
          <div v-show="!simpleFooter">
            <a class="pr-2" href="https://www.kitamura.co.jp/policy/privacy.html" target="_blank">個人情報保護方針</a>
            <a class="pr-2" href="https://www.kitamura.co.jp/news/" target="_blank">ニュースリリース</a>
            <a class="pr-2" href="https://www.kitamura.co.jp/info/" target="_blank">会社概要</a>
            <a class="pr-2" href="https://www.kitamura.co.jp/recruit/top.html" target="_blank">採用情報</a>
            <a class="pr-2" href="https://sss.kitamura.jp/" target="_blank">店舗検索</a>
            <a class="pr-2" href="/sitemap/sitemap_index.html">サイトマップ</a>
          </div>
          <div>
            <router-link to="/ec/ct/C003/">デジカメ</router-link>、 <router-link to="/ec/ct/C001/">デジタル一眼レフ</router-link>、
            <router-link to="/ec/ct/C002/">ミラーレス一眼</router-link>、
            <router-link to="/ec/ct/C005/">ビデオカメラ</router-link>
            のご購入はカメラのキタムラネットショップ
          </div>
          <div class="pb-5">
            <span>&copy; {{ new Date().getFullYear() }}, </span>
            <a href="http://www.kitamura.co.jp/top.html" target="_blank">KITAMURA Co., Ltd.</a>
            All Rights Reserved.
          </div>
        </div>
        <div class="footer-logo">
          <div class="float-right py-auto copyright-height d-flex">
            <a href="http://www.studio-mario.jp" target="_blank" class="my-auto">
              <img src="@/assets/company/logo-studio-mario.png" />
            </a>
          </div>
          <div class="float-right py-auto pr-3 copyright-height d-flex">
            <router-link to="/" class="my-auto">
              <img src="@/assets/company/logo-kitamura.png" />
            </router-link>
          </div>
          <div class="float-right py-auto pr-3 copyright-height">
            <img src="@/assets/company/logo-catchcopy.png" />
          </div>
        </div>
      </v-container>
    </div>

    <!-- 960px未満 -->
    <div class="copyright-area container-narrow" v-if="$vuetify.breakpoint.smAndDown">
      <v-container class="px-0">
        <v-row no-gutters class="text-center" v-show="!simpleFooter">
          <v-col cols="6">
            <a href="https://www.kitamura.co.jp/policy/privacy.html" target="_blank">個人情報保護方針</a>
          </v-col>
          <v-col cols="6">
            <a href="https://www.kitamura.co.jp/news/" target="_blank">ニュースリリース</a>
          </v-col>
          <v-col cols="6">
            <a href="https://www.kitamura.co.jp/info/" target="_blank">会社概要</a>
          </v-col>
          <v-col cols="6">
            <a href="https://www.kitamura.co.jp/recruit/top.html" target="_blank">採用情報</a>
          </v-col>
          <v-col cols="6">
            <a href="https://sss.kitamura.jp/" target="_blank">店舗検索</a>
          </v-col>
          <v-col cols="6">
            <a href="/sitemap/sitemap_index.html">サイトマップ</a>
          </v-col>
        </v-row>
        <div class="pt-5 footer-logo">
          <v-row no-gutters class="px-2">
            <v-col cols="8" class="px-1">
              <img src="@/assets/company/logo-catchcopy.png" />
            </v-col>
            <v-col cols="2" class="px-1 my-auto">
              <router-link to="/">
                <img width="100%" src="@/assets/company/logo-kitamura.png" />
              </router-link>
            </v-col>
            <v-col cols="2" class="px-1 my-auto">
              <a href="http://www.studio-mario.jp" target="_blank">
                <img width="100%" src="@/assets/company/logo-studio-mario.png" />
              </a>
            </v-col>
          </v-row>
        </div>
        <div class="pb-5 float-clear text-center">
          <span>&copy; {{ new Date().getFullYear() }}, </span>
          <a href="http://www.kitamura.co.jp/top.html" target="_blank">KITAMURA Co., Ltd.</a>
          All Rights Reserved.
        </div>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'copy-right',
  props: {
    simpleFooter: {
      type: Boolean,
      default: false
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.copyright-area.container-wide {
  margin: 30px auto 0 auto;
  padding: 10px 20px 10px 40px;
  height: 85px;
  font-size: 14px;

  .container {
    margin: 0;
    max-width: none;
  }
}

.copyright-area.container-narrow {
  padding-top: 10px;
  font-size: 14px;
}

.footer-logo img {
  max-width: 100%;
}

.container-narrow .footer-logo {
  max-width: 450px;
  margin: 0 auto;
}

.copyright-height {
  height: 85px;
}

.text-center {
  text-align: center;
}

.float-clear {
  overflow: hidden;
}
</style>
