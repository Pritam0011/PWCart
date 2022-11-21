import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./MyContext";

const Navigation = () => {
	const cartstyle = {
		backgroundColor: "rgb(245 158 11)",
		display: "flex",
		padding: "6px 12px",
		borderRadius: 50,
	};
	const { cart } = useContext(MyContext);
	return (
		<>
			<nav className="container mx-auto ml-4 mt-2 flex justify-between mb-10">
				<Link to="/">
					<img
						className="logo"
						src="/images/logo.png"
						alt="logo"
						style={{ height: "45px" }}
					/>
				</Link>
				<ul className="flex items-center mr-9">
					<li className="font-bold">
						<Link to="/">Home</Link>
					</li>
					<li className="ml-3 font-bold">
						<Link to="/products">Products</Link>
					</li>
					<li className="ml-3">
						<Link to="/cart">
							<div style={cartstyle}>
								<span className="font-bold">{cart.totalitem}</span>
								<img src="/images/cart.png" alt="cart" className="ml-2" />
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
