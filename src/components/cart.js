import { Drawer, Stack, Group, Box } from "@mantine/core";
import { useCart } from "@/context/cartContext.js";
import CartItem from "@/components/cartItem.js";

export default function Cart({ isOpen }) {
	const { openCart, closeCart, cartItems } = useCart();
	const total = cartItems.reduce((total, cartItem) => {
		const item = cartItems.find((i) => i.name === cartItem.name);
		return total + (item?.price || 0) * cartItem.quantity;
	}, 0);

	return (
		<Drawer
			opened={isOpen}
			position="right"
			overlayProps={{ opacity: 0.5, blur: 1 }}
			onClose={closeCart}
			title="Cart"
			size="lg"
			className="h-screen"
		>
			<Group className="py-3">
				<div className="w-7/12">Product</div>
				<div className="w-1/12">Price</div>
				<div className="w-2/12 text-center">Quantity</div>
				<div className="w-1/12">Total</div>
			</Group>
			<Stack>
				{cartItems.map((item) => (
					<CartItem key={item.name} {...item} />
				))}
			</Stack>
			<Box className="absolute bottom-0">${total}</Box>
		</Drawer>
	);
}
