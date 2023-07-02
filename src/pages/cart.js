import {
	Container,
	Drawer,
	Stack,
	Group,
	Box,
	Button,
	createStyles,
	useMantineTheme,
	Table,
	Text,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import { useCart } from "@/context/cartContext.js";
import CartItem from "@/components/cartItem.js";
import { motion } from "framer-motion";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX, IconAt } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";
export default function cart() {
	const { cartItems } = useCart();
	return (
		<>
			{cartItems.length === 0 ? (
				<Box className="h-screen flex flex-col items-center justify-center">
					<Text>Your cart is empty 😢</Text>
					<Text>
						Go to{" "}
						<Link
							href="/shop"
							className="no-underline text-blue-400"
						>
							shop
						</Link>{" "}
						instead?
					</Text>
				</Box>
			) : (
				<Container size="md" px="xl">
					<Box className="flex flex-col h-100 justify-between">
						<Table striped verticalSpacing="md">
							{/* <thead>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</thead> */}
							<tbody>
								{cartItems.map((item) => (
									<CartItem key={item.name} {...item} />
								))}
							</tbody>
						</Table>
						<Box className="flex flex-row justify-between pt-10 pb-3">
							<Box className="text-2xl">Total</Box>
							<Box className="font-bold text-2xl"></Box>
						</Box>
					</Box>
				</Container>
			)}
		</>
	);
}
