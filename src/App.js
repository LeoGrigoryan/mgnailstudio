import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Context from './Context';
import { useState } from 'react';

function App() {

  const [one, setOne] = useState('none');
  const [two, setTwo] = useState('none');
  const [thr, setThr] = useState('none');
  const [open, setOpen] = useState(0);
  const [bool, setBool] = useState(false);
  const [closer, setCloser] = useState('0')

  const bus = {
    one, setOne,
    two, setTwo,
    thr, setThr,
    open, setOpen,
    bool, setBool,
    closer, setCloser
  }

  return (
    <div className="App">
      <Context.Provider value={bus}>
        <Home />
      </Context.Provider>
    </div>
  );
}

export default App;
