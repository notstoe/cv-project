import React, { useState } from "react";
import GeneralInfo from "./components/GenInfo/GenInfo";
import Header from "./components/Header/Header";

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
			<GeneralInfo
				generalInfo={generalInfo}
				handleChangeGen={handleChangeGen}
				handleSubmitGen={handleSubmitGen}
			/>
		</div>
	);
}

export default App;
