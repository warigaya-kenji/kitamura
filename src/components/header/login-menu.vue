<template>
  <v-dialog id="login-menu-area" offset-y :close-on-content-click="false" :rounded="false" v-model="isShowMenu" style="z-index: 501" width="400">
    <template v-slot:activator="{ attrs }">
      <a nohref v-bind="attrs" @click="checkLoginStatus">
        <div class="guide">
          <i class="fas fa-user"></i>
        </div>
        <p>新規登録<br />ログイン</p>
      </a>
    </template>

    <v-card outlined class="menu-contents">
      <v-btn icon class="button-menu-close" @click="isShowMenu = false" color="black">
        <v-icon>fas fa-times</v-icon>
      </v-btn>

      <div class="menu-header">あなたのアカウントにログイン</div>

      <div class="menu-body">
        <p class="red--text" v-if="errorMessage">{{ errorMessage }}</p>
        <div class="input-login">
          <v-text-field
            id="login-user-email"
            ref="emailRef"
            v-model="email"
            :type="'email'"
            single-line
            label="メールアドレス"
            outlined
            hide-details="auto"
            @keydown.enter="login"
            dense
            autofocus
          ></v-text-field>
        </div>

        <div class="input-login">
          <v-text-field
            id="login-user-password"
            ref="passwordRef"
            v-model="password"
            :type="'password'"
            single-line
            label="パスワード"
            outlined
            hide-details="auto"
            @keydown.enter="login"
            dense
          ></v-text-field>
        </div>
        <div class="reset-password-wrapper">
          <a href="https://member.kitamura.jp/group/reminder/pass.do" target="_blank" class="link-reset-passwprd">パスワードをお忘れの方</a>
        </div>

        <div class="button-group-login">
          <v-btn id="login-button" block outlined large class="button-login" @click="login">ログイン</v-btn>
          <v-btn block outlined large class="button-login button-login-outline" href="https://member.kitamura.jp/account/regist/basic/input" target="_blank"
            >新規会員登録</v-btn
          >
        </div>
      </div>

      <v-divider></v-divider>

      <div class="menu-footer">
        <img src="@/assets/header/yahoo-min.png" class="img-yahoo" />
        <a :href="yahooLoginUrl" target="_blank" :class="{ 'text-small': $vuetify.breakpoint.smAndDown }">Yahoo! JAPAN IDでログインはコチラ</a>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, ref, toRefs, watch } from '@vue/composition-api';
import AuthService from '@/logic/auth.service';

export default Vue.extend({
  name: 'login-menu',
  setup: (_, context) => {
    const { authorizer, loader } = context.root.$store;
    const emailRef = ref<HTMLImageElement>();
    const passwordRef = ref<HTMLImageElement>();

    const state = reactive({
      email: '',
      password: '',
      errorMessage: '',
      yahooLoginUrl: ''
    });

    // 初期化
    const init = () => {
      // 現在のURL
      const currentUrl = location.origin + context.root.$route.fullPath;
      const urlParams = new URLSearchParams({
        s: process.env.VUE_APP_SITE_ID,
        u: currentUrl
      });
      state.yahooLoginUrl = process.env.VUE_APP_API_MEMBER_BASE_URL + 'sso/login.html?' + urlParams.toString();
      state.errorMessage = '';
    };

    /**
     * ログインダイアログを表示する際に、すでにログイン状態であるか確認する
     */
    const checkLoginStatus = (): void => {
      init();
      authorizer.openLoginMenu();
    };

    /**
     * ログインを実行する
     */
    async function login(): Promise<void> {
      loader.routeUnset();
      state.errorMessage = '';
      // フォームからフォーカスを外す
      emailRef.value?.blur();
      passwordRef.value?.blur();

      try {
        await AuthService.login(state.email, state.password);
        authorizer.loginMenuOpenState = false;
      } catch (error) {
        console.error(error);
        const status = error.response?.status || -1;
        if (status === 401) {
          state.errorMessage = 'メールアドレスまたはパスワードが正しくありません。';
        } else {
          state.errorMessage =
            'ただいまシステムが混みあっている可能性があります。しばらくお待ちいただきますようお願い申し上げます。ご迷惑をおかけして申し訳ございません。';
        }
      } finally {
        loader.routeLoaded();
      }
    }

    watch(
      () => authorizer.loginMenuOpenState,
      (newValue, oldValue) => {
        // ダイアログの開閉時にそれぞれ初期化する
        if (newValue && !oldValue) {
          init();
        } else if (!newValue && oldValue) {
          state.email = '';
          state.password = '';
          state.errorMessage = '';
        }
      }
    );

    // ダイアログ表示状態
    const isShowMenu = computed({
      get: () => authorizer.loginMenuOpenState,
      set: (openState) => (authorizer.loginMenuOpenState = openState)
    });

    return {
      ...toRefs(state),
      checkLoginStatus,
      emailRef,
      passwordRef,
      login,
      isShowMenu
    };
  }
});
</script>

<style lang="scss" scoped>
.user-info {
  a {
    color: inherit;
    text-decoration: none;
  }
}

.menu-contents {
  border-radius: 0;
  border: 0.1rem solid #707070;
}

.menu-header {
  text-align: center;
  margin: 30px 30px 20px;
}

.menu-body {
  margin: 20px;
}

.button-menu-close {
  position: absolute;
  top: 5px;
  right: 5px;
}

.input-login {
  margin: 10px 0;
}

.reset-password-wrapper {
  text-align: center;
}

.button-group-login {
  margin: 10px 50px;
}

.button-group-login .button-login {
  margin: 5px 0;
  background-color: #d80b24;
  color: #fff;
}

.button-group-login .button-login.button-login-outline {
  border: 1px solid #d80b24;
  background-color: inherit;
  color: #d80b24;
}

.menu-footer {
  margin: 20px;
  display: flex;
  align-items: center;

  .text-small {
    font-size: 14px;
  }
}

.img-yahoo {
  margin-right: 10px;
  width: 40px;
  height: 24px;
}

.btn-switch-menu {
  text-decoration: none;
}

.btn-switch-menu .btn-icon,
.btn-switch-menu .btn-text {
  color: #000;
}

.btn-switch-menu .btn-icon {
  font-size: 24px;
}

.btn-switch-menu .btn-text {
  padding-top: 5px;
  line-height: 1rem;
}
</style>
