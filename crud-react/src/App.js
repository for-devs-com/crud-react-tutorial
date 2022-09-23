import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import Aggrid from "./components/Aggrid";
// import Sen

function App() {
	return (
		<div className="App">
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<a href="/tutorials" className="navbar-brand">
					for-devs.com
				</a>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={"/tutorials"} className="nav-link">
							Tutorials
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"/add"} className="nav-link">
							Add
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"/grid"} className="nav-link">
							Grid
						</Link>
					</li>
				</div>
			</nav>

			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<TutorialsList />} />
					<Route path="/tutorials" element={<TutorialsList />} />
					<Route path="/add" element={<AddTutorial />} />
					<Route path="/tutorials/:id" element={<Tutorial />} />
					<Route path="/grid" element={<Aggrid />} />
					{/* <Route path="/sendMail" element={<SendMail />} /> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
