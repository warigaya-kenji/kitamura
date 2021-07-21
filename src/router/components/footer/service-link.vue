<template>
  <div
    class="service-link"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- 960px以上 -->
    <v-container class="service-list" v-if="$vuetify.breakpoint.mdAndUp">
      <v-row>
        <!-- ご利用案内 -->
        <v-col cols="4" class="link-area">
          <ul class="list_triangle">
            <li>
              <a href="/sitemap/riyou_index.html" class="link-item">ご利用案内</a>
            </li>
            <li>
              <a href="/sitemap/otoiawase_index.html" class="link-item">お問い合わせ</a>
            </li>
            <li>
              <a href="https://ecfaq.kitamura.jp/s/" target="_blank" class="link-item">よくある質問</a>
            </li>
          </ul>
        </v-col>
        <!-- 各種サービス案内 -->
        <v-col cols="4" class="link-area">
          <ul class="list_triangle">
            <li class="text-list-title">各種サービス案内</li>
            <li v-for="item in linkList" :key="item.text">
              <a class="link-item" :href="item.url">{{ item.text }}</a>
            </li>
          </ul>
        </v-col>
        <!-- 特定商法に基づく表示 -->
        <v-col cols="4" class="link-area">
          <ul class="list_triangle">
            <li>
              <a href="/sitemap/kiyaku_index.html" class="link-item">特定商法に基づく表示</a>
            </li>
            <li>
              <a href="/3Dsecure/secure.html" class="link-item">クレジットカード認証サービス<br />（3Dセキュア） </a>
            </li>
            <img contain max-width="150" class="detail-text" src="@/assets/footer/creditcard-auth-service.png" />

            <li class="link-item">古物営業法に基づく表示</li>
            <div class="detail-text">
              <span>株式会社キタムラ</span>
              <br />
              <span class="pr-5">高知県公安委員会許可番号</span>
              <span>第831010001283号</span>
              <br />
              <span class="pr-5">登録品種</span>
              <span>写真機商</span>
            </div>
          </ul>
        </v-col>
      </v-row>
      <!-- 注意バナー -->
      <div class="attention-area attention-font-wide">
        <a href="https://www.kitamura.jp/topics/2013/20131028.html" target="_blank" class="link-text"> 弊社を装った悪質サイトにご注意ください </a>
      </div>
    </v-container>

    <!-- 960px未満 -->
    <div class="service-list" v-if="$vuetify.breakpoint.smAndDown">
      <v-list nav>
        <v-list-item-group>
          <v-divider></v-divider>
          <v-list-item href="/sitemap/riyou_index.html" class="link-item">
            <v-list-item-title>ご利用案内</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item href="/sitemap/otoiawase_index.html" class="link-item">
            <v-list-item-title>お問い合わせ</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item href="https://ecfaq.kitamura.jp/s/" class="link-item">
            <v-list-item-title>よくある質問</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title>各種サービス案内</v-list-item-title>
            </template>
            <v-list-item v-for="(item, i) in linkList" :key="i" :href="item.url">
              <v-list-item-content>
                <v-list-item-title v-text="item.text" class="link-item pl-5"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- 特定商法に基づく表示 -->
            <v-divider></v-divider>
            <v-list-item href="/sitemap/kiyaku_index.html" class="link-item">
              <v-list-item-title>特定商法に基づく表示</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item href="/3Dsecure/secure.html" class="link-item">
              <v-list-item-title>クレジットカード認証サービス<br />（3Dセキュア）</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
      <!-- 古物営業法に基づく表示 -->
      <v-divider></v-divider>
      <div class="link-item px-4">
        <span>古物営業法に基づく表示</span>
        <div class="detail-text px-2 py-2">
          <span>株式会社キタムラ</span>
          <br />
          <span class="pr-5">高知県公安委員会許可番号</span>
          <span>第831010001283号</span>
          <br />
          <span class="pr-5">登録品種</span>
          <span>写真機商</span>
        </div>
      </div>
      <!-- 注意バナー -->
      <div class="attention-area attention-font-narrow">
        <a href="https://www.kitamura.jp/topics/2013/20131028.html" target="_blank" class="link-text">弊社を装った悪質サイトにご注意ください </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'service-link',
  setup: () => {
    const state = reactive({
      selectedLink: null,
      linkList: [
        {
          text: '買取・下取',
          url: '/special/sale-fair/page/sell/'
        },
        {
          text: 'なんでも下取り',
          url: '/sitemap/riyou_shitadori_index.html'
        },
        {
          text: 'お支払い方法',
          url: '/sitemap/riyou_shiharai_index.html'
        },
        {
          text: '5年間保証',
          url: '/sitemap/riyou_hoshou_index.html'
        },
        {
          text: '修理のご案内',
          url: '/files/syuuri/index.html'
        },
        {
          text: '送料・手数料',
          url: '/sitemap/riyou_souryou_index.html'
        },
        {
          text: '返品・交換',
          url: '/sitemap/riyou_henpin_index.html'
        },
        {
          text: '商品お届け・納期',
          url: '/sitemap/riyou_otodoke_index.html'
        }
      ]
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.service-link.container-wide {
  padding: 0 20px;
  font-size: 1.1rem;

  .detail-text {
    font-size: 0.9rem;
  }
}

.service-link.container-narrow {
  padding: 10px 0px;
  font-size: 1rem;

  .detail-text {
    font-size: 0.8rem;
  }
}

.link-area {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  font-weight: bold;

  .text-list-title {
    font-weight: normal;
  }

  .link-text {
    color: inherit;
    text-decoration: none;
  }
}

.list_triangle {
  padding: 0px;
  margin: 0px;
  list-style: none;

  .detail-text {
    margin-left: 1.5rem;
  }

  > li {
    position: relative;
    margin: 1rem 0;
  }

  > li:not(.text-list-title) {
    padding: 0px 0px 0px 1em;
  }

  > li:not(.text-list-title)::before {
    position: absolute;
    top: 1rem;
    left: 0;
    transform: translateY(-0.5rem);
    width: 0;
    height: 0;
    border: 0.3em solid transparent;
    border-left: 0.4em solid $ec-primary;
    content: '';
  }
}

.attention-area {
  margin: 10px;
  padding: 10px;
  border: 2px solid $ec-primary;
  text-align: center;

  &.attention-font-wide {
    font-size: 1.2rem;
  }

  &.attention-font-narrow {
    font-size: 1rem;
    color: $text-primary;
  }
}

/* メニューの展開アイコンを上書き */
.container-narrow {
  .service-list {
    ::v-deep .fa-chevron-down:before {
      content: '\f067';
    }
    .v-list-group--active {
      ::v-deep .fa-chevron-down:before {
        content: '\f068';
      }
    }
  }
}
</style>
