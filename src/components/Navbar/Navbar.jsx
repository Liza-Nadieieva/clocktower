import React from 'react';
import classes from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';




const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.arrow}>
				<div className={classes.navbar_item} activeClassName={classes.active}>
					<a href='#'>
						<FontAwesomeIcon icon={faGlobe} className={classes.navbar_icon} />
					</a>
				</div>
			</div>
		</div>
	)
}




export default Navbar;
