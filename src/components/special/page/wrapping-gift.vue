
<template>
  <v-app>
    <!-- ↓ パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />

    <div class="wrapping-gift">
      <h1>
        <v-card flat img="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_01.jpg" width="720" height="80" class="text-right pt-8 pr-3 caption white--text">
          贈り物・景品にカメラのキタムラ【ラッピングギフト】
        </v-card>
      </h1>
      <p class="mt-5 ml-10">高級感ある不織布素材使ったラッピングギフトバッグ。<br />人気のブラウン×ゴールドカラーはシーンを選ばずご使用できます。</p>
      <v-img src="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_02-2.jpg" alt="ラッピングギフト | イメージ" max-width="640" height="auto" />

      <h1 class="mt-4">
        <v-card flat img="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_03.jpg" width="720" height="80" class="text-right pt-8 pr-3 caption white--text">
          ラッピングギフト3サイズと包装紙をご用意しております
        </v-card>
      </h1>
      <p class="ml-10">
        商品に合わせて、適切なサイズのギフトバッグに詰めてお届けする為、ギフトバッグのサイズのご指定は承っておりません。
        なお、商品によってはギフトバッグに入らない場合がございます。その際は、包装紙に包んでお届けいたします。<br /><br />
        あらかじめご了承ください。
      </p>
      <v-img src="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_04.jpg" alt="サイズ" max-width="640" height="auto" />
      <v-img src="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_04-2.jpg" alt="サイズ" max-width="640" height="auto" class="mt-10" />
      <v-img src="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_05.jpg" alt="包装の目安" max-width="640" height="auto" class="mt-10 mx-auto" />

      <h1 class="mt-10">
        <v-card flat img="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_08.jpg" width="720" height="80" class="text-right pt-8 pr-3 caption white--text">
          ラッピングギフト希望商品と一緒にお買い求めください。
        </v-card>
      </h1>
      <p class="ml-10">お買い物カゴの「ラッピング」にチェックを入れ、「購入手続きへ」をクリックしてください。</p>
      <v-img
        src="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_09.png"
        alt="ご注文の手順 | イメージ"
        max-width="680"
        height="auto"
        class="mt-5 mx-auto"
      />

      <v-img
        src="https://shop.kitamura.jp/ts_rsc/361/images/wrapping_06.jpg"
        alt="ラッピングギフトご注文の前にご確認ください"
        max-width="720"
        height="auto"
        class="mt-10"
      />
      <ul>
        <li>商品ページでラッピングを選択可能な商品が対象となります。</li>
        <li>宅配での商品受取の場合のみ選択可能です。店舗受取時は指定できません。</li>
        <li>店舗受取商品との同時購入は出来ません。</li>
        <li>
          複数商品を同時に購入され1つのみラッピングをご注文の場合、注文商品をまとめて包装します。<br />
          ただし、ギフトバックにはいらない場合やラッピング対象外の商品は包装出来ません。
        </li>
        <li>
          同一のラッピング対象商品を複数購入の場合、ラッピングも同数買い物かごに入る仕様となっております。<br />
          1つのみラッピングをご希望の場合、ラッピング希望商品とラッピング希望されない商品を分けてご注文をお願いいたします。
        </li>
        <li>
          腕時計・ブランド品は、メーカー希望小売価格の値札が同梱されている場合がございます。<br />
          別管理の倉庫から直接発送の為、取り外しができません。
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive } from '@vue/composition-api';
export default Vue.extend({
  name: 'page-wrapping-gift',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: () => {
    document.title = 'ラッピングギフトについて | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'プレゼントや景品にぴったり。高級感ある不織布素材使ったラッピングギフトバッグをご用意しています。カメラのキタムラ')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップトップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ラッピングギフトについて',
          disabled: true
        }
      ],
    });
  }
});
</script>

<style lang="scss" scoped>
.wrapping-gift {
  max-width: 720px;
  margin: 0 auto;
  p {
    color: #6e5032;
    line-height: 1.4em;
    font-size: 15px;
  }
  ul {
    margin: 12px 12px 0 12px;
    li {
      margin-left: 40px;
      padding-left: 18px;
      margin-top: 15px;
      text-align: left;
      background: url(https://shop.kitamura.jp/ts_rsc/361/images/icon-list_01.gif) left 5px no-repeat;
      list-style: none;
    }
  }
}
</style>