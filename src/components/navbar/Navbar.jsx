import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
	return (
		<div>
			<div className="navbar">
				<h1>
					<Link to="/">WhizMind</Link>
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
