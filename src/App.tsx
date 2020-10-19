import React from 'react';
import logo from './logo.svg';
import './App.css';
import BugsHeader from './components/BugsHeader';
import BugsList from './components/BugsList';
import BugsForm from './components/BugsForm';
import StoreProvider from './store/context';

const App = () => {
  return (
    <StoreProvider>
      <div>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </div>
    </StoreProvider>
  )
}

export default App;
