/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

export default function NavigationBar({ currentPage, HandlePageChange }) 
{
	const [burgerBarActive, SetBurgerBarState] = useState(false);
	
	const navBarClasses = `has-background-dark is-transparent has-text-white ${burgerBarActive ? "is-active" : ""}`;
	const navBarButtonClasses = "button navbar-item is-size-5 mr-2";

	function GetTextColour(pageName)
	{
		if (currentPage === pageName) return 'has-text-dark';
		else return 'has-text-light';
	}

	function GetBackgroundColour(pageName)
	{
		if (currentPage === pageName) return ' has-background-light';
		else return ' has-background-dark';
	}

	return (
		<div>
			<nav className="navbar has-background-dark p-2 has-text-weight-semibold is-transparent" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<div className="navbar-item has-text-white is-size-3 ml-5">Alex Scrivener</div>
					<a 
						onClick ={() => SetBurgerBarState(!burgerBarActive)}
						role="button"
						className={navBarClasses + ` navbar-burger`}
						id="navbar-burger"
						aria-label="menu"
						aria-expanded="false">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbar" className={navBarClasses + ` navbar-menu`}>
					<div className="navbar-end mr-5">
						<div className="navbar-item">
							<button className={navBarButtonClasses + GetBackgroundColour('AboutMe')} 
								href="#aboutme"
								onClick ={() => HandlePageChange('AboutMe')}>
								<a className = { GetTextColour('AboutMe') }>About Me</a>
								</button>

							<button className={navBarButtonClasses + GetBackgroundColour('Portfolio')} 
								href="#portfolio"
								onClick = {() => HandlePageChange('Portfolio')}>
								<a className = { GetTextColour('Portfolio') }>Portfolio</a>
								</button>

							<button className={navBarButtonClasses + GetBackgroundColour('Resume')} 
								href="#resume"
								onClick = {() => HandlePageChange('Resume')}>
								<a className = { GetTextColour('Resume') }>Resume</a>
								</button>

							<button className={navBarButtonClasses + GetBackgroundColour('Contact')} 
								href="#contact"
								onClick = {() => HandlePageChange('Contact')}>
								<a className = { GetTextColour('Contact') }>Contact</a>
								</button>
						</div>
					</div>
				</div>
			</nav>
  		</div>
	);
}