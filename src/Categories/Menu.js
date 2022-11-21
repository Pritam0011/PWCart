import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Components/MyContext";

const Menu = ({ product }) => {
	const [isAdd, setIsAdd] = useState(false);
	const { cart, setCart } = useContext(MyContext);
	function addtocart(e, product) {
		let _cart = { ...cart };
		if (!_cart.items) {
			_cart.items = {};
		}
		if (_cart.items[product.id]) {
			_cart.items[product.id] = _cart.items[product.id] + 1;
		} else {
			_cart.items[product.id] = 1;
		}
		if (!_cart.totalitem) {
			_cart.totalitem = 0;
		}
		_cart.totalitem += 1;
		setCart(_cart);

		setIsAdd(true);
		setTimeout(() => {
			setIsAdd(false);
		}, 1000);
	}
	return (
		<>
			<div>
				<Link to={`/products/${product.id}`}>
					<img
						style={{ width: 250, height: 200 }}
						src={product.image}
						alt="shop"
					/>
				</Link>
				<div className="text-center">
					<h2
						className="font-bold text-lg py-2"
						style={{
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						{product.title}
					</h2>
					<span className="bg-gray-200 rounded-full py-1 text-sm px-4">
						{product.rating.rate} / 5 ⭐ ({product.rating.count})
					</span>
				</div>
				<div className="flex items-center justify-between mt-4">
					<span>$ {product.price}</span>
					<button
						disabled={isAdd}
						className={`${
							isAdd ? `bg-green-500` : `bg-yellow-500`
						} py-0.5 px-4 rounded-full font-bold `}
						onClick={(e) => {
							addtocart(e, product);
						}}
					>
						ADD{isAdd ? `ED` : ``}
					</button>
				</div>
			</div>
		</>
	);
};

export default Menu;
