import * as React from "react";
import { createStore, TStore } from "./store";

export const StoreContext = React.createContext<TStore>({} as TStore);

const StoreProvider: React.FC = ({ children }) => {
  const store = createStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
