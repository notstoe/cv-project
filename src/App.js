import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import InputField from "./components/InputField/InputField";

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "",
		email: "",
		phone: "",
		nationality: "",
	});
	const [hideInput, setHideInput] = useState(true);

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
		setHideInput(!hideInput);
	}

	return (
		<div>
			<Header />
			<h1 className="pageTitle">Submit your CV</h1>
			<InputField
				generalInfo={generalInfo}
				handleChange={handleChangeGen}
				handleSubmit={handleSubmitGen}
				hideInput={hideInput}
				setHideInput={setHideInput}
				inputInfo={generalInput}
			/>
		</div>
	);
}

export default App;
