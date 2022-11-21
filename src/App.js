import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Navigation from "./Components/Navigation";
import Cart from "./Pages/Cart";
import { MyContext } from "./Components/MyContext";
import { useEffect, useState } from "react";

function App() {
	const [cart, setCart] = useState(() => {
		return JSON.parse(window.localStorage.getItem("cart")) || {};
	});

	useEffect(() => {
		window.localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<div className="App">
			<Router>
				<MyContext.Provider value={{ cart, setCart }}>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/products" element={<Products />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</MyContext.Provider>
			</Router>
		</div>
	);
}

export default App;
