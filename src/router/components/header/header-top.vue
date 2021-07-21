<template>
  <div class="header-top-area">
    <!-- 960px以上 -->
    <div class="header-upper header-top-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="header-upper-left">
        <div class="mr-3">
          <router-link to="/" class="d-flex">
            <img src="@/assets/company/logo-kitamura.png" />
          </router-link>
        </div>
        <div class="mr-3">
          <a href="http://www.studio-mario.jp" target="_blank" class="d-flex">
            <img src="@/assets/company/logo-studio-mario.png" />
          </a>
        </div>
        <div class="mr-3">
          <router-link to="/" class="d-flex">
            <img class="my-auto title-logo-img" src="@/assets/header/netshop-pc.png" alt="ネットショップ" />
          </router-link>
        </div>
      </div>
      <div class="header-upper-right">
        <div class>
          <div class="pr-3 label">select language</div>
          <div class="pr-5">
            <div id="google_translate_element"></div>
          </div>
        </div>
        <div class>
          <a href="https://www.kitamura.jp/service/tcard/" target="_blank">
            <img src="@/assets/header/t-point-banner.png" />
          </a>
        </div>
      </div>
    </div>

    <!-- 960px未満 -->
    <div class="header-upper header-top-narrow" v-if="$vuetify.breakpoint.smAndDown" :class="{ narrower: narrowSlideFixed }">
      <v-container class="py-0 px-1">
        <v-row no-gutters class="rowUp-narrow">
          <v-col class="d-flex row-up-narrow">
            <router-link to="/" class="logo-link">
              <img src="@/assets/company/logo-kitamura.png" />
            </router-link>
            <div class="ml-2 d-flex">
              <router-link to="/" class="d-flex">
                <img class="my-auto title-logo-img" src="@/assets/header/netshop-pc.png" alt="ネットショップ" />
              </router-link>
            </div>
          </v-col>
          <v-col class="row-up-narrow-right">
            <user-menu />
          </v-col>
        </v-row>
        <v-row no-gutters class="height-row-narrow" v-show="!welcomeHide">
          <div class="float-clear width-max">
            <div class="float-left">
              ようこそ
              <br />
              {{ userName }}様
            </div>
            <div class="float-right mt-4">
              <div id="google_translate_element"></div>
            </div>
          </div>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed } from '@vue/composition-api';
import UserMenu from '@/components/header/user-menu.vue';

export default Vue.extend({
  name: 'header-top',
  components: {
    'user-menu': UserMenu
  },
  props: {
    welcomeHide: {
      type: Boolean,
      required: false
    },
    narrowSlideFixed: {
      type: Boolean,
      required: false
    }
  },
  setup: (_, context) => {
    /**
     * ユーザー名取得
     */
    const { authorizer } = context.root.$store;
    const userName = computed(() => {
      if (authorizer.user?.lastName && authorizer.user?.firstName) {
        return authorizer.user.lastName + ' ' + authorizer.user.firstName;
      } else {
        return 'ゲスト';
      }
    });

    return {
      userName
    };
  }
});
</script>

<style lang="scss" scoped>
.title-logo-img {
  height: 20px;
}

// PCの場合
@media screen and (min-width: 960px) {
  .header-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 20px;
  }

  .header-upper-left > div,
  .header-upper-right > div,
  .header-upper-right > div > div {
    display: inline-block;
  }

  .header-upper-left {
    display: flex;
    align-items: center;
  }

  .header-upper-right {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .title-logo-img {
    height: 30px;
  }
}

// タブレットの場合
@media screen and (min-width: 960px) and (max-width: 1080px) {
  .header-upper-right {
    .label {
      font-size: 14px;
    }
  }
}

.header-top-wide {
  height: 50px;
}

.header-top-narrow {
  width: 100%;
  height: 80px;
  font-size: 12px;

  &.narrower {
    height: 50px;
  }

  .row-up-narrow {
    // ハンバーガーアイコンが入るため左に空白を入れる
    margin-left: 45px;
  }

  .row-up-narrow .logo-link {
    height: 35px;

    img {
      height: 100%;
    }
  }

  .row-up-narrow-right {
    margin-right: 5px;
    position: relative;
  }

  .height-row-narrow {
    margin-top: 12px;
  }
}

.width-max {
  width: 100%;
}

.float-clear {
  overflow: hidden;
}
</style>
