import {
	Drawer,
	Stack,
	Group,
	Box,
	Button,
	createStyles,
	useMantineTheme,
	Table,
} from "@mantine/core";
import React from "react";
import { useCart } from "@/context/cartContext.js";
import CartItem from "@/components/cartItem.js";
import { motion } from "framer-motion";
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
const Cart = React.forwardRef((props, ref) => {
	const theme = useMantineTheme();
	const { classes } = useStyles(theme);
	const { cartItems } = useCart();
	const total = cartItems.reduce((total, cartItem) => {
		const item = cartItems.find((i) => i.name === cartItem.name);
		return total + (item?.price || 0) * cartItem.quantity;
	}, 0);

	return (
		<>
			<motion.div
				key="cart"
				initial={{ x: 600 }}
				animate={{ x: 0 }}
				exit={{ x: 600 }}
				transition={{
					ease: "easeInOut",
					duration: 0.15,
				}}
				className="bg-main fixed top-[60px] right-0 h-full pb-[60px] w-[600px] p-4 overflow-auto"
				ref={ref}
			>
				<Table striped verticalSpacing="md">
					<thead>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</thead>
					<tbody>
						{cartItems.map((item) => (
							<CartItem key={item.name} {...item} />
						))}
					</tbody>
				</Table>
				<Box className="">${total}</Box>
			</motion.div>
		</>
	);
});
export default Cart;
