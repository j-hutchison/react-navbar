import React from "react";
import classes from "./Navbar.module.css";
import logo from "../images/atom.svg";
import menuIcon from "../images/list.svg";
import closeIcon from "../images/x.svg";

const Navbar = () => {
	return (
		<div className={classes["navbar"]}>
			<div className={classes["navbar-logo"]}>
				<h1>React</h1>
				<img
					className={classes["navbar-logo-icon--sm"]}
					src={logo}
					alt="Atom Logo"
				/>
			</div>
			<div className={classes["navbar-buttons"]}>
				<ul className={classes["navbar-buttons-list"]}>
					<li className={classes["navbar-button"]}>
						<a href="#" className={classes["navbar-button-link"]}>
							Home
						</a>
					</li>
					<li className={classes["navbar-button"]}>
						<a href="#" className={classes["navbar-button-link"]}>
							Services
						</a>
					</li>
					<li className={classes["navbar-button"]}>
						<a href="#" className={classes["navbar-button-link"]}>
							Products
						</a>
					</li>
					<li className={classes["navbar-button"]}>
						<a href="#" className={classes["navbar-button-link"]}>
							Contact Us
						</a>
					</li>
					<li
						className={`${classes["navbar-button"]} ${classes["navbar-button--blue"]}`}
					>
						<a href="#" className={classes["navbar-button-link"]}>
							Sign Up
						</a>
					</li>
				</ul>
			</div>
			{/* <div className={`${classes.hidden} ${classes["navbar-menu-icon"]}`}> */}
			<div className={`${classes["navbar-menu-icon"]}`}>
				<img
					// className={`${classes["navbar-logo-icon--md"]} ${classes.hidden}`}
					className={`${classes["navbar-logo-icon--md"]}`}
					src={menuIcon}
					alt="Open menu icon"
				/>
				<img
					// className={`${classes["navbar-logo-icon--md"]} ${classes.hidden}`}
					className={`${classes["navbar-logo-icon--md"]} ${classes.hidden}`}
					src={closeIcon}
					alt="Close menu icon"
				/>
			</div>
		</div>
	);
};

export default Navbar;
