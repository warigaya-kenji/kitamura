<template>
  <v-app>
    <div class="wonderphotobox">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- メインビジュアル-->
        <h1 id="wonderpb-mainv" class="mb-5">
          <v-img
            src="/ec/images2/special/camera/album/storage/wonderphotobox/mainv.png"
            max-width="720"
            max-height="366"
            alt="らくちん楽しい写真ライフを始めよう! デジタルフォトアルバム Wonder Photo Box ワンダーフォトボックス"
            class="mx-auto"
          ></v-img>
        </h1>

        <!-- こんなお悩みはありませんか？-->
        <div id="wonderpb-onayami" class="mb-7">
          <div v-for="(onayami, i) in onayamiList" :key="i" :class="i === 0 ? 'mb-5' : ''">
            <v-img
              :src="`/ec/images2/special/camera/album/storage/wonderphotobox/onayami/${i + 1}.png`"
              :alt="onayami"
              max-width="720"
              height="auto"
              class="mx-auto"
            ></v-img>
          </div>
        </div>

        <!-- 1ラクラク自動整理-->
        <div id="wonderpb-jidouseiri" class="mb-6">
          <div v-for="(jidouseiri, i) in jidouseiriList" :key="i" :class="i === 2 || i === 3 ? 'mb-5' : ''">
            <v-img
              :src="`/ec/images2/special/camera/album/storage/wonderphotobox/jidouseiri/${i + 1}.png`"
              :alt="jidouseiri"
              max-width="720"
              height="auto"
              class="mx-auto"
            ></v-img>
          </div>
        </div>

        <!-- 2カンタンプリント注文-->
        <div id="wonderpb-tyuumon">
          <ul>
            <li class="wonderpb-item1 mb-5">
              <v-img
                src="/ec/images2/special/camera/album/storage/wonderphotobox/tyuumon/1.png"
                max-width="720"
                height="auto"
                alt="2簡単プリント注文 プリント/フォトブック作りをもっと身近に!"
                class="mx-auto"
              />
            </li>
            <li class="wonderpb-item2 mb-5">
              <v-img
                src="/ec/images2/special/camera/album/storage/wonderphotobox/tyuumon/2.png"
                max-width="720"
                height="auto"
                alt="いつものプリント注文がおうちのワンダーフォトボックスから簡単、手軽に。"
                class="mx-auto mb-2 mb-sm-0"
              />
              <a href="http://www.kitamura-print.com/" class="btn-print" target="_blank"
                ><v-img
                  src="/ec/images2/special/camera/album/storage/wonderphotobox/tyuumon/btn_print.png"
                  max-width="289"
                  height="auto"
                  alt="プリントサービスの詳細をみる"
                  class="hover"
              /></a>
            </li>
            <li class="wonderpb-item3 mb-5">
              <v-img
                src="/ec/images2/special/camera/album/storage/wonderphotobox/tyuumon/3.png"
                max-width="720"
                height="auto"
                alt="写真整理＆写真選びが自動だからフォトブックづくりも簡単!"
                class="mx-auto mb-2 mb-sm-0"
              />
              <a href="http://photobook.kitamura.jp/" class="btn-photo" target="_blank"
                ><v-img
                  src="/ec/images2/special/camera/album/storage/wonderphotobox/tyuumon/btn_photo.png"
                  max-width="289"
                  height="auto"
                  alt="フォトブックについて詳細をみる"
                  class="hover"
              /></a>
            </li>
            <li class="wonderpb-item4">
              <v-img
                src="/ec/images2/special/camera/album/storage/wonderphotobox/tyuumon/4.png"
                max-width="720"
                height="auto"
                alt="スマホdeチェキでもプリントできる!"
                class="mx-auto mb-2 mb-sm-0"
              />
              <a
                href="/ec/list?narrow18=0&keyword=スマホdeチェキ&category=&r=&index=&searchbox=1&sort=number20,Number17,Score&q=スマホdeチェキ&path=&n20c=完了商品は除く"
                class="btn-smt"
                ><v-img
                  src="/ec/images2/special/camera/album/storage/wonderphotobox/tyuumon/btn_smt.png"
                  max-width="289"
                  height="auto"
                  alt="スマホdeチェキの詳細をみる"
                  class="hover"
              /></a>
            </li>
          </ul>
        </div>

        <!-- 3いつでもどこでも画像共有-->
        <div id="wonderpb-kyouyuu">
          <div v-for="(kyouyuu, i) in kyouyuuList" :key="i" :class="i === 1 ? 'mb-5' : ''">
            <v-img
              :src="`/ec/images2/special/camera/album/storage/wonderphotobox/kyouyuu/${i + 1}.png`"
              :alt="kyouyuu"
              max-width="720"
              height="auto"
              class="mx-auto"
            ></v-img>
          </div>
        </div>

        <!-- 関連商品ページはこちら-->
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="4">
              <a href="http://www.kitamura-print.com/" target="_blank">
                <v-img
                  src="/ec/images2/special/camera/album/storage/wonderphotobox/kanren/btn_print.png"
                  alt="デジカメ・スマホプリントについてもっと知る"
                  max-width="303"
                  height="auto"
                  class="mx-auto ml-sm-auto hover"
                ></v-img
              ></a>
            </v-col>
            <v-col cols="12" sm="4">
              <a href="http://photobook.kitamura.jp/" target="_blank">
                <v-img
                  src="/ec/images2/special/camera/album/storage/wonderphotobox/kanren/btn_photo.png"
                  alt="フォトブックについてもっと知る"
                  max-width="303"
                  height="auto"
                  class="mx-auto hover"
                ></v-img
              ></a>
            </v-col>
          </v-row>
        </v-container>

        <!--アイテム-->
        <h3 class="sbtext2 text-subtitle-1 my-5" id="price">フジフイルム ワンダーフォトボックスBOX PB-20 対象商品一覧</h3>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1663" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'wonderphotobox',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: () => {
    document.title = 'フジフイルム ワンダーフォトボックスBOX PB-20 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'たまった画像の整理ができなくてお困りのあなたへ。”つなぐ”と”押す”だけで「魔法の写真箱」がすべて解決！日本最大級のカメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'フジフイルム ワンダーフォトボックスBOX PB-20',
          disabled: true
        }
      ],
      onayamiList: ['こんなお悩みありませんか?', '家族みんなが撮ったたくさんの写真を整理したい たまった写真を簡単にプリント・フォトブックにしたい スマホやカメラの写真をシェアして一緒にみて楽しみたい', '', 'そんなあなたに魔法の写真箱 デジタルフォトアルバム Wonder Photo Box ワンダーフォトボックス'],
      jidouseiriList: ['1 ラクラク自動整理 ワンステップで使える3つの自動整理機能が便利!', '', '自動整理機能1 撮影日、撮影場所、被写体ごとに自動で整理!', '自動整理機能2 写真の顔を認識して人物別に自動でフォルダ分け!', '自動整理機能3 大量の画像からベストショットを自動で選んで表示!'],
      kyouyuuList: ['3いつでもどこでも画像共有 みんなの写真をまとめて保存。シェアしてみんなで楽しめる!', '家族みんなの画像を一台に!', 'テレビ・スマホ・タブレットみんなつながる! 離れた場所からでも楽しめる!']
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.w750 {
  max-width: 750px;
  margin: 0 auto;
}
ul li {
  list-style: none;
}
#wonderpb-tyuumon ul li {
  position: relative;
}
#wonderpb-tyuumon .btn-print {
  display: block;
  position: absolute;
  top: 204px;
  left: 130px;
}
#wonderpb-tyuumon .btn-photo {
  display: block;
  position: absolute;
  top: 244px;
  right: 130px;
}
#wonderpb-tyuumon .btn-smt {
  display: block;
  position: absolute;
  top: 168px;
  left: 130px;
}
@media screen and (max-width: 655px) {
  #wonderpb-tyuumon {
    .btn-print,
    .btn-photo,
    .btn-smt {
      position: static;
    }
  }
}
</style>
