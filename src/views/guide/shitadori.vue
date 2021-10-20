<template>
  <v-app>
    <div class="shitadori">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'なんでも下取り'" />

        <div class="w760 text-subtitle-2">
          <p class="mt-4">
            各商品ページに下記の表示がある商品は、「カメラ下取り値引きを利用する」にチェックしてご不要なカメラ・レンズ・ビデオカメラ等をご用意頂くと、販売価格からさらにお安くお求めいただけます
          </p>
          <p class="red--text mb-0">※家電製品（プリンター含む）の下取りは行っておりません</p>
          <p>
            なんでも下取りは一律の金額で下取りするサービスとなります<br />
            通常の下取り・買取りの見積もりは<a href="http://www.net-chuko.com/sell/quick-index.do" class="icoOpen" target="_blank">コチラ</a>からご確認ください
          </p>

          <!-- お申込み方法 -->
          <subTitle :txt="'お申込み方法'" :fontSize="'14px'" />
          <v-img src="/ec/images2/guide/shitadori/img_shitadori_01.jpg" max-width="535px" max-height="220px" alt="なんでも下取りの説明" class="mb-4"></v-img>
          <v-img src="/ec/images2/guide/shitadori/img_shitadori_02.jpg" max-width="522px" max-height="33px" alt="なんでも下取りの説明"></v-img>
          <ul class="listAttention mt-4">
            <li>
              「なんでも」下取り以外のカメラの買い取りのご希望の場合は<a href="https://www.net-chuko.com/about/sell/index.do" class="icoOpen" target="_blank"
                >コチラ</a
              >をご確認下さい
            </li>
          </ul>

          <!-- お値引き価格 -->
          <subTitle :txt="'お値引き価格'" :fontSize="'14px'" />
          <p class="mt-2">
            商品と販売時期により異なります<br />
            上の例の場合はお会計時に2,000円引きとなります
          </p>

          <!-- 下取り可能な製品 -->
          <subTitle :txt="'下取り可能な製品'" :fontSize="'14px'" />
          <ul class="listNormal">
            <li>コンパクトデジタルカメラ・デジタル一眼レフカメラ</li>
            <li>フィルム一眼レフカメラ･フィルムコンパクトカメラ</li>
            <li>ビデオカメラ･交換レンズ</li>
          </ul>
          <p class="red--text font-weight-bold mt-2">
            ※壊れたカメラでも構いません<br />※おもちゃのカメラやボディ番号(シリアルNo.)の無いもの、家電製品は下取りできません
          </p>

          <!-- ご利用の流れ -->
          <subTitle :txt="'ご利用の流れ'" :fontSize="'14px'" />
          <v-row>
            <v-col cols="12" sm="6">
              <v-card outlined class="pa-4" elevation="2">
                <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>「店舗受け取り」の場合</p>
                <p>店頭でのお支払い時に、下取り品をそのままお持ち下さい。</p>
                <v-img src="/ec/images2/guide/shitadori/img_shitadori_03.jpg" max-width="280px" max-height="328px"></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card outlined class="pa-4" elevation="2">
                <p class="text-subtitle-1 font-weight-bold"><v-icon x-small left color="red">fas fa-square</v-icon>「宅配」の場合</p>
                <p>商品受け取り時に、下取り品を配達員にお渡し下さい。</p>
                <p class="mb-0">1.下取り品を梱包する（箱は各自でご準備下さい）</p>
                <v-img src="/ec/images2/guide/shitadori/img_shitadori_04.gif" max-width="280px" max-height="115px"></v-img>
                <p class="red--text font-weight-bold mt-2">※メモリーカード、フィルム、テープ等の抜き忘れがないようにご注意下さい</p>
                <p class="mb-0">2.商品受け取り時に配達員にお渡し下さい</p>
                <v-img src="/ec/images2/guide/shitadori/img_shitadori_05.gif" max-width="280px" max-height="164px"></v-img>
                <p class="red--text font-weight-bold mt-2 mb-0">【ご注意】</p>
                <p>■ご注文後に、配達日時指定をした場合、同時引取りができない場合がございます</p>
                <p>
                  ■万一、配達員が「下取り品を引き取っていかなかった」「引取り用の伝票を持っていなかった」場合は、お問合せ下さい。 カスタマーセンターTEL
                  050-3155-4111
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- なんでも下取りについてのご注意 -->
          <subTitle :txt="'なんでも下取りについてのご注意'" :fontSize="'14px'" />
          <ul class="listNormal">
            <li>商品のお届けまでに、「通常納期プラス1日」の納期がかかります</li>
            <li>1回のご注文で、購入可能な台数は1台のみです（複数送っていただいた場合も、1台としてお取り扱いさせていただきます）</li>
            <li>下取り品が無い場合、また、お持込いただいた製品が下取り対象外の商品の場合は、下取り値引きが適用されません</li>
            <li>宅配の場合はお客様ご自身で梱包いただき、配達員にお渡し下さい</li>
            <li>下取り商品をお渡しをした時点で所有権が変更になります</li>
            <li>記録メディアやフィルム、テープなどが入ったままになっていないか必ずご確認下さい（受取後の返却は出来かねます）</li>
            <li>引き取り後の下取り品の返却については、お受けできない場合がございますので予めご了承下さい</li>
            <li>引き取り後の下取り品の汚損・破損につきましては責任を負いかねます</li>
          </ul>

          <!-- 古物営業法に基づく表示 -->
          <subTitle :txt="'古物営業法に基づく表示'" :fontSize="'14px'" />
          <p>
            株式会社キタムラ<br />
            高知県公安委員会許可番号<br />
            第831010001283号<br />
            登録品種 写真機商
          </p>
          <userguide />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import GuideTitle from '@/components/common/guide/title.vue';
import SubTitle from '@/components/common/guide/subtitle.vue';
import Userguide from '@/components/common/guide/user-guide.vue';

export default Vue.extend({
  name: 'shitadori',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = '下取りについて｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ご利用案内',
          linkUrl: 'service-guide',
          disabled: false
        },
        {
          path: '下取りについて',
          disabled: true
        }
      ],
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
</style>