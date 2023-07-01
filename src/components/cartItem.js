import { useCart } from "@/context/cartContext.js";
import { Box, Image, Group, Button } from "@mantine/core";
import { IconX, IconPlus, IconMinus } from "@tabler/icons-react";
export default function CartItem({ name, quantity, image, price }) {
	const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
		useCart();
	return (
		<tr key={name}>
			<td>
				<Group className="w-[350px]">
					<Image
						src={"/static/watches/" + image}
						alt={name}
						width={150}
						height={150}
					/>
					<span className="text-2xl font-medium">{name}</span>
				</Group>
			</td>
			<td>${price}</td>
			<td>
				<Box className="flex flex-row align-center justify-center">
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
			</td>
			<td>${quantity * price}</td>
		</tr>
	);
}
