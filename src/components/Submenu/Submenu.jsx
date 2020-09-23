import React from 'react';
import ReactDOM from 'react-dom';
import './styles.less';

const Submenu = ({isOpen}) => {
  return(
    <div className='menu'>
      <div className={`submenu ${isOpen ? 'open' : 'closed'}`}>
        <div className='header'>
          <h3>Settings</h3>
        </div>
        <div className='links'>
         <a>Some text</a><br/>
         <a>Some text</a><br/>
         <a>Some text</a><br/>
         <a>Some text</a><br/>
         <a>Some text</a><br/>
        </div>
      </div>
    </div>
  )
}

export default Submenu;