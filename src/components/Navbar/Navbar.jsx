import React from 'react';
import classes from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faBookmark, faCut, faBell, faCompass, faCog, faQuestion } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';




const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.arrow}>
				<div className={classes.navbar_item1}>
					<div className={classes.tooltip}>
						<span className={classes.tooltiptext}>Spaces&#160;Tracky Test </span>
						<NavLink to='/spaces' activeClassName={classes.active}>
							<FontAwesomeIcon icon={faGlobe} className={classes.navbar_icon}/>
						</NavLink>
					</div>
				</div>
			</div>
			<div className={classes.navbar_elem1}>
				<div className={classes.navbar_item2}>
					<div className={classes.tooltip}>
						<span className={classes.tooltiptext}>Dashboards</span>
						<NavLink to='/menu' activeClassName={classes.active}>
							<FontAwesomeIcon icon={faBars} className={classes.navbar_icon}/>
						</NavLink>
					</div>
				</div>
				<div className={classes.navbar_item2}>
					<div className={classes.tooltip}>
						<span className={classes.tooltiptext}>Views</span>
						<NavLink to='/bookmark' activeClassName={classes.active}>
							<FontAwesomeIcon icon={faBookmark} className={classes.navbar_icon}/>
						</NavLink>
					</div>
				</div>
				<div className={classes.navbar_item2}>
					<div className={classes.tooltip}>
						<span className={classes.tooltiptext}>SQL&#160;Snippets</span>
						<NavLink to='/cut' activeClassName={classes.active}>
							<FontAwesomeIcon icon={faCut} className={classes.navbar_icon}/>
						</NavLink>
					</div>
				</div>
				<div className={classes.navbar_item2}>
					<div className={classes.tooltip}>
						<span className={classes.tooltiptext}>SQL&#160;Alerts</span>
						<NavLink to='/bell' activeClassName={classes.active}>
							<FontAwesomeIcon icon={faBell} className={classes.navbar_icon}/>
						</NavLink>
					</div>
				</div>
			</div>
			<div className={classes.navbar_item3}>
				<div className={classes.tooltip}>
					<span className={classes.tooltiptext}>New&#160;Exploration</span>
					<NavLink to='/content' activeClassName={classes.active}>
						<FontAwesomeIcon icon={faCompass} className={classes.navbar_icon}/>
					</NavLink>
				</div>
			</div>
			<div className={classes.navbar_elem2}>
				<div className={classes.navbar_item3}>
					<NavLink to='/setting' activeClassName={classes.active}>
						<FontAwesomeIcon icon={faCog} className={classes.navbar_icon}/>
					</NavLink>
				</div>
				<div className={classes.navbar_elem3}>
					<div className={classes.navbar_item3}>
						<div className={classes.tooltip}>
							<span className={classes.tooltiptext}>Help</span>
							<a href='#' target='_blank' activeClassName={classes.active}>
								<FontAwesomeIcon icon={faQuestion} className={classes.navbar_icon}/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}




export default Navbar;
