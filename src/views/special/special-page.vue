<template>
  <div>
    <component :is="currentComponent" v-if="!errorMsg" @validation-period="verifyDate" />

    <!-- 表示期間外の場合 -->
    <not-found :errorMessage="errorMsg" v-else-if="errorMsg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { isDebugMode, validationPeriod } from '@/logic/utils';
import dayjs from 'dayjs';
import SpecialProductService from '@/logic/special-product.service';
import NotFound from '@/components/common/not-found.vue';
import '@/assets/special/style/common.scss';

// 特集ページの内容を実装したコンポーネントを読み込みます。
// 以下、サンプル
import SampleComponent1 from '@/components/special/sample-component1.vue';
import SampleComponent2 from '@/components/special/sample-component2.vue';
import Component20210401 from '@/components/special/2021/0401.vue';
import Componentfeature from '@/components/special/camera/feature.vue';
import Componentdslr from '@/components/special/camera/dslr.vue';
import Componentutsurundesu from '@/components/special/camera/filmcamera/utsurundesu.vue';
import eosr5r6 from '@/components/special/camera/feature/canon/eosr5-r6.vue';
import ComponentBacknumber from '@/components/special/camera/feature/backnumber.vue';
import ComponentRf1435mmf4lisusm from '@/components/special/camera/feature/canon/rf14-35mmf4lisusm.vue';
import ComponentTripod from '@/components/special/camera/feature/canon/tripod.vue';

// 上記で読み込んだコンポーネントのうち、実際に表示させるページを設定してください。
// 'ページURL': 読み込んだコンポーネント名
const PAGE_LIST = {
  // 表示期間外の表示用のため、削除しないでください。
  'not-found': NotFound,
  // 以下、サンプル
  sample1: SampleComponent1,
  sample2: SampleComponent2,
  '2021/0401': Component20210401,
  'camera/feature': Componentfeature,
  'camera/dslr': Componentdslr,
  'camera/filmcamera/utsurundesu': Componentutsurundesu,
  'camera/feature/canon/eosr5r6': eosr5r6,
  'camera/feature/backnumber/': ComponentBacknumber,
  'camera/feature/canon/rf1435mmf4lisusm': ComponentRf1435mmf4lisusm,
  'camera/feature/canon/tripod': ComponentTripod

};

export default Vue.extend({
  name: 'special-page',
  components: PAGE_LIST,
  setup(props, context) {
    const query = context.root.$route.query;
    const state = reactive({
      currentComponent: '',
      // 表示期間外メッセージ
      errorMsg: ''
    });

    onMounted(() => {
      // PAGE_LISTに設定されていないページや存在しないURLは、NotFoundPageに遷移させる
      if (Object.keys(PAGE_LIST).includes(context.root.$route.params.page)) {
        state.currentComponent = context.root.$route.params.page;
      } else {
        context.root.$router.push({ name: 'not-found-page' });
      }
    });

    /**
     * 表示期間制御
     * @param from from日付
     * @param to to日付
     */
    const verifyDate = async (from: string, to: string) => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
      } catch (error) {
        today = dayjs().toString();
      }
      if (!validationPeriod(today, from, to)) {
        state.errorMsg = '該当ページは掲載期間が終了いたしました。';
      }
    };

    return {
      ...toRefs(state),
      verifyDate
    };
  }
});
</script>

<style lang="scss" scoped>
/* template内のDomへの適用 */
</style>

<style>
/* Vuetifyで生成されるDomへの適用 */
</style>
