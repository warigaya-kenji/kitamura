<template>
  <v-app>
    <div class="campaign">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <h1 class="text-subtitle-2 grey--text">メーカーキャンペーン特集</h1>

        <v-img src="/ec/images2/special/camera/general/campaign/main-banner.jpg" max-width="95%" height="auto"></v-img>

        <p class="text-subtitle-1 text-center mb-4 font-weight-bold">現在開催中のメーカー主催のキャッシュバック/プレゼントキャンペーンを集めました</p>

        <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col cols="12" md="4" sm="6" v-for="(campaign, index) in campaignList" :key="`campaign-${index}`">
                <v-card tile color="#fffff0" class="c-contents pa-2 mb-2" height="400px">
                  <v-card-text class="black--text font-weight-bold border-l-red pl-2 pt-0 pb-0 pr-0 mb-2 name-height">{{ campaign.campaignName }}</v-card-text>
                  <router-link :to="campaign.herf" target="_blank">
                    <v-img :src="campaign.img" alt="ソニー 新VLOGCAM発売記念キャンペーン" max-width="100%" height="auto" class="hover mb-2"></v-img
                  ></router-link>
                  <v-card-text class="black--text pa-0 content-height">{{ campaign.Contents }} </v-card-text>
                  <v-card-text class="black--text pa-0 caption my-4 period-height">【対象期間】<br />{{ campaign.TargetPeriod }} </v-card-text>
                  <v-btn
                    elevation="10"
                    block
                    color="rgba(255,89,0,1)"
                    class="white--text font-weight-bold my-4"
                    height="45"
                    @click="linkToOtherWindow(campaign.herf)"
                    >キャンペーン詳細情報はこちら</v-btn
                  >
                </v-card>
              </v-col>
            </v-row>

            <!-- ↓ SNS -->
            <facebookAndTwitter />
          </v-container>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';

export default Vue.extend({
  name: 'leica',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter
  },
  data() {
    return {
      campaignList: [
        {
          campaignName: 'ソニー 新VLOGCAM発売記念キャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8557.jpg',
          herf: 'https://www.sony.jp/camera/campaign/cb21apsc_summer/',
          Contents: '期間中、VLOGCAM ZV-E10シリーズと対象レンズ・アクセサリーを同時購入＆ご応募で、もれなく対象商品ごとに定めた金額をキャッシュバック！',
          TargetPeriod: '発売日～2021年10月3日(日)'
        },
        {
          campaignName: 'ニコン Z 5 キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8556.jpg',
          herf: 'https://www.sony.jp/camera/campaign/cb21apsc_summer/',
          Contents: '>期間中、対象製品をご購入後ニコンイメージング会員登録&製品登録し、ご応募された方全員に、最大3万円をキャッシュバック！',
          TargetPeriod: '2021年7月30日(金)～2021年10月4日(月)'
        },
        {
          campaignName: 'パナソニック LUMIX Sシリーズ フルサイズ一眼カメラキャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8520.jpg',
          herf: 'https://panasonic.jp/dc/products/s_series/campaign_cashback2021.html',
          Contents: '期間中、対象商品をご購入&ご応募で、もれなく最大4万円をキャッシュバック！',
          TargetPeriod: '2021年7月15日(木)～2021年9月12日(日)'
        },
        {
          campaignName: 'ライカ Mマウントアダプター プレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8514.jpg',
          herf: 'https://jp.leica-camera.com/フォトグラフィー/ライカSL/The-fundamental-choice-本質的な選択/M-Adapter-L-Promotion',
          Contents: '期間中、対象品をご購入&お申し込みで、「M用L レンズアダプター ブラック」をプレゼント！',
          TargetPeriod: '2021年7月2日(金)～2021年9月30日(木)'
        },
        {
          campaignName: 'ニコンZ fc発売記念！プレミアムエクステリア張替えキャンペーン',
          herf: 'https://www.nikon-image.com/event/campaign/zfc_premiumexterior/',
          img: 'https://shopimg.kitamura.jp/images/banner/8503.jpg',
          Contents: '購入後、製品登録＆お申込みで、ボディの擬革を選択したカラーに無料で張替え！※数量なくなり次第終了。ニコンイメージング会員への登録が必要です',
          TargetPeriod: '対象製品の発売日～数量なくなり次第終了'
        },
        {
          campaignName: 'ニコン Z 7II&Z 6II XQD同梱キャンペーン',
          herf: 'https://www.nikon-image.com/event/campaign/xqd_campaign2021/',
          img: 'https://shopimg.kitamura.jp/images/banner/8496.jpg',
          Contents: '期間中、Z 7IIもしくはZ 6IIをご購入で、もれなくXQDメモリーカードプレゼント！<br>※数量限定、なくなり次第終了',
          TargetPeriod: '2021年7月1日(水)～なくなり次第終了'
        },
        {
          campaignName: 'パナソニック LUMIX GH5M2＆Gレンズキャッシュバックキャンペーン',
          herf: 'https://panasonic.jp/dc/products/g_series/gh5m2/campaign_cashback.html',
          img: 'http://shopimg.kitamura.jp/images/banner/8483.jpg',
          Contents: '期間中、対象商品をご購入&ご応募で、もれなく最大67,000円をキャッシュバック！',
          TargetPeriod: '2021年6月25日(金)～2021年8月29日(日)'
        },
        {
          campaignName: 'オリンパス PEN E-P7 発売記念',
          herf: 'https://www.olympus-imaging.jp/event_campaign/campaign/c210609a/index.html',
          img: 'https://shopimg.kitamura.jp/images/banner/8454.jpg',
          Contents: '期間中、対象商品をご購入後、ユーザー登録しキャンペーンにご応募された方に、もれなく応募コースに準じた景品をプレゼント！',
          TargetPeriod: '2021年6月9日(水)～ 2021年9月30日(木)'
        },
        {
          campaignName: 'パナソニック LUMIX DC-GH5 II キャッシュバックキャンペーン',
          herf: 'https://panasonic.jp/dc/products/g_series/gh5m2/campaign_cashback.html',
          img: 'http://shopimg.kitamura.jp/images/banner/8436.jpg',
          Contents: '期間中、対象商品をご購入&ご応募で、もれなく最大20,000円をキャッシュバック！',
          TargetPeriod: '2021年6月25日(金)～2021年8月29日(日)'
        },
        {
          campaignName: 'パナソニック LUMIX G100&Ｇレンズキャッシュバックキャンペーン',
          herf: 'https://panasonic.jp/dc/products/g_series/g100/campaign_cashback.html',
          img: 'http://shopimg.kitamura.jp/images/banner/8482.jpg',
          Contents: '期間中、対象商品をご購入&ご応募で、もれなく最大57,000円をキャッシュバック！',
          TargetPeriod: '2021年6月25日(金)～2021年8月29日(日)'
        },
        {
          campaignName: 'フジフイルム XFレンズ&GFレンズキャッシュバックキャンペーン',
          herf: 'https://fujifilm-x.com/ja-jp/special/cb21-xgfx-summer/',
          img: 'https://shopimg.kitamura.jp/images/banner/8517.jpg',
          Contents: '期間中、対象製品をご購入&製品登録し、ご応募されたお客様全員に、最大20万円をキャッシュバック！',
          TargetPeriod: '2021年7月9日(金)～2021年9月20日(月)'
        },
        {
          campaignName: 'GoPro サマーキャンペーン 2021',
          herf: 'https://www.tajima-motor.com/gopro/campaign/210722cam/',
          img: 'https://shopimg.kitamura.jp/images/banner/8548.jpg',
          Contents: '期間中、対象商品をご購入&WEB応募で、お得なセットをもれなくプレゼント！',
          TargetPeriod: '2021年7月22日(木)～2021年8月8日(日)'
        },
        {
          campaignName: 'HD DA★16-50mm レンズアップグレードキャンペーン',
          herf: 'http://www.ricoh-imaging.co.jp/japan/event/2021/16-50_upgrade/',
          img: 'https://shopimg.kitamura.jp/images/banner/8542.jpg',
          Contents: '期間中、対象商品をご購入いただいたお客様のお手持ちのPENTAXレンズを一律1万円で下取り！',
          TargetPeriod: '発売日～2021年11月7日(日)'
        },
        {
          campaignName: 'パナソニック カメラグランプリレンズ賞 受賞記念キャンペーン',
          herf: 'https://panasonic.jp/dc/products/s_series_lens/lumix_s_20-60/camera_gp_lens_2021cp.html',
          img: 'http://shopimg.kitamura.jp/images/banner/8464.jpg',
          Contents: '期間中、対象商品をご購入&ご応募で、記念品をプレゼント！',
          TargetPeriod: '2021年5月17日(月)～2021年8月29日(日)'
        },
        {
          campaignName: 'instax mini40 instax mini11 フィルムプレゼントキャンペーン',
          herf: 'https://mini11-40-filmcp.com',
          img: 'https://shopimg.kitamura.jp/images/banner/8523.jpg',
          Contents: '期間中、対象商品をご購入&応募された方全員に、フジフイルムモールで使用できる「miniフィルム10枚入1パック無料クーポン」をプレゼント！',
          TargetPeriod: '2021年7月16日(金)～2021年9月26日(日)'
        },
        {
          campaignName: 'ソニー ワイヤレスポータブルスピーカー Summerキャンペーン2021',
          herf: 'https://www.sony.jp/active-speaker/campaign/SRS_2021summer/',
          img: 'https://shopimg.kitamura.jp/images/banner/8497.jpg',
          Contents: '期間中、対象商品をご購入&応募された方全員に、最大3,000円をキャッシュバック！',
          TargetPeriod: '2021年7月9日(金)～2021年9月21日(火)'
        },
        {
          campaignName: 'パナソニック この夏いい音はじめようキャンペーン',
          herf: 'https://panasonic.jp/headphone/campaign/2021sa_twcp.html',
          img: 'https://shopimg.kitamura.jp/images/banner/8433.jpg',
          Contents: '期間中、対象商品をご購入&ご応募いただくと、もれなくLINEポイントをプレゼント！',
          TargetPeriod: '2021年6月9日(水)～2021年8月29日(日)'
        },
        {
          campaignName: 'ソニー 音楽配信サービス ガラポン抽選キャンペーン',
          herf: 'https://www.sony.jp/headphone/campaign/2021garapon',
          img: 'https://shopimg.kitamura.jp/images/banner/8448.jpg',
          Contents: '期間中、対象商品をご購入後LINEでくじ引きすると、指定の音楽配信サービスの利用が最大1年無料！',
          TargetPeriod: '2021年6月9日(水)～2021年9月21日(火)'
        },
        {
          campaignName: 'ソニー 360 Reality Audio 体験がアタル！キャンペーン',
          herf: 'https://www.sony.jp/headphone/campaign/2021_360RealityAudio_taiken/',
          img: 'https://shopimg.kitamura.jp/images/banner/8446.jpg',
          Contents: '期間中、対象商品をご購入し製品登録&応募された方に、抽選で『360 Reality Audio 体験』をプレゼント！',
          TargetPeriod: '2021年6月9日(水)～2021年9月21日(火)'
        },
        {
          campaignName: 'ソニー Xperiaで最新の音楽体験キャンペーン',
          herf: 'https://xperia.sony.jp/campaign/360RA/',
          img: 'https://shopimg.kitamura.jp/images/banner/8428.jpg',
          Contents: '期間中、対象商品をご購入&ご応募された方に、対象音楽配信サービスのうち、いずれかの3ヶ月無料体験クーポンをプレゼント！',
          TargetPeriod: '2021年5月28日(金)～2021年9月21日(火)'
        },
        {
          campaignName: 'ソニー 360 Reality Audio 無料トライアルキャンペーン',
          herf: 'https://www.sony.jp/headphone/campaign/360RealityAudio/',
          img: 'https://shopimg.kitamura.jp/images/banner/8391.jpg',
          Contents: '期間中、対象商品をお持ちで製品のサポート登録&応募された方全員に、音楽配信サービス3か月無料クーポンプレゼント！<br>※過去購入者も対象',
          TargetPeriod: '2021年4月16日(金)～2022年3月5日(金)'
        },
        {
          campaignName: 'パナソニック スマホとビストロをつなげようキャンペーン',
          herf: 'https://panasonic.jp/range/connect2102.html',
          img: 'https://shopimg.kitamura.jp/images/banner/8269.jpg',
          Contents: '期間中、対象商品をご購入&アプリとビストロをつないで登録後、アンケート回答された方に2,000円分のクラパナコインをプレゼント！',
          TargetPeriod: '2021年2月10日(水)～2021年8月17日(火)'
        }
      ]
    };
  },
  methods: {
    linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップトップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'メーカーキャンペーン',
          disabled: true
        }
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

<style lang="scss" scoped>
.leica .main {
  width: 100%;
  background: url(/ec/images2/special/camera/feature/leica/main.jpg);
  height: 250px;
}

.txpo {
  width: 100%;
  margin: 0;
  padding: 125px 0px 0px 90px;
  box-sizing: border-box;
  font-size: 22px;
}

.red-t {
  color: #d80b24;
}

.contingency_t {
  border-collapse: collapse;
  text-align: center;
  margin: 0 0 20px 0;
  width: 100%;
}

.contingency_t th {
  text-align: center;
  vertical-align: top;
  color: #151515;
  border: 1px solid #b9b9b9;
  width: 30%;
  vertical-align: middle;
}

.bg-color {
  background-color: #eee;
}

.c-contents {
  border: solid 1px #f0e68c;
  box-sizing: border-box;
}

.border-l-red {
  border-left: 10px solid #e31500;
}

.name-height {
  height: 4em;
}

.content-height {
  height: 5.6em;
}

.period-height {
  height: 3em;
}
</style>