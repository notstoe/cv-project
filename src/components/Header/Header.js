import React from "react";
import github from "./assets/github.png";
import "./Header.css";
import "./HeaderResponsive.css";

function Header() {
	return (
		<header className="header">
			<a href="https://github.com/notstoe">
				<img id="github" src={github} alt="github"></img>
			</a>
			<p className="headerLink">Home</p>
			<p className="headerLink">Content</p>
			<p id="contact" className="activeTab">
				Contact
			</p>
			<p className="headerLink">Help</p>
		</header>
	);
}

export default Header;
