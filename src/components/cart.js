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
import { useRef, useState } from "react";
import { useCart } from "@/context/cartContext.js";
import CartItem from "@/components/cartItem.js";
import { motion } from "framer-motion";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX, IconAt } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";
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
const Cart = React.forwardRef(({ onClose }, ref) => {
	const theme = useMantineTheme();
	const { classes } = useStyles(theme);
	const { cartItems } = useCart();
	const telegramHandleRef = useRef(null);
	const [telegramHandleError, setTelegramHandleError] = useState(null);
	const total = cartItems.reduce((total, cartItem) => {
		const item = cartItems.find((i) => i.name === cartItem.name);
		return total + (item?.price || 0) * cartItem.quantity;
	}, 0);
	const handleCheckout = (cartItems) => {
		var telegramHandle = telegramHandleRef.current.value;
		console.log(telegramHandle);
		if (
			telegramHandle === "" ||
			!/^[A-Za-z0-9]+$/.test(telegramHandle) ||
			telegramHandle.trim().length < 5
		) {
			setTelegramHandleError("Please enter a valid telegram handle");
			return;
		}
		var token = "6042304491:AAG0Oh1Y9wqccUaHc51M_a07i5JZwSXX62o";
		var chatID = "-1001815908809";
		var text = encodeURIComponent(
			`Telegram:\n@${telegramHandle}\nStringified:\n${JSON.stringify(
				cartItems
			)}\n`
		);
		var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
		fetch(url).then((response) => {
			if (response.ok) {
				notifications.show({
					icon: <IconCheck size={16} />,
					title: "Success!",
					autoClose: 7000,
					withCloseButton: true,
					color: "green",
					message:
						"I've received a notification with regards to your message.\n\nI'll get back to you shortly!",
				});
			} else {
				notifications.show({
					icon: <IconX size={16} />,
					title: "Failure!",
					autoClose: 7000,
					withCloseButton: true,
					color: "red",
					message: (
						<span>
							Uh oh! Something went wrong.
							<br />
							Please try again, or you can reach me directly{" "}
							<a
								href="https://t.me/damnsope"
								target="_blank"
								rel="noopener noreferrer"
								className="no-underline text-blue-300"
							>
								here
							</a>
							. (this link opens a new window)
						</span>
					),
				});
			}
		});
		onClose();
	};
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
				className="bg-main fixed top-[60px] right-0 h-full pb-[80px] w-[600px] p-4 overflow-auto"
				ref={ref}
			>
				{cartItems.length === 0 ? (
					<Box className="h-full flex items-center justify-center">
						No items in cart 😢
					</Box>
				) : (
					<>
						<Box className="flex flex-col h-100 justify-between">
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
							<Box className="flex flex-row justify-between pt-10 pb-3">
								<Box className="text-2xl">Total</Box>
								<Box className="font-bold text-2xl">
									${total}
								</Box>
							</Box>
							<Box className="italic pb-3">
								For now, clicking checkout sends me a telegram
								message. I will need your telegram handle so I
								can contact you for payment, updates, and
								further details.
							</Box>
							<TextInput
								placeholder="damnsope"
								label="Your Telegram handle"
								withAsterisk
								icon={<IconAt size="0.8rem" />}
								className="pb-3"
								ref={telegramHandleRef}
								error={telegramHandleError}
							/>
							<Button
								className="bg-accent hover:bg-accent-hover"
								onClick={() => handleCheckout(cartItems)}
							>
								Checkout
							</Button>
						</Box>
					</>
				)}
			</motion.div>
		</>
	);
});
export default Cart;
