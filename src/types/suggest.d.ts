export type SuggestItem = {
  conditions: Array<{
    axis: string;
    axisname: string;
    cond: string;
    condname: string;
    count: number;
  }>;
  items: Array<{
    title: string;
    jan_code: string;
  }>;
  word: string;
};
