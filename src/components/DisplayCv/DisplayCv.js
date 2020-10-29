import React from "react";
import "./DisplayCv.css";
import "./DisplayCvResponsive.css";

function DisplayCv(props) {
	const { eduInfo, proInfo } = props;
	const { name, email, phone, nationality } = props.genInfo;

	const eduComponents = eduInfo.map((singleEdu, index) => {
		return (
			<div identifier={index} key={index} className="expDivCV" id="edu">
				<p className="expName">
					{singleEdu["institution Name"] + " "}
					<span className="date">
						{singleEdu["date (Finished)"] + " (Finished)"}
					</span>
				</p>
				<p className="sectionInfo">{singleEdu["title of Study"]}</p>
				<svg
					id="editIconCV"
					onClick={props.handleEditCV}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 50 50"
					version="1.1"
				>
					<g
						onClick={(e) => {
							e.stopPropagation();
						}}
						id="surface1616470"
					>
						<path
							style={{
								stroke: "none",
								fillRule: "nonzero",
								fill: "#000",
								fillOpacity: 1,
							}}
							d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914062 11.070312 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226562 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007812 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z M 37.34375 6.03125 "
						/>
					</g>
				</svg>
				<svg
					id="removeIconCV"
					onClick={props.handleRemoveCV}
					fill="#000000"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z" />
				</svg>
			</div>
		);
	});

	const proComponents = proInfo.map((singlePro, index) => {
		return (
			<div identifier={index} key={index} className="expDivCV" id="pro">
				<p className="expName">
					{singlePro["company Name"] + " "}
					<span className="date">
						{singlePro["date (Start)"] + " - " + singlePro["date (Start)"]}
					</span>
				</p>
				<p className="sectionInfo">{singlePro["position Title"]}</p>
				<p className="sectionInfo">{singlePro["main Tasks"]}</p>
				<svg
					id="editIconCV"
					onClick={props.handleEditCV}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 50 50"
					version="1.1"
				>
					<g id="surface1616470">
						<path
							style={{
								stroke: "none",
								fillRule: "nonzero",
								fill: "#000",
								fillOpacity: 1,
							}}
							d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914062 11.070312 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226562 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007812 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z M 37.34375 6.03125 "
						/>
					</g>
				</svg>
				<svg
					id="removeIconCV"
					onClick={props.handleRemoveCV}
					fill="#000000"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z" />
				</svg>
			</div>
		);
	});

	const genInfoStyling = { textAlign: "center", marginLeft: "0px" }; //centering just general info

	if (!name) {
		return (
			<div className="containerCv">
				<h1 className="placeHolderCv">CV Info will be shown here</h1>
			</div>
		);
	} else {
		return (
			<div className="containerCv">
				<h1 id="name">{name}</h1>
				<p className="sectionInfo" style={genInfoStyling}>
					{email}
				</p>
				<p className="sectionInfo" style={genInfoStyling}>
					{phone}
				</p>
				<p className="sectionInfo" style={genInfoStyling}>
					{nationality}
				</p>
				<h1 className="sectionTitle">Educational Experiences</h1>
				{eduComponents}
				<h1 className="sectionTitle">Professional Experiences</h1>
				{proComponents}
			</div>
		);
	}
}

export default DisplayCv;
