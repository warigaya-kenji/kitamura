<template>
  <v-container class="mb-5">
    <v-row>
      <v-col class="text-center" cols="12" sm="4">
        <a :href="expensiveTradeInList.href" target="_blank">
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img :src="expensiveTradeInList.nameImg" class="hover" max-width="80%" height="auto"></v-img></div
        ></a>
        <span class="text-subtitle-2">{{ expensiveTradeInList.name }}</span>
      </v-col>
      <v-col col="12" sm="8" class="mt-6 pa-0">
        <p v-if="expensiveTradeInList.tradeInProducts.length === 0" class="text-subtitle-2">
          今なら、{{ expensiveTradeInList.txt }}をご購入時、 <br /><v-btn
            :href="expensiveTradeInList.href"
            text
            color="#1122cc"
            min-height="20"
            class="x-small align-center py-1 px-2"
            target="_blank"
            >・{{ expensiveTradeInList.name }}</v-btn
          ><span v-if="type === 1">で下取り実施中です</span>
          <span v-if="type === 2"><br />を、高価下取りいたします。</span>
          <span v-if="type === 3"><br />を、高価下取りいたします。<br />※店頭買取のみが対象です</span>
          <span v-if="type === 4"><br />を高価下取り実施中です</span>
        </p>

        <div v-if="expensiveTradeInList.tradeInProducts.length !== 0">
          <p class="text-subtitle-2">今なら、{{ expensiveTradeInList.txt }}をご購入時、</p>
          <v-row no-gutters>
            <v-col cols="12" v-for="(item, index) in expensiveTradeInList.tradeInProducts" :key="`tradeInProducts-${index}`">
              <v-btn :href="item.href" text color="#1122cc" min-height="20" class="x-small py-1 px-2">・{{ item.name }} </v-btn>
            </v-col>
          </v-row>
          <p v-if="type === 1">
            を買取査定額より<span class="text-h4 red--text">20％UP</span>で下取り実施中です<br />
            ※店頭買取のみが対象です
          </p>
          <p v-if="type === 2">を高価下取り実施中です</p>
        </div>
        <a :href="expensiveTradeInList.href" target="_blank">
          <img v-if="expensiveTradeInList.tradeInImg !== ''" :src="expensiveTradeInList.tradeInImg" alt="高値下取り実施中" class="hover" />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'expensive-trade-in',
  props: {
    expensiveTradeInList: {
      type: Object
    },
    type: {
      type: Number,
      default: 1
    }
  }
};
</script>
