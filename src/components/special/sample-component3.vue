<template>
  <div class="component3">
    <div class="component3-info">
      <div>テンプレートC</div>
      <div>コンポーネント : sample-component3.vue</div>
    </div>

    <div class="main-contents-wrap text-center" v-if="!errorMsg">
      <!-- ↓ サンプル：広告コンテンツの表示 -->
      <div v-if="isShowAdvertisement" class="my-10">広告コンテンツ</div>
      <!-- ↑ サンプル：広告コンテンツの表示 -->

      <!-- ↓ サンプル：予約コンテンツの表示 -->
      <div v-if="isShowReserve" class="my-10">予約コンテンツ</div>
      <!-- ↑ サンプル：予約コンテンツの表示 -->

      <!-- ↓ サンプル：発売コンテンツの表示 -->
      <div v-if="isShowRelease" class="my-10">発売コンテンツ</div>
      <!-- ↑ サンプル：発売コンテンツの表示 -->
    </div>
    <!-- 表示期間外の場合 -->
    <not-found :errorMessage="errorMsg" v-else-if="errorMsg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import { isDebugMode, validationPeriod } from '@/logic/utils';
import dayjs from 'dayjs';
import SpecialProductService from '@/logic/special-product.service';
import NotFound from '@/components/common/not-found.vue';

export default Vue.extend({
  name: 'sample-component3',
  components: {
    "not-found": NotFound
  },
  props: {},
  setup: (props, context) => {
    const query = context.root.$route.query;
    const state = reactive({
      // ↓ ---- 広告掲載期間 ----
      advertisementValidFrom: '2021/09/26 00:00',
      advertisementValidTo: '2021/09/30 23:59',
      // ↑ ---- 広告掲載期間 ----
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/10/01 00:00',
      reserveValidTo: '2021/10/05 23:59',
      // ↑ ---- 予約掲載期間 ----
      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/10/07 00:00',
      releaseValidTo: '2021/10/09 23:59',
      // ↑ ---- 発売掲載期間 ----

      // ↓ ---- 広告コンテンツを表示するかどうか ----
      isShowAdvertisement: false,
      // ↓ ---- 予約コンテンツを表示するかどうか ----
      isShowReserve: false,
      // ↓ ---- 発売コンテンツを表示するかどうか ----
      isShowRelease: false,

      // 表示期間外メッセージ
      errorMsg: ''
    });

    /**
     * 今日の日付が広告掲載期間よりも前かチェックする
     */
    const checkBeforePreperiod = async () => {
      const advertisementValidFrom = dayjs(state.advertisementValidFrom);
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        if (formatToday.isBefore(advertisementValidFrom)) {
          state.errorMsg = '掲載準備中'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
    * 今日の日付が発売掲載期間よりも後かチェックする
    */
    const checkAfterReleaseperiod = async () => {
      const releaseValidTo = dayjs(state.releaseValidTo);
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        if (formatToday.isAfter(releaseValidTo)) {
          state.errorMsg = '該当ページは掲載期間が終了いたしました。'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
     * 表示期間制御
     * @param from from日付
     * @param to to日付
     */
    const verifyDate = async () => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        if (validationPeriod(today, state.advertisementValidFrom, state.advertisementValidTo)) {
          state.isShowAdvertisement = true
        }
        if (validationPeriod(today, state.reserveValidFrom, state.reserveValidTo)) {
          state.isShowReserve = true
        }
        if (validationPeriod(today, state.releaseValidFrom, state.releaseValidTo)) {
          state.isShowRelease = true
        }
      } catch (error) {
        console.error(error);
        today = dayjs().toString();
      }
    };

    onMounted(async () => {
      await checkBeforePreperiod();
      if (!state.errorMsg) await checkAfterReleaseperiod();
      if (!state.errorMsg) verifyDate();
    });

    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      verifyDate
    };
  }
});
</script>


