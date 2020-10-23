import React from "react";
import "./DisplayCv.css";

function DisplayCv(props) {
	const { eduInfo, proInfo } = props;
	const { name, email, phone, nationality } = props.genInfo;

	return (
		<div className="containerCv">
			<h1 id="name">{name}</h1>
			<p className="genInfo">{email}</p>
			<p className="genInfo">{phone}</p>
			<p className="genInfo">{nationality}</p>
		</div>
	);
}

export default DisplayCv;
