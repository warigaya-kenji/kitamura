<template>
  <v-app>
    <div class="air-conditioner-option">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'設置サービス（エアコン）追加オプション 料金目安'" />

        <div class="w760">
          <div class="aircon-setti">
            <p class="text-right mt-4 mb-0">（税込）</p>
            <table class="caption text-sm-subtitle-1">
              <tr>
                <th rowspan="5">取外し</th>
                <td>既設のエアコン取外し</td>
                <td>4,320円</td>
              </tr>
              <tr>
                <td>コンセント延長</td>
                <td>3,456円</td>
              </tr>
              <tr>
                <td>コンセント形状交換</td>
                <td>2,160円</td>
              </tr>
              <tr>
                <td>ブレーカー交換</td>
                <td>3,780円</td>
              </tr>
              <tr>
                <td>電圧切替 100V⇔200V</td>
                <td>2,700円</td>
              </tr>

              <tr>
                <th rowspan="8">室外機設置</th>
                <td>屋根置き（金具込み）</td>
                <td>13,500円</td>
              </tr>
              <tr>
                <td>屋根置き（既存金具利用）</td>
                <td>5,400円</td>
              </tr>
              <tr>
                <td>壁面付け（金具込み）</td>
                <td>13,500円</td>
              </tr>
              <tr>
                <td>壁面付け（既存金具利用）</td>
                <td>5,400円</td>
              </tr>
              <tr>
                <td>公団吊り（金具込み）</td>
                <td>13,500円</td>
              </tr>
              <tr>
                <td>公団吊り（既存金具利用）</td>
                <td>5,400円</td>
              </tr>
              <tr>
                <td>２段置き（金具込み）</td>
                <td>20,304円</td>
              </tr>
              <tr>
                <td>２段置き（既存金具利用）</td>
                <td>6,480円</td>
              </tr>

              <tr>
                <th rowspan="2">窓パネル</th>
                <td>窓パネル（アルミ）</td>
                <td>12,420円</td>
              </tr>
              <tr>
                <td>窓パネル（小窓用）</td>
                <td>5,400円</td>
              </tr>

              <tr>
                <th rowspan="2">穴あけ</th>
                <td>鉄筋壁 貫通穴あけ</td>
                <td>20,304円</td>
              </tr>
              <tr>
                <td>穴埋めプレート</td>
                <td>2,160円</td>
              </tr>

              <tr>
                <th rowspan="3">配管</th>
                <td>スリムダクト配管セット(2m以内）</td>
                <td>8,100円</td>
              </tr>
              <tr>
                <td>1ｍ配管（配管パイプの太さ 2分3分）</td>
                <td>3,240円</td>
              </tr>
              <tr>
                <td>1ｍ配管（配管パイプの太さ 2分4分）</td>
                <td>3,780円</td>
              </tr>
            </table>

            <p class="mb-10 caption text-sm-subtitile-2">※一覧にないオプション等、詳しくは工事打ち合わせの際にご確認ください。</p>
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
import GuideTitle from '@/components/common/guide/title.vue';
export default Vue.extend({
  name: 'air-conditioner-option',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
  },
  setup: (props, context) => {
    document.title = '設置サービス（エアコン）追加オプション｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '設置サービス（エアコン）',
          linkUrl: 'air-conditioner',
          disabled: false
        },
        {
          path: '設置サービス（エアコン）追加オプション',
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

<style scoped>
.aircon-setti table {
    border: medium none;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.25em;
}

.aircon-setti table th {
    background: none repeat scroll 0 0 #eee;
    border: 1px solid #ccc;
    font-weight: bold;
    padding: 5px;
    white-space: nowrap;
    width: 10em;
    text-align: center;
}

.aircon-setti table td {
    border-image: none;
    border-style: solid solid solid none;
    border-width: 1px 1px 1px medium;
    padding: 5px;
}
</style>