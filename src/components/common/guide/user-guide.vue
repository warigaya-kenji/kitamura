<template>
  <v-container class="user-guide">
    <v-row>
      <v-col cols="12" sm="6" v-for="(guide, index) in guideList" :key="`guide-${index}`">
        <h2 class="mb-2">{{ guide.type }}</h2>
        <p class="mb-2" v-for="(item, index) in guide.items" :key="`item-${index}`">
          <v-icon color="green" class="mx-2">fas fa-caret-right</v-icon
          ><a :href="item.href" :target="item.href.indexOf('https') ? '' : '_brank'">{{ item.name }}</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'user-guide',
  setup: () => {
    const state = reactive({
      guideList: [
        {
          type: '商品・注文について',
          items: [
            { href: '/ec/guide/kakaku.html', name: '掲載価格・表示価格' },
            { href: '/ec/guide/souryou.html', name: '送料・手数料' },
            { href: '/ec/guide/shiharai', name: 'お支払い方法' },
            { href: '/ec/guide/otodoke.html', name: '商品お届け・納期' },
            { href: '/ec/guide/cancel.html', name: 'キャンセル' },
            { href: '/ec/ryoushuusho.html', name: '領収書' },
            { href: '/ec/guide/renraku.html', name: 'お客様へのご連絡' },
          ]
        },
        {
          type: 'キタムラネット会員について',
          items: [
            { href: '/ec/guide/riyou_kaiin', name: 'キタムラネット会員とは' },
            { href: '/ec/guide/riyou_kaiinkakaku', name: 'キタムラネット会員割引きとは' },
          ]
        },
        {
          type: 'サービス',
          items: [
            { href: '/ec/guide/hoshou', name: '5年間保証' },
            { href: '/ec/guide/used_hoshou.html', name: '中古カメラ6ヶ月保証' },
            { href: '/ec/guide/hoshou_line.html', name: 'LINEで追加保証' },
            { href: '/ec/guide/shitadori', name: 'なんでも下取り' },
            { href: '/ec/guide/afterservice.html', name: 'アフターサービス' },
            { href: '/ec/guide/henpin.html', name: '返品・交換' },
            { href: '/ec/guide/syuuri', name: '修理のご案内' },
            { href: '/ec/guide/recycle', name: '家電リサイクル回収' },
            { href: '/ec/guide/m_support', name: 'メーカーサポート' },
            { href: 'https://www.kitamura.jp/service/tcard/', name: 'Tポイント' },
          ]
        },
        {
          type: 'その他',
          items: [
            { href: 'https://ecfaq.kitamura.jp/s/', name: 'よくある質問' },
            { href: '/ec/guide/riyou_security.html', name: 'セキュリティ／プライバシー' },
          ]
        },
      ]

    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.user-guide {
  a:hover {
    color: #d80b24;
    text-decoration: underline;
  }

  a {
    color: #1122cc;
  }
}

.user-guide h2 {
  padding: 9px 15px 6px;
  overflow: hidden;
  line-height: 1.2;
  font-size: 1.167em;
  background: url(https://shop.kitamura.jp/common/images/bg_title_02.gif) no-repeat;
  border-radius: 3px;
}
</style>