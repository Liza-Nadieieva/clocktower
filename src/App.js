import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import {Route, Redirect} from 'react-router-dom';

function App(props) {
  return (
    <div className='container-wrapper'>
      <Navbar/>
      <div className='wrapper-content'>
        <Route path='/header' component={Header} />
        <Route path='/content' component={Content} />
        <Redirect from='/' to='/'/>
      </div>
    </div>
  );
}

export default App;