import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';

function App(props) {
  return (
    <div className='container-wrapper'>
      <Header/>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
