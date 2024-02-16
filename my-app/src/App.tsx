import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Main from './components/Main';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';

const App:React.FC =()=> {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact onAddTodo={function (age: number): void {}}/>}></Route>
        </Routes>
    </div>
      );
    };

export default App;
