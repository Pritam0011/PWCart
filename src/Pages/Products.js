import ProductNav from "../Components/ProductNav";
import Menu from "../Categories/Menu";
import { useEffect, useState } from "react";

const Products = () => {
	const [cate, setCate] = useState("products");

	const [product, setproduct] = useState([]);
	const [oldCate, setOldCate] = useState("");

	useEffect(() => {
		if (cate === oldCate) return;

		fetch(`https://fakestoreapi.com/${cate}`)
			.then((res) => res.json())
			.then((pro) => {
				setproduct(pro);
				setOldCate(cate);
			});
	}, [cate, oldCate]);

	return (
		<>
			<div className="mb-16 px-16">
				<ProductNav setCate={setCate} />
				<div className="grid grid-cols-5 my-8 gap-24 pb-9">
					{product.map((pro) => (
						<Menu key={pro.id} product={pro} />
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
