import React from "react";
import "./GenInfo.css";

function GenInfo(props) {
	const { generalInfo, handleChangeGen, handleSubmitGen } = props;
	return (
		<form>
			<label htmlFor="name">Name: </label>
			<input
				onChange={handleChangeGen}
				value={generalInfo.name}
				type="text"
				name="name"
			></input>
			<br />
			<label htmlFor="email">Email: </label>
			<input
				onChange={handleChangeGen}
				value={generalInfo.email}
				type="text"
				name="email"
			></input>
			<br />
			<label htmlFor="phoneNum">Phone Number: </label>
			<input
				onChange={handleChangeGen}
				value={generalInfo.phoneNum}
				type="text"
				name="phoneNum"
			></input>
			<br />
			<label htmlFor="nationality">Nationality: </label>
			<input
				onChange={handleChangeGen}
				value={generalInfo.nationality}
				type="text"
				name="nationality"
			></input>
			<br />
			<button onClick={handleSubmitGen}>Submit</button>
		</form>
	);
}

export default GenInfo;
