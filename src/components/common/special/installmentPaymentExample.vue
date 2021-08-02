<template>
  <div class="s-credit">
    <table cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <th>商品価格</th>
          <th>分割回数</th>
          <th>月々の<br />お支払額</th>
          <th>分割<br />手数料</th>
        </tr>
        <tr>
          <td>{{ productPrice }}<span>円</span></td>
          <td>{{ numberOfDivisions }}<span>回</span></td>
          <td class="txt-org"><span>約</span>{{ monthlyPayment }}<span>円</span></td>
          <td>{{ splitFee }}<span>円</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'installmentPaymentExample',
  props: {
    productPrice: {
      type: String,
      required: true
    },
    numberOfDivisions: {
      type: String,
      required: true
    },
    monthlyPayment: {
      type: String,
      required: true
    },
    splitFee: {
      type: String,
      default: '0'
    }
  }
};
</script>