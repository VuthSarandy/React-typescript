/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import { Spinner } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import NavbarCompo from "./components/Head/NavbarComponent";
import CarouselCompo from "./components/Head/CarouselComponent";
import CardCompo from "./components/Main/CardComponent";
import FormCreateCompo from "./components/Main/FormCreateComponent";
import FooterCompo from "./components/Footer/FooterComponent";


type Status = "idle" | "loading" | "success" | "error";
type Product = {
	readonly id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
};

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [status, setStatus] = useState<Status>("idle");
	const [openModal, setOpenModal] = useState(false);
	const [dataForm, setDataForm] = useState({});

	useEffect(() => {
		setStatus("loading");
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setStatus("success");
			})
			.catch(() => {
				setStatus("error");
			});
	}, []);

	if (status === "loading") {
		return (
			<div className="grid h-screen place-content-center">
				<Spinner aria-label="Extra large spinner example" size="xl" />
			</div>
		);
	}

	function getDataForm(product : any) {
		setDataForm(product);
	}

	const createProduct = () => {
		fetch("https://fakestoreapi.com/products", {
			method: "POST",
			body: JSON.stringify(dataForm),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
			});
      setOpenModal(false);
	};

	return (
		<>
			<NavbarCompo />
		<CarouselCompo/>
			<main className="grid place-content-center">
				<h1 className="text-4xl ml-24 mb-[50px]">
					All Product List
				</h1>
				<div className="ml-24 mb-[50px]">
					<Button onClick={() => setOpenModal(true)}>
						Create Product
					</Button>
				</div>
				<div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-[100px] gap-5">
					{products.map((product) => (
						<CardCompo
							key={product.id}
							title={product.title}
							price={product.price}
							image={product.image}
						/>
					))}
				</div>

				<Modal
					dismissible
					show={openModal}
					onClose={() => setOpenModal(false)}>
					<Modal.Header>Create New Product</Modal.Header>
<Modal.Body>
  <div className="space-y-6">
    <FormCreateCompo getDataForm={getDataForm} />
  </div>
</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => createProduct()}>
							Create
						</Button>
						<Button
							color="gray"
							onClick={() => setOpenModal(false)}>
							Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			</main>
			<FooterCompo />
		</>
	);
}

export default App;