import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Components/MyContext";

const Cart = () => {
	let gtotal = 0;
	const { cart, setCart } = useContext(MyContext);
	const [products, setProducts] = useState([]);
	const [pricefetch, togglepricefetch] = useState(false);

	useEffect(() => {
		if (!cart.items) return;

		if (pricefetch) return;

		const ids = Object.keys(cart.items);
		const nids = ids.map(function (str) {
			return parseInt(str);
		});
		fetch(`https://fakestoreapi.com/products`)
			.then((res) => res.json())
			.then((product) => {
				const t1 = product.filter((pro) => {
					return nids.includes(pro.id);
				});
				setProducts(t1);
				togglepricefetch(true);
			});
	}, [cart, pricefetch]);

	const getQty = (id) => {
		// console.log(id);
		return cart.items[id];
	};
	function decre(id) {
		const oldQ = cart.items[id];
		if (oldQ === 1) {
			delProduct(id);
		}
		const _cart = { ...cart };
		_cart.items[id] = oldQ - 1;
		_cart.totalitem -= 1;
		setCart(_cart);
	}
	function incre(id) {
		const oldQ = cart.items[id];
		const _cart = { ...cart };
		_cart.items[id] = oldQ + 1;
		_cart.totalitem += 1;
		setCart(_cart);
	}
	const sumPrice = (id, price) => {
		const Qt = getQty(id);
		const sump = price * Qt;
		gtotal += sump;
		return sump;
	};
	const delProduct = (id) => {
		const _cart = { ...cart };
		const Qty = _cart.items[id];
		delete _cart.items[id];
		_cart.totalitem -= Qty;
		setCart(_cart);
		setProducts(products.filter((product) => product.id !== id));
	};
	const orderNow = () => {
		window.alert("Order Placed Successfully 🙂🙂🙂");
		setCart([]);
		setProducts([]);
	};
	return (
		<>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{products.length ? (
					<div className="container mx-24 lg:w-1/2 w-full pb-24 mt-9">
						<h1 className="my-12 font-bold">Cart Items</h1>
						<ul>
							{products.map((product) => {
								return (
									<li className="mb-5" key={product.id}>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<img
													className="h-16"
													style={{ width: 54, height: 64 }}
													src={product.image}
													alt=""
												/>
												<span className="font-bold ml-4 w-48">
													{product.title}
												</span>
											</div>
											<div>
												<button
													className="bg-yellow-500 px-4 py-1 rounded-full leading-none"
													onClick={() => {
														decre(product.id);
													}}
												>
													-
												</button>
												<b className="px-4">{getQty(product.id)}</b>
												<button
													className="bg-yellow-500 px-4 py-1 rounded-full leading-none"
													onClick={() => {
														incre(product.id);
													}}
												>
													+
												</button>
											</div>
											<span>$ {sumPrice(product.id, product.price)}</span>
											<button
												className="bg-red-500 px-4 py-1.5 rounded-full text-white leading-none"
												onClick={() => {
													delProduct(product.id);
												}}
											>
												Delete
											</button>
										</div>
									</li>
								);
							})}
						</ul>
						<hr className="my-10" />
						<div className="text-right">
							<b>Grand Total:</b> $ {gtotal}
						</div>
						<div className="text-right mt-4">
							<button
								className="bg-yellow-500 px-4 py-2 rounded-full leading-none font-bold"
								onClick={() => {
									orderNow();
								}}
							>
								Order Now
							</button>
						</div>
					</div>
				) : (
					<img
						className="container mx-24 lg:w-1/2 w-full pb-24 mt-9"
						src="/images/empty-cart.png"
						alt=""
					/>
				)}
			</div>
		</>
	);
};

export default Cart;
