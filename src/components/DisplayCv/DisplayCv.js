import React from "react";
import "./DisplayCv.css";

function DisplayCv(props) {
	const { eduInfo, proInfo } = props;
	const { name, email, phone, nationality } = props.genInfo;

	const eduComponents = eduInfo.map((singleEdu) => {
		return (
			<div>
				<p className="expName">
					{singleEdu["institution Name"] + " "}
					<span className="date">
						{singleEdu["date (Finished)"] + " (Finished)"}
					</span>
				</p>
				<p className="sectionInfo">{singleEdu["title of Study"]}</p>
			</div>
		);
	});

	const proComponents = proInfo.map((singlePro) => {
		return (
			<div>
				<p className="expName">
					{singlePro["company Name"] + " "}
					<span className="date">
						{singlePro["date (Start)"] + " - " + singlePro["date (Start)"]}
					</span>
				</p>
				<p className="sectionInfo">{singlePro["position Title"]}</p>
				<p className="sectionInfo">{singlePro["main Tasks"]}</p>
			</div>
		);
	});

	if (!name) {
		return (
			<div className="containerCv">
				<h1 className="placeHolderCv">Your CV Info will be shown here</h1>
			</div>
		);
	} else {
		return (
			<div className="containerCv">
				<h1 id="name">{name}</h1>
				<p className="sectionInfo">{email}</p>
				<p className="sectionInfo">{phone}</p>
				<p className="sectionInfo">{nationality}</p>
				<h1 className="sectionTitle">Educational Experiences</h1>
				{eduComponents}
				<h1 className="sectionTitle">Professional Experiences</h1>
				{proComponents}
			</div>
		);
	}
}

export default DisplayCv;
