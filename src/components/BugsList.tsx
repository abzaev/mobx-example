import React from 'react';
import { useObserver } from "mobx-react";
import { StoreContext } from '../store/context';

const BugsList = () => {
  const store = React.useContext(StoreContext).firstStore;

  return useObserver(() => (
    <ul>
      {store.bugs.map((bug: string) => <li key={bug}>{bug}</li>)}
    </ul>
  ))
}


export default BugsList;
