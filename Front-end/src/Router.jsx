import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./pages/home/Home";
import Login from "./pages/Login/index"
import Profile from "./pages/Profile/Profile";



function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/profile" element={<Profile />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;