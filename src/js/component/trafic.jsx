import React, { useState } from "react";

const Trafic = () => {
	const [color, setColor] = useState(null);

	return (
		<div className="container">
			<div
				className={`red ${color === "red" ? "shadow-circle" : null}`}
				onClick={() => setColor("red")}></div>
			<div
				className={`green ${
					color === "green" ? "shadow-circle" : null
				}`}
				onClick={() => setColor("green")}></div>
			<div
				className={`yellow ${
					color === "yellow" ? "shadow-circle" : null
				}`}
				onClick={() => setColor("yellow")}></div>
		</div>
	);
};

export default Trafic;
