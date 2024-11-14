import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import './responsive.css'

const App = () => {
  const location = useLocation();

  const mainClassName = location.pathname === '/' ? 'main' : 'main-other';

  return (
    <>
      <Header />
      <main className={mainClassName}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
