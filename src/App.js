import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import InputField from "./components/InputField/InputField";

function App() {
	// ..:: GENERAL INFO HANDLING
	const [generalInfo, setGeneralInfo] = useState({});
	const [hideGen, setHideGen] = useState(true);

	// name of inputs in this object must match names on state object
	const generalInput = {
		title: "General Information",
		inputFields: [
			{ name: "name", type: "text" },
			{ name: "email", type: "text" },
			{ name: "phone", type: "text" },
			{ name: "nationality", type: "text" },
		],
	};

	function handleChangeGen(e) {
		const { name, value } = e.target;
		setGeneralInfo({ ...generalInfo, [name]: value });
	}

	function handleSubmitGen(e) {
		e.preventDefault();
		setHideGen(!hideGen);
	}

	// ..:: EDUCATIONAL EXPERIENCE HANDLING

	const [currentEduInfo, setCurrentEduInfo] = useState({});

	const [allEduInfo, setAllEduInfo] = useState([]);

	const [hideEdu, setHideEdu] = useState(true);

	const eduInput = {
		title: "Educational Experience",
		inputFields: [
			{ name: "institution", type: "text" },
			{ name: "title of study", type: "text" },
			{ name: "date (finished)", type: "text" },
		],
	};

	function handleChangeEdu(e) {
		const { name, value } = e.target;
		setCurrentEduInfo({ ...currentEduInfo, [name]: value });
	}

	function handleSubmitEdu(e) {
		e.preventDefault();
		let newStateArr = allEduInfo.slice();
		newStateArr.push(currentEduInfo);
		setAllEduInfo(newStateArr);
		setCurrentEduInfo({});
		setHideEdu(!hideEdu);
	}

	// MAIN COMPONENTS OF PAGE
	return (
		<div>
			<Header />
			<h1 className="pageTitle">Submit your CV</h1>
			<InputField
				infoState={generalInfo}
				handleChange={handleChangeGen}
				handleSubmit={handleSubmitGen}
				hideInput={hideGen}
				setHideInput={setHideGen}
				inputInfo={generalInput}
			/>

			<InputField
				infoState={currentEduInfo}
				handleChange={handleChangeEdu}
				handleSubmit={handleSubmitEdu}
				hideInput={hideEdu}
				setHideInput={setHideEdu}
				inputInfo={eduInput}
			/>
		</div>
	);
}

export default App;
