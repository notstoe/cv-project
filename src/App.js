import React, { useState } from "react";
import GeneralInfo from "./components/GenInfo/GenInfo";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "",
		email: "",
		phoneNum: "",
		nationality: "",
	});

	function handleChangeGen(e) {
		const { name, value } = e.target;
		setGeneralInfo({ ...generalInfo, [name]: value });
	}

	function handleSubmitGen(e) {
		e.preventDefault();
	}

	return (
		<div>
			<Header />
			<h1 className="pageTitle">Submit your CV</h1>
			<GeneralInfo
				generalInfo={generalInfo}
				handleChangeGen={handleChangeGen}
				handleSubmitGen={handleSubmitGen}
			/>
		</div>
	);
}

export default App;
