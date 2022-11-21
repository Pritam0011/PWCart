import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="py-16">
			<div className="container mx-auto px-16 flex items-center justify-between">
				<div className="w-1/2 pl-10">
					<h6 className="text-lg ml-5">
						<em>Are you looking for a great deal?</em>
					</h6>
					<h1 className="text-3xl md:text-6xl font-bold">Hurry Up !</h1>
					<Link to="/products">
						<button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
							Order Now
						</button>
					</Link>
				</div>
				<div className="w-1/2">
					<img style={{ width: "500px" }} src="/images/sale.jpg" alt="sale" />
				</div>
			</div>
		</div>
	);
};

export default Home;
