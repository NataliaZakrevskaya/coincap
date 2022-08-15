import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div>
      <Header/>
      <AppRoutes/>
    </div>
  );
};

export default App;
