<template>
  <div
    id="header-user-menu"
    :class="{
      'd-flex': true,
      'justify-end': true,
      'user-menu': true,
      'font-size-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- 「初めての方へ」は960px以上のときのみ表示 -->
    <div class="d-none d-md-block ml-0 mr-3">
      <v-col class="user-info d-flex" align="center" justify="center">
        <div class="ma-auto d-flex" v-if="isLoggedIn">
          <img src="@/assets/header/t-point.svg" height="18" width="18" />
          <span class="text-point ml-1">{{ tPoint }}pt</span>
        </div>
        <a
          href="/files/miseuketori/index.html"
          v-on:mouseover="isHovering = true"
          v-on:mouseleave="isHovering = false"
          :class="{ hovering: isHovering }"
          v-else
        >
          <div class="guide">
            <img src="@/assets/header/guide.png" class="not-hovering" />
            <img src="@/assets/header/guide_on.png" class="hovering" />
          </div>
          <p>初めての方へ</p>
        </a>
      </v-col>
    </div>

    <div class="ml-0 mr-3">
      <v-col class="user-info" align="center" justify="center">
        <router-link to="/ec/mypage" v-if="isLoggedIn">
          <div class="guide">
            <i class="fas fa-user"></i>
          </div>
          <p>マイページ</p>
        </router-link>
        <login-menu v-else />
      </v-col>
    </div>

    <div class="ml-0 mr-3">
      <v-col class="user-info" align="center" justify="center">
        <router-link to="/ec/mypage/favorite/list">
          <div class="guide">
            <i class="fas fa-heart"></i>
          </div>
          <p>お気に入り</p>
        </router-link>
      </v-col>
    </div>

    <div class="ml-0 mr-3">
      <v-col class="user-info" align="center" justify="center">
        <router-link to="/ec/cart">
          <div class="guide">
            <v-badge :content="cartItemCount" :value="cartItemCount > 0" color="#d80b24" offset-y="10px">
              <i class="fas fa-shopping-cart"></i>
            </v-badge>
          </div>
          <p>カート</p>
        </router-link>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';
import LoginMenu from './login-menu.vue';

export default Vue.extend({
  name: 'user-menu',
  components: {
    'login-menu': LoginMenu
  },
  setup: (_, context) => {
    const state = reactive({
      isLoggedIn: false,
      tPoint: 0,
      isHovering: false,
      cartItemCount: 0
    });

    // Tポイント、カート内商品数を検知
    watch(
      () => [context.root.$store.authorizer.isLoggedIn, context.root.$store.authorizer.user],
      ([isLoggedIn, user]) => {
        state.isLoggedIn = isLoggedIn;
        state.tPoint = user?.point ? user.point : 0;
        state.cartItemCount = user?.cartItemCount;
      }
    );

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.font-size-narrow {
  font-size: 10px;
  width: 100%;
  height: 100%;
}

::v-deep .user-info {
  height: 100%;
  padding: 0px;
  a {
    color: inherit;
    text-decoration: none;

    &:hover .v-badge__badge {
      color: $text-white;
    }
  }
  p {
    white-space: nowrap;
  }
}

::v-deep .guide {
  width: 25px;
  height: 30px;
  overflow: visible;

  i {
    font-size: 24px;
  }

  img {
    height: 30px;
  }
}

a {
  .guide {
    img.hovering {
      display: none;
    }
    img.not-hovering {
      display: inline;
    }
  }
}

a.hovering {
  .guide {
    img.hovering {
      display: inline;
    }
    img.not-hovering {
      display: none;
    }
  }
}

.text-point {
  font-size: 12px;
}

@media screen and (max-width: 959px) {
  .user-menu {
    position: absolute;
    right: 0;
  }
}
</style>
