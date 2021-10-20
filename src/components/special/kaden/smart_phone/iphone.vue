<template>
  <v-app>
    <div class="iphone wContent">
      <div class="main-contents-wrap bs3 iphonexs">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="text-center text-sm-h4 text-h6 mb-12">iPhone 12/ iPhone 12 mini<br />iPhone 12 Pro / iPhone 12 Pro Maxスペック比較レビュー</h1>
        <p class="mb-16">2020年10月14日にiPhone 12 iPhone 12 Proが発表。スペックを比較してみました</p>

        <v-container class="pt-10">
          <v-row class="mb-16">
            <v-col cols="12" sm="6">
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img src="/ec/images2/special/kaden/smart_phone/iphone/Apple_new-iphone-se-white_04152020.jpg" max-width="80%" height="auto"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="mt-8">
                iPhone12/iPhone12Pro<br />予約開始：10月16日（金）発売開始：10月23日（金）<br /><br />iPhone12ProMax/iPhone12 mini<br />予約開始：11月6日（金）発売開始：11月13日（金）
              </p>
              <div class="text-center list-links mt-4">
                <a href="https://www.kitamura.jp/service/ip/">iPhone 12/iPhone 12 Proの<br />SoftBank オンライン予約</a>
              </div>
              <div class="text-center list-links mt-6">
                <a href="/ec/ct/E013/">iPhone 12/iPhone 12 Proの<br />アクセサリーはこちら</a>
              </div>
            </v-col>
          </v-row>
          <div style="clear: both"></div>
        </v-container>

        <div class="text-center pt-16">
          <h2 class="text-h4">飛ぶように、つぎの次元へ。<br /><span class="text-h5">iPhone 12 iPhone 12 Proのご予約受付中</span></h2>
        </div>

        <!--=========== スペック ===========-->
        <div class="panel panel-default mt60 col-xs-12">
          <div class="panel-heading">【基本スペック表】</div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-bordered text-center font-xsmall">
                <thead>
                  <tr class="active">
                    <th class="text-center w100" colspan="2"></th>
                    <th class="text-center w160">iPhone 12 mini<br /></th>
                    <th class="text-center w160">iPhone 12 <br /></th>
                    <th class="text-center w160">iPhone 12 Pro</th>
                    <th class="text-center w160">
                      iPhone 12 Pro <br />
                      Max
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="text-center" colspan="2">重量</th>
                    <td>133g</td>
                    <td>162g</td>
                    <td>187g</td>
                    <td>226g</td>
                  </tr>
                  <tr class="active">
                    <th class="text-center" rowspan="3">ディスプレイ</th>
                    <td>ディスプレイタイプ</td>
                    <td colspan="4">Super Retina XDRディスプレイ</td>
                  </tr>
                  <tr class="active">
                    <td>画面サイズ</td>
                    <td>5.4インチ</td>
                    <td colspan="2">6.1インチ</td>

                    <td>6.7インチ</td>
                  </tr>
                  <tr class="active">
                    <td>解像度</td>
                    <td>2,340 x 1,080ピクセル/476ppi</td>
                    <td colspan="2">2,532 x 1,170ピクセル/460ppi</td>
                    <td>2,778 x 1,284ピクセル/458ppi</td>
                  </tr>
                  <tr>
                    <th class="text-center">スペック</th>
                    <td>チップ/CPU</td>
                    <td colspan="4">A14 Bionicチップ</td>
                  </tr>

                  <tr class="active">
                    <th class="text-center" rowspan="2">アウトカメラ</th>
                    <td>レンズ解像度</td>
                    <td colspan="2">1200万画素（超広角、広角）</td>
                    <td colspan="2">1200万画素（超広角、広角、望遠）</td>
                  </tr>
                  <tr class="active">
                    <td>絞り</td>
                    <td colspan="2">
                      超広角：ƒ/2.4絞り値<br />
                      広角：ƒ/1.6絞り値
                    </td>
                    <td>
                      超広角：ƒ/2.4絞り値<br />
                      広角：ƒ/1.6絞り値<br />
                      望遠：ƒ/2.0絞り値
                    </td>
                    <td>
                      超広角：ƒ/2.4絞り値<br />
                      広角：ƒ/1.6絞り値<br />
                      望遠：ƒ/2.2絞り値
                    </td>
                  </tr>

                  <tr class="active">
                    <th class="text-center">インカメラ</th>
                    <td>レンズ解像度</td>
                    <td colspan="4">1200万画素 TrueDepthカメラ</td>
                  </tr>
                  <tr>
                    <th class="text-center" colspan="2">ビデオ撮影</th>
                    <td colspan="2">
                      Dolby Visionビデオ4Kビデオ撮影<br />
                      光学式手ぶれ補正1080p <br />HDビデオ撮影(30fpsまたは60fps)<br />最大3倍のデジタルズームステレオ録音
                    </td>
                    <td colspan="2">
                      Dolby Visionビデオ 4Kビデオ撮影<br />
                      光学式手ぶれ補正 1080p <br />HDビデオ撮 影(30fpsまたは 60fps)<br />最大6倍のデ ジタルズーム ステレオ録音
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <facebookAndTwitter />
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
  name: 'iphone',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter
  },
  setup: (props, context) => {
    document.title = 'iPhone 12/ iPhone 12 Pro スペック比較レビュー | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'iPhone 12/ iPhone 12 mini・iPhone 12 Pro / iPhone 12 Pro Max性能を比較してみました。')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'iPhone 12/ iPhone 12 Pro スペック比較レビュー',
          disabled: true
        }
      ],
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
#wContent .iphonexs {
  font-size: 16px !important;
  text-align: left;
  width: 100% !important;
  float: left;
  line-height: 1.8em;
  letter-spacing: 0.05px;
  padding: 0;
}

.list-links {
  box-sizing: border-box;
  color: rgba(39, 48, 57, 0.8);
  display: block;
  float: right;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.166667px;
  line-height: 28.8px;
  padding-left: 0px;
  padding-right: 30px;
  position: relative;
  text-align: right;
  width: 100%;
  border: 1px solid #666;
}

.list-links::after {
  color: #000;
  content: '>';
  font-family: 'FontAwesome';
  font-size: 30px;
  top: 14px;
  left: 90%;
  position: absolute;
}

.bs3 a {
  color: #337ab7;
  text-decoration: none;
}

.bs3 .mt60 {
  margin-top: 60px;
}
.bs3 .panel-default {
  border-color: #ddd;
}

.bs3 .panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  border-color: #ddd;
}

.bs3 .panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}

.bs3 .panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.bs3 .panel-body {
  padding: 15px;
}

.bs3 .table-responsive {
  min-height: 0.01%;
  overflow-x: auto;
}

.bs3 .font-xsmall {
  font-size: 80%;
}
.bs3 .text-center {
  text-align: center;
}

.bs3 .table-bordered {
  border: 1px solid #ddd;
}
.bs3 .table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
tr,
table.data tr {
  border: none;
}

.bs3 .table > caption + thead > tr:first-child > th,
.bs3 .table > colgroup + thead > tr:first-child > th,
.bs3 .table > thead:first-child > tr:first-child > th,
.bs3 .table > caption + thead > tr:first-child > td,
.bs3 .table > colgroup + thead > tr:first-child > td,
.bs3 .table > thead:first-child > tr:first-child > td {
  border-top: 0;
}

.bs3 .table > thead > tr > td.active,
.bs3 .table > tbody > tr > td.active,
.bs3 .table > tfoot > tr > td.active,
.bs3 .table > thead > tr > th.active,
.bs3 .table > tbody > tr > th.active,
.bs3 .table > tfoot > tr > th.active,
.bs3 .table > thead > tr.active > td,
.bs3 .table > tbody > tr.active > td,
.bs3 .table > tfoot > tr.active > td,
.bs3 .table > thead > tr.active > th,
.bs3 .table > tbody > tr.active > th,
.bs3 .table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}

.bs3 .table-bordered > thead > tr > th,
.bs3 .table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}

.bs3 .table-bordered > thead > tr > th,
.bs3 .table-bordered > tbody > tr > th,
.bs3 .table-bordered > tfoot > tr > th,
.bs3 .table-bordered > thead > tr > td,
.bs3 .table-bordered > tbody > tr > td,
.bs3 .table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}

.bs3 .table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}

.bs3 .table > thead > tr > th,
.bs3 .table > tbody > tr > th,
.bs3 .table > tfoot > tr > th,
.bs3 .table > thead > tr > td,
.bs3 .table > tbody > tr > td,
.bs3 .table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}

.bs3 .col-xs-1,
.bs3 .col-sm-1,
.bs3 .col-md-1,
.bs3 .col-lg-1,
.bs3 .col-xs-2,
.bs3 .col-sm-2,
.bs3 .col-md-2,
.bs3 .col-lg-2,
.bs3 .col-xs-3,
.bs3 .col-sm-3,
.bs3 .col-md-3,
.bs3 .col-lg-3,
.bs3 .col-xs-4,
.bs3 .col-sm-4,
.bs3 .col-md-4,
.bs3 .col-lg-4,
.bs3 .col-xs-5,
.bs3 .col-sm-5,
.bs3 .col-md-5,
.bs3 .col-lg-5,
.bs3 .col-xs-6,
.bs3 .col-sm-6,
.bs3 .col-md-6,
.bs3 .col-lg-6,
.bs3 .col-xs-7,
.bs3 .col-sm-7,
.bs3 .col-md-7,
.bs3 .col-lg-7,
.bs3 .col-xs-8,
.bs3 .col-sm-8,
.bs3 .col-md-8,
.bs3 .col-lg-8,
.bs3 .col-xs-9,
.bs3 .col-sm-9,
.bs3 .col-md-9,
.bs3 .col-lg-9,
.bs3 .col-xs-10,
.bs3 .col-sm-10,
.bs3 .col-md-10,
.bs3 .col-lg-10,
.bs3 .col-xs-11,
.bs3 .col-sm-11,
.bs3 .col-md-11,
.bs3 .col-lg-11,
.bs3 .col-xs-12,
.bs3 .col-sm-12,
.bs3 .col-md-12,
.bs3 .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media screen and (max-width: 767px) {
  .bs3 .table-responsive > .table > thead > tr > th,
  .bs3 .table-responsive > .table > tbody > tr > th,
  .bs3 .table-responsive > .table > tfoot > tr > th,
  .bs3 .table-responsive > .table > thead > tr > td,
  .bs3 .table-responsive > .table > tbody > tr > td,
  .bs3 .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }

  .iphonexs table .w160 {
    max-width: 100%;
    width: 160px;
  }
}

.bs3 table {
  border-spacing: 0;
  border-collapse: collapse;
}
.bs3 table {
  background-color: transparent;
}
</style>