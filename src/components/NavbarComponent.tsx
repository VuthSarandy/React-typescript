import { Button, Navbar } from "flowbite-react";

export default function NavbarComponent() {
	return (
		<Navbar className="mx-[20px] md:mx-[50px] mb-[100px]" fluid rounded>
			<Navbar.Brand href="https://flowbite-react.com">
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					HTTPS.SHOP
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Button>Get started</Button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
