<template>
  <!-- ↓ サンプル：比較 -->
  <div class="product-comparison mb-5">
    <p class="mb-2">キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較しました。</p>
    <table class="product-comparison-table">
      <tbody>
        <tr>
          <th>商品名</th>
          <td v-for="product in comparisonDetailList" :key="product">{{ product.itemName }}</td>
        </tr>
        <tr>
          <th>発売日</th>
          <td>2021年3月19日発売</td>
          <td>2019年11月1日発売</td>
          <td>2020年2月14日発売</td>
          <td>2020年6月5日発売</td>
        </tr>
        <tr>
          <th>価格</th>
          <td v-for="product in comparisonDetailList" :key="product">
            <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
            >（税込）
          </td>
        </tr>
        <tr>
          <th>有効画素数</th>
          <td>約5010万画素</td>
          <td>約2420万画素</td>
          <td>約2010万画素</td>
          <td>約2082万画素</td>
        </tr>
        <tr>
          <th>測距点</th>
          <td>759点 (位相差検出方式)/425点 (コントラスト検出方式)</td>
          <td>693点（位相差検出方式）/425点（コントラスト検出方式）</td>
          <td>191点（クロス測距点：最大155点）</td>
          <td>105点（105点クロスセンサー）</td>
        </tr>
        <tr>
          <th>撮像素子</th>
          <td>35mmフルサイズ<br />積層型CMOSセンサー</td>
          <td>35mmフルサイズ<br />積層型CMOSセンサー</td>
          <td>35mmフルサイズ<br />CMOSセンサー</td>
          <td>35mmフルサイズ(ニコンFXフォーマット)<br />CMOSセンサー</td>
        </tr>
        <tr>
          <th>連続撮影速度</th>
          <td>メカシャッター:最高約10コマ/秒<br />電子シャッター:最高約30コマ/秒</td>
          <td>メカシャッター:最高約10コマ/秒<br />電子シャッター:最高約20コマ/秒</td>
          <td>ファインダー：最高約16コマ/秒<br />ライブビュー：最高約20コマ/秒</td>
          <td>最高約14コマ/秒</td>
        </tr>
        <tr>
          <th>シャッタースピード</th>
          <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/32000-30秒</td>
          <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/32000-30秒</td>
          <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/8000-0.5秒</td>
          <td>1/8000-30秒、バルブ、Time</td>
        </tr>
        <tr>
          <th>ISO感度</th>
          <td>ISO100-32000 (拡張: 下限ISO50、上限ISO102400)</td>
          <td>ISO100-51200 (拡張：下限ISO50、上限ISO204800)</td>
          <td>ISO100-102400(拡張：下限ISO50、上限ISO819200)</td>
          <td>ISO100-102400(拡張：下限ISO50、上限ISO3280000)</td>
        </tr>
        <tr>
          <th>ファインダー</th>
          <td>943万ドット<br />1.6cm (0.64型) 電子式ビューファインダー</td>
          <td>368万ドット<br />1.3cm (0.5型) 電子式ビューファインダー</td>
          <td>ペンタプリズム使用、アイレベル式</td>
          <td>ペンタプリズム使用、アイレベル式</td>
        </tr>
        <tr>
          <th>視野率/倍率</th>
          <td>100%/約0.90倍</td>
          <td>100%/約0.78倍</td>
          <td>100%/約0.76倍</td>
          <td>100%/約0.72倍</td>
        </tr>
        <tr>
          <th>液晶モニター</th>
          <td>約144万ドット<br />3.0型チルト式TFT駆動</td>
          <td>約144万ドット<br />3.0型チルト式TFT駆動</td>
          <td>約210万ドット<br />3.2型TFT式(非可動)</td>
          <td>約236万ドット<br />3.2型TFT式(非可動)</td>
        </tr>
        <tr>
          <th>静止画撮影可能枚数/時間<br />(CIPA規格基準)</th>
          <td>ファインダー使用時: 約430枚<br />液晶モニター使用時: 約530枚</td>
          <td>ファインダー使用時：約500枚<br />液晶モニター使用時：約690枚</td>
          <td>ファインダー撮影：約2850枚<br />ライブビュー撮影：約610枚</td>
          <td>撮影可能コマ数：約3580コマ<br /></td>
        </tr>
        <tr>
          <th>連続動画撮影時</th>
          <td>ファインダー使用時: 約145分<br />液晶モニター使用時: 約150分</td>
          <td>ファインダー使用時：約195分<br />液晶モニター使用時：約200分</td>
          <td>約4時間40分</td>
          <td>約105分</td>
        </tr>
        <tr>
          <th>手ブレ補正</th>
          <td>5.5段<br />センサーシフト方式5軸補正</td>
          <td>5.5段<br />センサーシフト方式5軸補正</td>
          <td>静止画:レンズ内手振れ補正のみ<br />動画:電子IS可能</td>
          <td>静止画:レンズ内手振れ補正のみ<br />動画:電子手ブレ補正あり</td>
        </tr>
        <tr>
          <th>外形寸法</th>
          <td>約128.9 x 96.9 x 80.8 mm</td>
          <td>約128.9ｘ96.4ｘ77.5 mm</td>
          <td>約158.0×167.6×82.6 mm</td>
          <td>約160×163×92mm</td>
        </tr>
        <tr>
          <th>質量（本体のみ）</th>
          <td>約652g</td>
          <td>約593g</td>
          <td>約1250g</td>
          <td>約1270g</td>
        </tr>
        <tr>
          <th>カードスロット</th>
          <td>両対応デュアルスロット<br />CFexpress(タイプA)<br />SDカード</td>
          <td>デュアルスロット<br />SDカード<br />(slot1:UHS-II support)</td>
          <td>デュアルスロット<br />CFexpressメモリーカード(タイプB)</td>
          <td>デュアルスロット<br />CFexpressメモリーカード(タイプB)<br />XQDカード</td>
        </tr>
        <tr>
          <th>動画記録方式</th>
          <td>8K/4K/フルHD</td>
          <td>4K/フルHD</td>
          <td>4K/フルHD</td>
          <td>4K/フルHD/HD</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- ↑ サンプル：比較 -->
</template>

<script>
export default {
  name: 'comparisonTable',
  props: ['comparisonDetailList']
};
</script>

<style lang="scss" scoped>
// サンプル：比較
.product-comparison {
  &-table {
    font-size: 12px;
    border-collapse: collapse;
    text-align: center;
    %cell {
      width: 16%;
      padding: 12px 8px;
      border: 1px solid $ec-light-grey2;
      vertical-align: middle;
    }
    th {
      @extend %cell;
      background-color: $bg-light-grey;
    }
    td {
      @extend %cell;
    }
  }
}
table.spec {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 80%;
  float: left;
  box-sizing: border-box;
  word-break: break-all;
}
</style>