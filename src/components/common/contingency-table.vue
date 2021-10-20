<template>
  <div>
    <table class="contingency_t">
      <tbody>
        <tr class="bg-gray">
          <th>分割回数</th>
          <th>月々のお支払額</th>
          <th>分割金利手数料</th>
        </tr>
        <tr>
          <th>
            <span class="red--text">{{ numberOfTimes }}</span
            >回
          </th>
          <th>
            約<span class="red--text">{{ amount }}</span
            >円
          </th>
          <th>
            <span class="red--text">{{ commission }}</span
            >円
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'contingencyTable',
  props: ['numberOfTimes', 'amount', 'commission']
};
</script>

<style scoped>
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
  padding: 10px 6px;
  vertical-align: middle;
}
.bg-gray {
  background-color: #d1d1d1;
}
</style>
