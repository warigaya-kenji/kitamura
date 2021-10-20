<template>
  <v-app>
    <div class="m-support">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'メーカーサポート WEBサイト一覧'" />

        <v-container>
          <v-row no-gutters justify="center">
            <v-col v-for="(navi, index) in naviList" :key="index">
              <v-hover v-slot="{ hover }">
                <a v-scroll-to="{ el: navi.href }">
                  <v-card
                    :elevation="hover ? 8 : 0"
                    :class="$vuetify.breakpoint.mdAndUp ? 'text-center pa-2' : 'text-center'"
                    tile
                    outlined
                    :color="hover ? 'grey lighten-1' : ''"
                  >
                    <span class="black--text">{{ navi.naviItem }}</span>
                  </v-card>
                </a>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <div class="section m_support_list">
          <div v-for="site in siteList" :key="site.id">
            <h3 :id="site.id" class="index mb-3">{{ site.line }}</h3>
            <ul class="listArrowSide a">
              <li v-for="(item, index) in site.items" :key="index">
                <a :href="item.href" class="icoOpen" target="_blank">{{ item.name }}</a>
              </li>
            </ul>
            <a href="#top"><p class="move_to_top">ページトップへ戻る</p></a>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import GuideTitle from '@/components/common/guide/title.vue';
export default Vue.extend({
  name: 'm-support',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
  },
  setup: (props, context) => {
    document.title = 'メーカーサポート｜カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '日本最大級のカメラ専門店カメラのキタムラのショッピングサイト。デジカメ・デジタルカメラ・ビデオカメラ・プリンター・フォトフレーム・カメラバッグ・インクなどは当サイトにお任せください。')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'メーカーサポート',
          disabled: true
        }
      ],
      naviList: [
        { naviItem: 'あ行', href: '#index_a' },
        { naviItem: 'か行', href: '#index_ka' },
        { naviItem: 'さ行', href: '#index_sa' },
        { naviItem: 'た行', href: '#index_ta' },
        { naviItem: 'な行', href: '#index_na' },
        { naviItem: 'は行', href: '#index_ha' },
        { naviItem: 'ま行', href: '#index_ma' },
        { naviItem: 'や行', href: '#index_ya' },
        { naviItem: 'ら行', href: '#index_ra' },
        { naviItem: 'わ行', href: '#index_wa' },
      ],
      siteList: [
        {
          id: 'index_a',
          line: 'あ行',
          items: [
            { name: 'アイリバー', href: 'http://www.iriver.jp/support/' },
            { name: 'アドビ', href: 'http://www.adobe.com/jp/support/' },
            { name: 'アピックス', href: 'http://www.apix-intl.co.jp/contact.html' },
            { name: '市川ソフトラボラトリー', href: 'http://www.isl.co.jp/SILKYPIX/japanese/support/' },
            { name: 'イデアインターナショナル', href: 'http://idea-in.com/?pg=inquiry' },
            { name: 'エグゼモード', href: 'http://www.exemode.com/support/index.html' },
            { name: 'エプソン', href: 'http://www.epson.jp/support/' },
            { name: 'ＬＧ電子', href: 'http://www.lg.com/jp/support' },
            { name: 'オリンパス', href: 'http://www.olympus.co.jp/jp/support/cs/index.html' },
          ]
        },
        {
          id: 'index_ka',
          line: 'か行',
          items: [
            { name: 'カシオ', href: 'http://casio.jp/support/' },
            { name: 'キヤノン', href: 'http://cweb.canon.jp/e-support/index.html' },
            { name: 'Qriom', href: 'http://www.yamazen.co.jp/yamazenbook/support/' },
            { name: 'グリーンハウス', href: 'http://www.green-house.co.jp/support/index.html' },
            { name: 'ケイアン', href: 'https://www.keian.co.jp/support/' },
            { name: 'ケンコー', href: 'http://www.kenko-tokina.co.jp/address.html' },
            { name: 'コシナ', href: 'http://www.cosina.co.jp/toiawase/index.html' },
            { name: 'コロナ', href: 'http://www.corona.co.jp/question/index.html' },
          ]
        },
        {
          id: 'index_sa',
          line: 'さ行',
          items: [
            { name: 'サムスン', href: 'http://www.samsung.com/jp/support/main/supportMain.do' },
            { name: 'サンヨー(パナソニック)', href: 'http://ctlg.panasonic.co.jp/sanyo/products/support.html' },
            { name: 'シグマ', href: 'http://www.sigma-photo.co.jp/support/index.htm' },
            { name: 'シャープ', href: 'http://www.sharp.co.jp/support/index.html' },
            { name: 'セガトイズ', href: 'http://www.segatoys.co.jp/support/index.html' },
            { name: '象印マホービン', href: 'http://www.kenko-tokina.co.jp/address.html' },
            { name: 'ソニー', href: 'http://www.zojirushi.co.jp/toiawase/' },
          ]
        },
        {
          id: 'index_ta',
          line: 'た行',
          items: [
            { name: 'タイガー魔法瓶', href: 'http://www.tiger.jp/customer/index.html' },
            { name: 'ダイキン', href: 'http://www.daikin.co.jp/inquiry/index.html' },
            { name: 'ダイニチ', href: 'http://www.dainichi-net.co.jp/support/' },
            { name: 'タカラトミー', href: 'http://www.takaratomy.co.jp/support/' },
            { name: 'タムロン', href: 'http://www.tamron.co.jp/support/top/index.html' },
            { name: 'ツインバード', href: 'http://www.twinbird.jp/support/' },
            { name: 'ティファール', href: 'http://www.t-fal.co.jp/Consumer+service/' },
            { name: 'テスコム', href: 'http://www.tescom-japan.co.jp/support/' },
            { name: 'デロンギ', href: 'http://www.delonghi.co.jp/support' },
            { name: '東芝', href: 'http://www.toshiba.co.jp/contact/index_j.htm' },
            { name: 'トランセンド', href: 'http://www.transcend.co.jp/Support/index.asp?Func1No=3&LangNo=17' },
            { name: 'ドリームメーカー', href: 'http://www.dream-maker.co.jp/support/index.html' },
          ]
        },
        {
          id: 'index_na',
          line: 'な行',
          items: [
            { name: 'ニコン', href: 'http://www.nikon-image.com/support/index.html' },
          ]
        },
        {
          id: 'index_ha',
          line: 'は行',
          items: [
            { name: 'ハイアール', href: 'http://www.haier.com/jp/support/servicesupport/' },
            { name: 'パイオニア', href: 'http://pioneer.jp/support/' },
            { name: 'パナソニック', href: 'http://panasonic.co.jp/cs/index2.html' },
            { name: 'ビクター', href: 'http://www.jvc-victor.co.jp/support/index.html' },
            { name: '日立', href: 'http://www.hitachi.co.jp/support/index.html' },
            { name: '富士通ゼネラル', href: 'http://www.fujitsu-general.com/jp/support/' },
            { name: 'フジフイルム', href: 'http://fujifilm.jp/support/index.html' },
            { name: 'BLUEDOT', href: 'https://www.bluedot.co.jp/support/' },
            { name: 'ペンタックス', href: 'http://www.pentax.jp/japan/support/' },
          ]
        },
        {
          id: 'index_ma',
          line: 'ま行',
          items: [
            { name: '三菱電機', href: 'http://www.mitsubishielectric.co.jp/cs/index.html' },
            { name: 'メリタ', href: 'http://www.melitta.co.jp/support/index.html' },
          ]
        },

        {
          id: 'index_ya',
          line: 'や行',
          items: []
        },
        {
          id: 'index_ra',
          line: 'ら行',
          items: [
            { name: 'リコー', href: 'http://www.ricoh.co.jp/support/' },
          ]
        },
        {
          id: 'index_wa',
          line: 'わ行',
          items: []
        },
      ]
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style scoped>
.m_support_list h3.index {
    margin-top: 10px;
    height: 32px;
    line-height: 32px;
    font-size: 18px;
    padding-left: 18px;
    background-image: url(https://shop.kitamura.jp/files/m_support/images/bg_index.png);
    clear: both;
}

.m_support_list ul.listArrowSide {
    padding-left: 10px;
}

.m_support_list ul.listArrowSide li {
    width: 280px;
    font-size: 14px;
}

ul.listArrowSide li {
    display: inline-block;
    vertical-align: top;
    width: 119px;
    padding-right: 6px;
    word-wrap: break-word;
    *display: inline;
    *zoom: 1;
}

ul.listArrow li, ul.listArrowSide li {
    margin: 0 3px 4px 0.5em;
    padding: 0 2px 0 10px;
    background: url(https://shop.kitamura.jp/common/images/mkr_arrow_red.gif) no-repeat left 0.3em;
}

.m_support_list .move_to_top {
    margin: 0 3px 4px 0.5em;
    padding: 0 2px 0 10px;
    background: url(https://shop.kitamura.jp/common/images/mkr_arrow_red.gif) no-repeat left 0.3em;
    float: right;
    vertical-align: middle;
    font-size: 14px;
    margin: 20px 0;
}
</style>

