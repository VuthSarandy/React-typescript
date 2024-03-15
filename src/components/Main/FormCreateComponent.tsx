/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";

// validate form input type
type ErrorType = {
	title: string;
	price: string;
};


export default function FormCreateCompo({ getDataForm } :  any) {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("electronic");
	const [image, setImage] = useState("https://via.placeholder.com/150");
	const [error, setError] = useState<ErrorType>({
		title: "",
		price: "",
	});

	useEffect(() => {
		if (title.length < 5) {
			setError((prev) => {
				console.log(prev);
				return {
					...prev,
					title: "Title must be at least 5 characters",
				};
			});
		} else {
            setError((prev) => {
                return {
                    ...prev,
                    title: "",
                };
            });
        }

        if (price <= 0) {
            setError((prev) => {
                return {
                    ...prev,
                    price: "Price must be greater than 0",
                };
            });
        }else {
            setError((prev) => {
                return {
                    ...prev,
                    price: "",
                };
            });
        }
        
	}, [title, price]);

    useEffect(() => {
        getDataForm({title, price, description, category, image});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, price, description, category, image]);

	return (
		<form className="flex max-w-md flex-col gap-4">
			<div>
				<div className="mb-2 block">
					<Label htmlFor="title" value="Product Title" />
				</div>
				<TextInput
					id="title"
					type="text"
					placeholder="Macbook Pro 2021"
					required
					onChange={(e) => setTitle(e.target.value)}
				/>
                {error.title && <p className="text-red-500">{error.title}</p>}
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="price" value="Product Price" />
				</div>
				<TextInput
					id="price"
					type="number"
					required
					onChange={(e) => setPrice(parseFloat(e.target.value))}
				/>
                {/* if error.price have value show error if not show nothing  */}
                {error.price && <p className="text-red-500">{error.price}</p>}
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="description" value="description" />
				</div>
				<Textarea
					id="description"
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
		</form>
	);
}
