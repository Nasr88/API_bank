import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";


import Home from "./pages/home/Home";
import Login from "./pages/Login/index"



function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/sign-in" element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;