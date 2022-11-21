const ProductNav = ({ setCate }) => {
	const cateCha = () => {
		let e = document.getElementById("category");
		let evalue = e.value;
		setCate(evalue);
	};

	return (
		<div className="flex justify-between">
			<h1 className="my-8 font-bold">Products</h1>
			<div>
				<label htmlFor="pet-select" className="my-8 font-bold">
					Category:
				</label>

				<select
					name="category"
					id="category"
					style={{ padding: "2px 5px", outline: "none" }}
					onChange={cateCha}
				>
					<option value="products">All</option>
					<option value="products/category/electronics">Electronics</option>
					<option value="products/category/jewelery">Jewelery</option>
					<option value="products/category/men's clothing">
						Men's clothing
					</option>
					<option value="products/category/women's clothing">
						Women's clothing
					</option>
				</select>
			</div>
		</div>
	);
};

export default ProductNav;
