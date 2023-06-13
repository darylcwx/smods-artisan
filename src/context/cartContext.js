import { useState, createContext, useContext } from "react";
import Cart from "@/components/cart.js";
import useLocalStorage from "@/hooks/useLocalStorage.js";
const CartContext = createContext({});

export function useCart() {
	return useContext(CartContext);
}

export function CartProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useLocalStorage("cart", []);

	const openCart = () => {
		setIsOpen(true);
	};
	const closeCart = () => {
		setIsOpen(false);
	};

	// const getItemQuantity = (name) => {
	// 	console.log("getting qty");
	// 	const quantity =
	// 		cartItems.find((item) => item.name === name)?.quantity || 0;
	// 	return quantity;
	// };
	const increaseCartQuantity = (name, image, price) => {
		console.log("increase qty");
		setCartItems((currItems) => {
			if (currItems.find((item) => item.name === name) == null) {
				return [...currItems, { name, quantity: 1, image, price }];
			} else {
				return currItems.map((item) => {
					if (item.name === name) {
						return {
							...item,
							quantity: item.quantity + 1,
						};
					} else {
						return item;
					}
				});
			}
		});
	};
	const decreaseCartQuantity = (name) => {
		console.log("decrease qty");
		setCartItems((currItems) => {
			if (currItems.find((item) => item.name === name)?.quantity === 1) {
				return currItems.filter((item) => item.name !== name);
			} else {
				return currItems.map((item) => {
					if (item.name === name) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};
	const removeFromCart = (name) => {
		console.log("remove from cart");
		setCartItems((currItems) => {
			return currItems.filter((item) => item.name !== name);
		});
	};

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
				openCart,
				closeCart,
			}}
		>
			{children}
			<Cart isOpen={isOpen} />
		</CartContext.Provider>
	);
}