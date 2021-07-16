import { reactive } from '@vue/composition-api';

export default function comparisonStore() {
  const state = reactive({
    comparisonList: [] as Array<string>
  });

  return {
    get comparisonList(): Array<string> {
      return state.comparisonList;
    },

    add(janCode: string) {
      if (state.comparisonList.length < 5 && !state.comparisonList.includes(janCode)) state.comparisonList.push(janCode);
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
