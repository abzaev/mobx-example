import { observable } from "mobx";

export const createFirstStore = () => {
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

export type TFirstStore = ReturnType<typeof createFirstStore>;
