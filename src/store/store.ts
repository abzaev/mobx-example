import { observable } from "mobx";

export const createStore = () => {
  const store = observable({
    bugs: ['Centipede'],

    addBug: (bug: string) => {
      store.bugs.push(bug);
    },

    get bugsCount(): Number {
      return store.bugs.length;
    },

  });

  return store;
};

export type TStore = ReturnType<typeof createStore>;
