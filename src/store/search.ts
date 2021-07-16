import { reactive } from '@vue/composition-api';

export default function searchStore() {
  const state = reactive({
    searchWord: '' as string
  });

  return {
    get searchWord(): string {
      return state.searchWord;
    },

    updateSearchWord(text: string) {
      state.searchWord = text;
    }
  };
}

export type SearchStore = ReturnType<typeof searchStore>;
