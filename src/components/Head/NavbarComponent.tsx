import { Button, Navbar } from "flowbite-react";

export default function NavbarCompo() {
	return (
		<Navbar className="" fluid rounded>
			<Navbar.Brand href="https://flowbite-react.com">
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Dy-Products
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Button>Login</Button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">Other</Navbar.Link>
				<Navbar.Link href="#">Products</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">About Us</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
