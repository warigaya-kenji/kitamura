import { reactive } from '@vue/composition-api';

const LIMIT = 10;

export default function comparisonStore() {
  const state = reactive({
    comparisonList: [] as Array<string>
  });

  return {
    get limit(): number {
      return LIMIT;
    },

    get comparisonList(): Array<string> {
      return state.comparisonList;
    },

    add(janCode: string) {
      if (state.comparisonList.length < LIMIT && !state.comparisonList.includes(janCode)) state.comparisonList.push(janCode);
    },

    remove(janCode: string) {
      if (state.comparisonList.includes(janCode)) state.comparisonList.splice(state.comparisonList.indexOf(janCode), 1);
    },

    clear() {
      state.comparisonList = [];
    }
  };
}

export type ComparisonStore = ReturnType<typeof comparisonStore>;
