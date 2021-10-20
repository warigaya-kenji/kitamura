<template>
  <v-app>
    <div class="shacolla">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <v-container fluid class="w720 feature">
          <p>シャコラを使って写真を壁に飾りましょう</p>
          <v-img src="/ec/images2/special/camera/frame/shacolla/00.jpg" alt="シャコラ特集" max-width="720" max-height="130" class="mx-auto"></v-img>
          <p class="mt-2">お気に入りの写真を、壁に貼ってお部屋を楽しく飾りましょう<br />画鋲もテープも接着剤もつかわず写真を貼って、飾れるフォトパネルです</p>
          <h2>「シャコラ」は賃貸のお部屋でも安心して写真を飾れます。</h2>
          <p class="mt-2">
            特殊な低粘着なので、貼りなおしも自由自在です。<br />
            壁に穴を開けることなく写真を気軽に、手軽に壁に飾ることができます。
          </p>
          <v-img src="/ec/images2/special/camera/frame/shacolla/01.jpg" max-width="700" max-height="292" class="mx-auto my-2"></v-img>
          <h4>Shacolla（シャコラ）ラインナップ<br />サイズ展開：チェキ/ましかく/L/ハガキ/KG/2L/A4/A5</h4>

          <v-row class="pa-2">
            <v-col cols="12" sm="6">
              <a href="/ec/special/camera/frame/shacolla/2247">フジフイルム<br />シャコラ（shacolla）<br />壁タイプ 1枚 </a>
              <v-img
                src="https://shopimg.kitamura.jp/images/pd/eb0/68a/573/60e/4f2/c4e/69d/94e/d62/5bf/03k/017/6ay/b/L.jpg"
                alt="フジフイルム シャコラ（shacolla）"
                max-width="340"
                max-height="340"
                class="mx-auto"
              ></v-img>
              <p class="mt-2 mb-2 text-center">価格<span class="red--text font-weight-bold">¥165～</span>（税込）</p>
              <orangeBtn :btntxt="'商品一覧を見る'" :href="'/ec/special/camera/frame/shacolla/2247'" :height="'42px'" :btnColor="'yellowish'" />
            </v-col>
            <v-col cols="12" sm="6">
              <a href="/ec/special/camera/frame/shacolla/2246">フジフイルム<br />シャコラ（shacolla）<br />壁タイプ 5枚パック </a>
              <v-img
                src="https://shopimg.kitamura.jp/images/pd/07f/088/34d/75f/65a/2f4/e45/742/6fa/360/167/kv9/b1s/j/L.jpg"
                alt="フジフイルム シャコラ（shacolla）"
                max-width="340"
                max-height="340"
                class="mx-auto"
              ></v-img>
              <p class="mt-2 mb-2 text-center">価格<span class="red--text font-weight-bold">¥528～</span>（税込）</p>
              <orangeBtn :btntxt="'商品一覧を見る'" :href="'/ec/special/camera/frame/shacolla/2246'" :height="'42px'" :btnColor="'yellowish'" />
            </v-col>
          </v-row>

          <!--▼シャコラ１-->
          <h4>Shacolla（シャコラ）の貼り方</h4>
          <div class="pa-2">
            <v-img src="/ec/images2/special/camera/frame/shacolla/03.jpg" max-width="700" max-height="460" class="mx-auto"></v-img>
          </div>
          <h2 class="mt-10">「シャコラ」と相性バッチリ！プリントサービス</h2>
          <v-row class="mb-4">
            <v-col cols="12" sm="6">
              <h4>ワンダーシャッフルプリント</h4>
              <a href="https://www.kitamura-print.com/wonder_shuffle/" target="_brank">
                <v-img src="https://www.kitamura-print.com/wonder_shuffle/images/bigImage.jpg" max-width="386px" max-height="340px" class="mx-auto"></v-img>
              </a>
              <p>※プリントサービスへ移動します</p>
              <orangeBtn
                :btntxt="'サービスページを見る'"
                :href="'https://www.kitamura-print.com/wonder_shuffle/'"
                :height="'42px'"
                :btnColor="'yellowish'"
                :type="2"
                :icon="false"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <h4>スマホ写真プリント</h4>
              <a href="https://www.kitamura-print.com/smartphone_print/" target="_brank">
                <v-img
                  src="https://www.kitamura-print.com/smartphone_print/images/bigImage.jpg"
                  alt="スマホプリント"
                  max-width="386px"
                  max-height="340px"
                  class="mx-auto"
                ></v-img>
              </a>
              <p>※プリントサービスへ移動します</p>
              <orangeBtn
                :btntxt="'サービスページを見る'"
                :href="'https://www.kitamura-print.com/smartphone_print/'"
                :height="'42px'"
                :btnColor="'yellowish'"
                :type="2"
                :icon="false"
              />
            </v-col>
          </v-row>

          <!-- ↓ 特集IDでの商品一覧表示 -->
          <product-list-by-special-id class="mb-5" :specialId="2244" />
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';

export default Vue.extend({
  name: 'shacolla',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    orangeBtn: OrangeBtn
  },
  setup: (props, context) => {
    document.title = 'フジフイルム シャコラ（shacolla）で写真を壁に飾ろう！ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '「シャコラ」を使って、お気に入りの写真を壁に飾りましょう！賃貸の壁でも安心！画鋲を使わないで写真が貼れます。カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'フジフイルム シャコラ（shacolla）で写真を壁に飾ろう！',
          disabled: true
        }
      ]
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.w720 {
  max-width: 720px;
  margin: 0 auto;
}

div.feature h2 {
  margin-top: 10px;
  padding-right: 11px;
  padding-left: 10px;
  border-left-width: 6px;
  border-left-style: solid;
  border-right-color: #d6d6d6;
  border-bottom-color: #fff;
  border-left-color: #333;
  font-size: 16pt;
  font-weight: 600;
  margin-right: 0px;
  margin-left: 5px;
  letter-spacing: 2pt;
  padding-top: 7px;
  padding-bottom: 7px;
  color: #333;
}

div.feature h4,
div.feature h5 {
  border-bottom: 3px solid #ed3190;
  border-right-color: #d6d6d6;
  color: #ed3190;
  font-size: 13pt;
  font-weight: 600;
  margin-left: 0;
  margin-right: 15px;
  margin-top: 30px;
  padding-bottom: 5px;
  padding-left: 0;
  padding-right: 10px !important;
}
</style>
