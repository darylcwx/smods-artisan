import { useCart } from "@/context/cartContext.js";
import { Box, Image, Group, Button } from "@mantine/core";
import { IconX, IconPlus, IconMinus } from "@tabler/icons-react";
export default function CartItem({ name, quantity, image, price }) {
	const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
		useCart();
	return (
		<Group className="">
			<Group className="w-7/12">
				<Image
					src={"/static/watches/" + image}
					alt={name}
					width={150}
					height={150}
				/>
				<span className="text-2xl font-medium">{name}</span>{" "}
			</Group>
			<Box className="w-1/12">${price}</Box>
			<Box className="flex items-center justify-center w-2/12">
				<Button
					className="bg-rose-500 p-1 h-auto hover:bg-rose-700"
					onClick={() => decreaseCartQuantity(name)}
				>
					<IconMinus size={16} />
				</Button>
				<Box className="px-2">{quantity}</Box>
				<Button
					className="bg-rose-500 p-1 h-auto hover:bg-rose-700"
					onClick={() => increaseCartQuantity(name)}
				>
					<IconPlus size={16} />
				</Button>
			</Box>
			<Box className="w-1/12">${quantity * price}</Box>
		</Group>
	);
}
