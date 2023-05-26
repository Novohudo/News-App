import './App.css';
import Nav from "./components/navbar/Nav";
import {Outlet, Route, Routes} from "react-router-dom";
import TopSources from "./components/topSources/TopSources";
import Favorites from "./components/favorite/Favorites";
import About from "./components/about/About";
import React from "react";
import Home from "./components/home/Home";


function App() {
	return (
		<div className="App">
			<Nav/>
			<div className="App_container">
				<Routes>
					<Route path="/" element={<Outlet />}>
						<Route path="" element={<Home/>} />
						<Route path="newsCategories" element={<TopSources/>}/>
						<Route path="favorites" element={<Favorites/>}/>
						<Route path="about" element={<About/>}/>
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
