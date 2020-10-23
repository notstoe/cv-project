import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import InputField from "./components/InputField/InputField";
import DisplayCv from "./components/DisplayCv/DisplayCv";

function App() {
	// ..:: GENERAL INFO VARIABLES
	const [generalInfo, setGeneralInfo] = useState({});
	const [hideGen, setHideGen] = useState(true);

	// name of inputs in this object will be the keys on state object
	const generalInput = {
		title: "General Information",
		inputFields: [
			{ name: "name", type: "text", id: "gen" },
			{ name: "email", type: "text", id: "gen" },
			{ name: "phone", type: "text", id: "gen" },
			{ name: "nationality", type: "text", id: "gen" },
		],
	};

	// ..:: EDUCATIONAL EXPERIENCE VARIABLES

	const [currentEduInfo, setCurrentEduInfo] = useState({});

	const [allEduInfo, setAllEduInfo] = useState([]);

	const [hideEdu, setHideEdu] = useState(true);

	const eduInput = {
		title: "Educational Experience",
		inputFields: [
			{ name: "institution Name", type: "text", id: "edu" },
			{ name: "title of Study", type: "text", id: "edu" },
			{ name: "date (Finished)", type: "date", id: "edu" },
		],
	};

	// PROFESSIONAL EXPERIENCE VARIABLES

	const [currentProInfo, setCurrentProInfo] = useState({});

	const [allProInfo, setAllProInfo] = useState([]);

	const [hidePro, setHidePro] = useState(true);

	const proInput = {
		title: "Professional Experience",
		inputFields: [
			{ name: "company Name", type: "text", id: "pro" },
			{ name: "position Title", type: "text", id: "pro" },
			{ name: "main Tasks", type: "text", id: "pro" },
			{ name: "date (Start)", type: "date", id: "pro" },
			{ name: "date (End)", type: "date", id: "pro" },
		],
	};

	function handleChange(e) {
		const { name, value, id } = e.target;
		if (id === "gen") setGeneralInfo({ ...generalInfo, [name]: value });
		if (id === "edu") setCurrentEduInfo({ ...currentEduInfo, [name]: value });
		if (id === "pro") setCurrentProInfo({ ...currentProInfo, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const { id } = e.target;

		if (id === "gen") setHideGen(!hideGen);
		if (id === "edu") {
			let newEduStateArr = allEduInfo.slice();
			newEduStateArr.push(currentEduInfo);
			setAllEduInfo(newEduStateArr);
			setCurrentEduInfo({});
			setHideEdu(!hideEdu);
		}
		if (id === "pro") {
			let newProStateArr = allProInfo.slice();
			newProStateArr.push(currentProInfo);
			setAllProInfo(newProStateArr);
			setCurrentProInfo({});
			setHidePro(!hidePro);
		}
	}

	// MAIN COMPONENTS OF THE PAGE
	return (
		<div>
			<Header />
			<h1 className="pageTitle">Submit your CV</h1>
			<InputField
				infoState={generalInfo}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				hideInput={hideGen}
				setHideInput={setHideGen}
				inputInfo={generalInput}
			/>

			<InputField
				infoState={currentEduInfo}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				hideInput={hideEdu}
				setHideInput={setHideEdu}
				inputInfo={eduInput}
			/>

			<InputField
				infoState={currentProInfo}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				hideInput={hidePro}
				setHideInput={setHidePro}
				inputInfo={proInput}
			/>

			<DisplayCv
				genInfo={generalInfo}
				eduInfo={allEduInfo}
				proInfo={allProInfo}
			/>
		</div>
	);
}

export default App;
