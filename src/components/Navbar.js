import React from "react";
import classes from "./Navbar.module.css";
import logo from "../images/atom.svg";

const Navbar = () => {
	return (
		<div className={classes["navbar"]}>
			<div className={classes["navbar-logo"]}>
				<h1>React</h1>
				<img
					className={classes["navbar-logo-icon"]}
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
		</div>
	);
};

export default Navbar;
