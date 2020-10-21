import * as React from "react";
import { createFirstStore, TFirstStore } from "./firstStore";
import { createSecondStore, TSecondStore } from "./secondStore";

interface Store {
  firstStore: TFirstStore
  secondStore: TSecondStore
}

export const StoreContext = React.createContext<Store>({} as Store);

const StoreProvider: React.FC = ({ children }) => {
  const store = {
    firstStore: createFirstStore(),
    secondStore: createSecondStore(),
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
