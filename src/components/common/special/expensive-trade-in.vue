<template>
  <v-container class="mb-5">
    <v-row>
      <v-col class="text-center" cols="12" sm="4">
        <a :href="expensiveTradeInList.href" target="_blank"
          ><v-img :src="expensiveTradeInList.nameImg" class="hover" max-width="100%" height="auto"></v-img
        ></a>
        <br />
        {{ expensiveTradeInList.name }}
      </v-col>
      <v-spacer sm="1"></v-spacer>
      <v-col col="12" sm="7" class="mt-2">
        <p v-if="expensiveTradeInList.tradeInProducts.length === 0">
          今なら、{{ expensiveTradeInList.txt }}をご購入時、 <br /><v-btn
            :href="expensiveTradeInList.href"
            text
            color="#1122cc"
            min-height="20"
            class="x-small align-center py-1 px-2"
            >・{{ expensiveTradeInList.name }}</v-btn
          >で下取り実施中です
        </p>

        <div v-if="expensiveTradeInList.tradeInProducts.length !== 0">
          <p>今なら、{{ expensiveTradeInList.txt }}をご購入時、</p>
          <v-row no-gutters>
            <v-col cols="12" v-for="(item, index) in expensiveTradeInList.tradeInProducts" :key="`tradeInProducts-${index}`">
              <v-btn :href="item.href" text color="#1122cc" min-height="20" class="x-small py-1 px-2">・{{ item.name }} </v-btn>
            </v-col>
          </v-row>
          を買取査定額より<span class="text-h4 red--text">20％UP</span>で下取り実施中です<br />
          ※店頭買取のみが対象です
        </div>
        <img :src="expensiveTradeInList.tradeInImg" alt="高値下取り実施中" class="hover" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'expensive-trade-in',
  props: {
    expensiveTradeInList: {
      type: Object,
    },

  }
};
</script>
