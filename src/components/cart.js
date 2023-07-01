import {
	Drawer,
	Stack,
	Group,
	Box,
	Button,
	createStyles,
	useMantineTheme,
} from "@mantine/core";
import { useCart } from "@/context/cartContext.js";
import CartItem from "@/components/cartItem.js";
const useStyles = createStyles((theme) => ({
	drawer: {
		backgroundColor: "red",
		marginTop: "50px",
	},
}));
const styles = {
	drawer: {
		backgroundColor: "red",
		marginTop: "50px",
	},
};
export default function Cart({ isOpen }) {
	const theme = useMantineTheme();
	const { classes } = useStyles(theme);
	const { openCart, closeCart, cartItems } = useCart();
	const total = cartItems.reduce((total, cartItem) => {
		const item = cartItems.find((i) => i.name === cartItem.name);
		return total + (item?.price || 0) * cartItem.quantity;
	}, 0);

	return (
		<Box
			opened={isOpen}
			onClose={closeCart}
			className="bg-main fixed h-full w-[400px]"
		>
			<Box>
				<Button onClick={closeCart}>X</Button>
			</Box>
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
		</Box>
	);
}
