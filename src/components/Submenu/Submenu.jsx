import React from 'react';
import classes from './submenu.module.css';


const Submenu = ({isOpen}) => {
  return(
    <div className={classes.menu}>
      { isOpen &&
      <div className={classes.block}> bhbshbjbc sbdjd </div>
      }
    </div>
  )
}

export default Submenu;