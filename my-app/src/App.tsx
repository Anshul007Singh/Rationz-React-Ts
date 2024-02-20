import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Main from './components/Main';

const App:React.FC =()=> {
  document.cookie = 'myCookie=myValue; SameSite=None; Secure';

  return (
    <div>
      {/* <Main/> */}
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact onAddTodo={function (age: number): void {}}/>}></Route>
        </Routes>
    </div>
      );
    };

export default App;
