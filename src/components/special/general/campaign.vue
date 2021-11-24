<template>
  <v-app>
    <div class="campaign">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <h1 class="text-subtitle-2 grey--text">メーカーキャンペーン特集</h1>

        <v-img src="/ec/images2/special/general/campaign/main-banner.jpg" max-width="100%" height="auto"></v-img>

        <p class="text-subtitle-1 text-center mb-4 font-weight-bold">現在開催中のメーカー主催のキャッシュバック/プレゼントキャンペーンを集めました</p>

        <v-main>
          <v-container fluid>
            <v-row dense class="mb-6">
              <v-col cols="12" md="4" sm="6" v-for="(campaign, index) in campaignList" :key="`campaign-${index}`">
                <v-card tile color="#fffff0" class="c-contents pa-2 mb-2" height="400px">
                  <v-card-text class="black--text font-weight-bold border-l-red pl-2 pt-0 pb-0 pr-0 mb-2 name-height">{{ campaign.campaignName }}</v-card-text>
                  <a :href="campaign.href" target="_blank">
                    <v-img :src="campaign.img" :alt="campaign.campaignName" max-width="350" height="auto" class="hover mb-2 mx-auto"></v-img
                  ></a>
                  <v-card-text class="black--text pa-0 content-height">{{ campaign.Contents }} </v-card-text>
                  <v-card-text class="black--text pa-0 caption my-4 period-height">【対象期間】<br />{{ campaign.TargetPeriod }} </v-card-text>
                  <v-btn elevation="10" block class="orange-btn white--text font-weight-bold my-4" height="45" @click="linkToOtherWindow(campaign.href)"
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
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'campaign',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter
  },
  methods: {
    linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
  },
  setup: (props, context) => {
    document.title = 'メーカーキャンペーン | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '今が買い時！メーカーキャンペーン！キャッシュバックやプレゼントなど、お得なメーカーキャンペーンをご紹介♪ | カメラのキタムラ')

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
      ],
      campaignList: [
        // {
        //   campaignName: '',
        //  img: '',
        //  href: '',
        //  Contents: '',
        //  TargetPeriod: ''
        // },
        {
          campaignName: '欲しい！をかなえる Winter Campaign',
          img: 'https://shopimg.kitamura.jp/images/banner/8701.jpg',
          href: 'https://cweb.canon.jp/eos/campaign/eos-winter2021/',
          Contents: '期間中、対象商品をご購入＆応募されたお客様に、もれなく最大3万円分のVISAギフトカードをキャッシュバック！',
          TargetPeriod: '2021年11月19日(金)～2022年1月11日(火)'
        },
        {
          campaignName: '新ブランド『OM SYSTEM』発表記念キャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8696.jpg',
          href: 'https://www.olympus-imaging.jp/event_campaign/campaign/c211104a/index.html',
          Contents: '期間中、対象商品をご購入後、ユーザー登録と製品登録をして頂き、ご応募された方を対象に、もれなくUCギフトカード（プリペイド式）をプレゼント！',
          TargetPeriod: '2021年11月4日(木)～2021年12月31日(金)'
        },
        {
          campaignName: 'ソニー αフルサイズ ウインタープレミアムキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8656.jpg',
          href: 'https://www.sony.jp/camera/campaign/cb22ffml_winter/',
          Contents: '期間中、対象商品をご購入&ご応募されたお客様に、対象商品ごとに定めた金額をもれなくキャッシュバック！',
          TargetPeriod: '2021年10月22日(金)～2022年1月11日(日)'
        },
        {
          campaignName: 'リコー GR IIIx オリジナル PURPLEリングキャッププレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8612.jpg',
          href: 'http://www.ricoh-imaging.co.jp/japan/event/2021/griiix_purplering/',
          Contents: '期間中、対象商品をご購入&製品登録とアンケートにご回答された方に、先着でオリジナル PURPLEリングキャップをプレゼント！',
          TargetPeriod: '本体発売日～数量なくなり次第終了'
        },
        {
          campaignName: 'ニコンZ fc発売記念！プレミアムエクステリア張替えキャンペーン',
          href: 'https://www.nikon-image.com/event/campaign/zfc_premiumexterior/',
          img: 'https://shopimg.kitamura.jp/images/banner/8503.jpg',
          Contents: '購入後、製品登録＆お申込みで、ボディの擬革を選択したカラーに無料で張替え！※数量なくなり次第終了。ニコンイメージング会員への登録が必要です',
          TargetPeriod: '対象製品の発売日～数量なくなり次第終了'
        },
        {
          campaignName: 'カメラのキタムラ限定 カールツァイス何でも下取りキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8709.jpg',
          href: 'https://shop.kitamura.jp/ec/special/news?news=12090&bn=8708',
          Contents: 'なんでも下取りをご利用で対象商品が最大2万円引き！',
          TargetPeriod: '2021年11月19日(金)～2022年1月10日(月)'
        },
        {
          campaignName: 'ピークデザイン製 ZEISSカメラストラッププレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8693.jpg',
          href: 'https://www.kenko-tokina.co.jp/lp/campaign2021/zeiss.html',
          Contents: 'ZEISSカメラ用交換レンズ、Batis・Loxia・Touit購入で先着200名様にオリジナルストラッププレゼント！※無くなり次第終了',
          TargetPeriod: '2021年11月1日(月)～無くなり次第終了'
        },
        {
          campaignName: 'SIGMA 60th Anniversary キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8684.jpg',
          href: 'https://www.sigma-global.com/jp/news/2021/10/19/16898/',
          Contents: '期間中、対象製品をご購入&ご応募された方に、最大3万円をキャッシュバック！',
          TargetPeriod: '2021年10月28日(木)～2022年1月12日(水)'
        },
        {
          campaignName: 'Tokinaレンズキャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8682.jpg',
          href: 'https://www.kenko-tokina.co.jp/lp/campaign2021/tokina.html',
          Contents: '期間中、対象商品をご購入&ご応募されたお客様に、5,000円をキャッシュバック！',
          TargetPeriod: '2021年11月1日(月)～2022年1月15日(土)'
        },
        {
          campaignName: '銘匠光学 ビューファインダープレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8586.jpg',
          href: 'https://stkb.co.jp/info/?p=18267',
          Contents: '期間中、TTArtisan 21mm f/1.5 ASPH Mマウントレンズを購入でビューファインダーをプレゼント！※なくなり次第終了',
          TargetPeriod: '2021年9月1日(水)～なくなり次第終了'
        },
        {
          campaignName: 'パナソニック 新米5銘柄プレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8699.jpg',
          href: 'https://panasonic.jp/suihan/campaign/cp2111.html',
          Contents: '期間中、対象の炊飯器をご購入、ご応募いただいたお客様に、新米5銘柄の各2合パックセットをプレゼント！',
          TargetPeriod: '2021年11月17日(水)～12月31日(金)'
        },
        {
          campaignName: 'パナソニック 食洗機専用洗剤プレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8697.jpg',
          href: 'https://panasonic.jp/dish/contents/campaign/present2111.html',
          Contents: '期間中、対象機種をご購入&ご応募いただいたお客様に、もれなく『食洗機専用洗剤 約3か月分』をプレゼント！',
          TargetPeriod: '2021年11月10日(水)～12月26日(日)'
        },
        {
          campaignName: 'ソニー #音ロト冬まつり キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8692.jpg',
          href: 'https://www.sony.jp/headphone/campaign/2021_otolotofuyu/',
          Contents: '期間中、抽選に参加し、対象商品をご購入&応募されたお客様に、最大1万円をキャッシュバック！',
          TargetPeriod: '2021年11月5日(金)～2022年1月11日(火)'
        },
        {
          campaignName: 'ソニー ワイヤレススピーカー 冬のキャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8691.jpg',
          href: 'https://www.sony.jp/active-speaker/campaign/SRS_2021winter/',
          Contents: '期間中、対象商品をご購入&応募された方全員に、最大5,000円をキャッシュバック！',
          TargetPeriod: '2021年11月5日(金)～2022年1月11日(火)'
        },
        {
          campaignName: 'ストリーミングWALKMANキャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8690.jpg',
          href: 'https://www.sony.jp/walkman/campaign/2021_winter/',
          Contents: '期間中、対象商品をご購入、応募された方に最大8,000円をキャッシュバック！さらに対象イヤホンを同時購入で＋3,000円をキャッシュバック！',
          TargetPeriod: '2021年11月5日(金)～2022年1月11日(火)'
        },
        {
          campaignName: 'アルカリイオン整水器マイボトルプレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8689.jpg',
          href: 'https://panasonic.jp/alkaline/campaign/2021_mybottle02.html',
          Contents: '期間中、対象商品をご購入・ご応募いただくと、もれなくコークシクルボトルをプレゼント！',
          TargetPeriod: '2021年11月1日(月)～2022年1月31日(月)'
        },
        {
          campaignName: 'ソニー Xperia View キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8679.jpg',
          href: 'https://www.sony.jp/xperia-sp/campaign/viewcp_21autumn',
          Contents: '期間中、Xperia Viewおよび対象Xperiaをどちらもご購入&応募で、もれなく1万円をキャッシュバック！',
          TargetPeriod: '2021年10月26日(火)～2022年1月10日(月)'
        },
        {
          campaignName: 'SIMフリー Xperia 1 III 発売記念キャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8680.jpg',
          href: 'http://xperia.sony.jp/campaign/simfree-1m3/',
          Contents: '期間中、SIMフリーXperiaをご購入&応募で、もれなく1万円をキャッシュバック！',
          TargetPeriod: '2021年10月26日(火)～2022年1月10日(月)'
        },
        {
          campaignName: 'Xperiaで好きを極める！機能体験クーポンプレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8677.jpg',
          href: 'https://xperia.sony.jp/campaign/taiken-present/',
          Contents: '期間中、ご購入ご応募いただいた方に、もれなく写真・音楽・ゲームをXperiaで楽しみ尽くす特典をプレゼント！',
          TargetPeriod: '2021年9月30日(木)～2022年1月10日(月)'
        },
        {
          campaignName: 'ラクに使えてお得！コードレススティック掃除機キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8667.jpg',
          href: 'https://panasonic.jp/soji/campaign/stick/cb_2021.html',
          Contents: '期間中、対象商品をご購入・ご応募いただくと、もれなく3,000円をキャッシュバック！',
          TargetPeriod: '2021年10月20日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'ロボット掃除機を買ってスマホと繋ごう！プレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8666.jpg',
          href: 'https://panasonic.jp/soji/campaign/rulo/connect_2021.html',
          Contents: '期間中、対象商品をご購入のお客様に、もれなくサイドブラシ２セットプレゼント！',
          TargetPeriod: '2021年10月20日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'パナソニック ドライヤー ナノケア ビューティ キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8664.jpg',
          href: 'https://panasonic.jp/beauty/campaign/21autumn_cashback.html',
          Contents: '期間中、対象商品をご購入・ご応募された方に、最大3,000円をキャッシュバック！',
          TargetPeriod: '2021年10月20日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'パナソニック スチーマー ナノケア ビューティ キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8663.jpg',
          href: 'https://panasonic.jp/beauty/campaign/21autumn_cashback.html',
          Contents: '期間中、対象商品をご購入・ご応募された方に、最大5,000円をキャッシュバック！',
          TargetPeriod: '2021年10月20日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'ラムダッシュ 6枚刃キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8662.jpg',
          href: 'https://panasonic.jp/shaver/6blade_2021_02cp.html',
          Contents: '期間中、対象商品をご購入・ご応募いただいたお客様に、もれなく最大5,000円をキャッシュバック！',
          TargetPeriod: '2021年10月20日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'ラムダッシュ 5枚刃キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8661.jpg',
          href: 'https://panasonic.jp/shaver/5blade_2021_02cp.html',
          Contents: '期間中、対象商品をご購入・ご応募いただいたお客様に、もれなく最大3,000円をキャッシュバック！',
          TargetPeriod: '2021年10月20日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'ラムダッシュ 3枚刃 替刃同時購入キャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8660.jpg',
          href: 'https://panasonic.jp/shaver/3blade_2021cp.html',
          Contents: '期間中、対象商品をご購入・ご応募いただいたお客様に、もれなく3,000円をキャッシュバック！',
          TargetPeriod: '2021年10月20日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'パナソニック レッグリフレキャッシュバックキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8642.jpg',
          href: 'https://panasonic.jp/massage_parts/campaign/2021.html',
          Contents: '期間中、対象商品をご購入・ご応募で、もれなく全員にキャッシュバック！',
          TargetPeriod: '2021年9月17日(金)～2022年1月10日(月)'
        },
        {
          campaignName: 'シャープ スマートライフ家電400万台突破キャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8611.jpg',
          href: 'https://jp.sharp/smartCP400/',
          Contents: '期間中、対象商品をご購入の上、Wi-Fi接続・ご登録・ご応募された方に、お好きな地域特産品をプレゼント！',
          TargetPeriod: '2021年9月15日(水)～2021年12月31日(金)'
        },
        {
          campaignName: 'パナソニック 炊飯器&レンジ アプリ接続でクラパナコイン2,000円分プレゼント',
          href: 'https://panasonic.jp/range/campaign/cncp2108.html',
          img: '	https://shopimg.kitamura.jp/images/banner/8565.jpg',
          Contents: '期間中、対象商品をご購入&アプリとつないで家電登録後、アンケートにご回答いただいた方全員に2,000円分のクラパナコインをプレゼント！',
          TargetPeriod: '2021年8月18日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'ドルツ 替ブラシプレゼントキャンペーン',
          img: 'https://shopimg.kitamura.jp/images/banner/8561.jpg',
          href: 'https://panasonic.jp/teeth/campaign/brush_202102.html',
          Contents: '期間中、対象商品をご購入・応募すると、もれなく替えブラシをプレゼント！',
          TargetPeriod: '2021年8月18日(水)～2022年1月10日(月)'
        },
        {
          campaignName: 'ソニー 360 Reality Audio 無料トライアルキャンペーン',
          href: 'https://www.sony.jp/headphone/campaign/360RealityAudio/',
          img: 'https://shopimg.kitamura.jp/images/banner/8391.jpg',
          Contents: '期間中、対象商品をお持ちで製品のサポート登録&応募された方全員に、音楽配信サービス3か月無料クーポンプレゼント！<br>※過去購入者も対象',
          TargetPeriod: '2021年4月16日(金)～2022年3月5日(金)'
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

.orange-btn {
  background: rgba(255, 163, 59, 1);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 163, 59, 1)), to(rgba(255, 94, 0, 1)));
  background: -webkit-linear-gradient(top, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
  background: linear-gradient(to bottom, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
}

.orange-btn:hover {
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 163, 59, 1)), to(rgba(255, 94, 0, 1)));
  background: -webkit-linear-gradient(bottom, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
  background: linear-gradient(to top, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
}
</style>