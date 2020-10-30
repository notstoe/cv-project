import React, { useState } from "react";
import "./reset.css";
import Header from "./components/Header/Header";
import "./App.css";
import "./AppResponsive.css";
import InputField from "./components/InputField/InputField";
import DisplayCv from "./components/DisplayCv/DisplayCv";
import Footer from "./components/Footer/Footer";

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

	// ..:: PROFESSIONAL EXPERIENCE VARIABLES

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

			if (!currentEduInfo["institution Name"]) {
				alert("Please add an Institution name");
				return;
			} else if (!currentEduInfo["title of Study"]) {
				alert("Please add an Title of Study");
				return;
			} else if (!currentEduInfo["date (Finished)"]) {
				alert("Please add the date you finished your studies");
				return;
			}

			if (editSwitch.isEdit) {
				// run this bit when the editSwitch.isEdit is true (editing, not adding)
				newEduStateArr[editSwitch.index] = currentEduInfo;
				setEditSwitch({ isEdit: !editSwitch.isEdit, index: "" });
			} else {
				newEduStateArr.push(currentEduInfo);
			}

			setAllEduInfo(newEduStateArr);
			setCurrentEduInfo({});
			setHideEdu(!hideEdu);
		}
		if (id === "pro") {
			let newProStateArr = allProInfo.slice();

			if (!currentProInfo["company Name"]) {
				alert("Please add a Company Name");
				return;
			} else if (!currentProInfo["position Title"]) {
				alert("Please add a Position Title");
				return;
			} else if (
				!currentProInfo["date (Start)"] ||
				!currentProInfo["date (End)"]
			) {
				alert("Please add the dates of beginning and end of your employment");
				return;
			}

			if (editSwitch.isEdit) {
				// run this bit when the editSwitch.isEdit is true (editing, not adding)
				newProStateArr[editSwitch.index] = currentProInfo;
				setEditSwitch({ isEdit: !editSwitch.isEdit, index: "" });
			} else {
				newProStateArr.push(currentProInfo);
			}

			setAllProInfo(newProStateArr);
			setCurrentProInfo({});
			setHidePro(!hidePro);
		}
	}

	// ..:: EDIT CV HANDLING

	const [editSwitch, setEditSwitch] = useState({
		isEdit: false,
		index: "",
	});

	function handleEditCV(e) {
		let { id } = e.target.parentNode;
		let identifier;
		if (id === "surface1616470") {
			identifier =
				e.target.parentNode.parentNode.parentNode.attributes[0].nodeValue;
			id = e.target.parentNode.parentNode.parentNode.id;
		} else {
			identifier = e.target.parentNode.attributes[0].nodeValue;
		}

		// switches the submit function for editing and not adding ("if" condition makes sure that if you click it twice, youre still editing)
		if (!editSwitch.isEdit) {
			setEditSwitch({ isEdit: !editSwitch.isEdit, index: identifier });
		} else {
			setEditSwitch({ ...editSwitch, index: identifier });
		}
		// scrolls to the top of the document
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

		if (id === "edu") {
			setCurrentEduInfo(JSON.parse(JSON.stringify(allEduInfo[identifier])));
			if (hideEdu) setHideEdu(!hideEdu);
		} else if (id === "pro" || id === "surface1616470") {
			setCurrentProInfo(JSON.parse(JSON.stringify(allProInfo[identifier])));
			if (hidePro) setHidePro(!hidePro);
		}
	}

	function handleRemoveCV(e) {
		const identifier = e.target.parentNode.parentNode.attributes[0].nodeValue;
		const { id } = e.target.parentNode.parentNode;

		if (id === "edu") {
			let newEduStateArr = allEduInfo.slice();
			newEduStateArr.splice(identifier, 1);

			setAllEduInfo(newEduStateArr);
		} else if (id === "pro") {
			let newProStateArr = allProInfo.slice();
			newProStateArr.splice(identifier, 1);

			setAllProInfo(newProStateArr);
		}
	}

	// MAIN COMPONENTS OF THE PAGE
	return (
		<div id="pageContainer">
			<div id="pageContent">
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
					handleEditCV={handleEditCV}
					handleRemoveCV={handleRemoveCV}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
