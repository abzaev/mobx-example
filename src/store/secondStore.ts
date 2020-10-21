import { observable } from "mobx";

export const createSecondStore = () => {
  const store = observable({
    news: ['Centipede'],

    addNews: (bug: string) => {
      store.news.push(bug);
    },

    get newsCount(): Number {
      return store.news.length;
    },

  });

  return store;
};

export type TSecondStore = ReturnType<typeof createSecondStore>;
