import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<header className="header">
			<img id="github" src={github} alt="github"></img>
			<p className="headerLink">Home</p>
			<p className="headerLink">Content</p>
			<p id="contact" className="activeTab">
				Contact
			</p>
			<p className="headerLink">Help</p>
		</header>
	);
}

export default Footer;
