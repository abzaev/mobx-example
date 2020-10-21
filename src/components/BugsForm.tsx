import React from 'react';
import { StoreContext } from '../store/context';

const BugsForm = () => {
  const store = React.useContext(StoreContext).firstStore;
  const [bug, setBug] = React.useState<string>("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        store.addBug(bug)
        setBug("");
      }}
    >
      <input
        type="text"
        value={bug}
        onChange={e => setBug(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  )
}

export default BugsForm;
