import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';

function App() {
  return (
    <BrowserRouter>
      <Dice />
    </BrowserRouter>
  );
}

export default App;
