import { useState, useEffect, useRef } from "react";
import {
	useMantineColorScheme,
	createStyles,
	Burger,
	Group,
	Header,
	Container,
	Paper,
	Modal,
	Button,
	ActionIcon,
	TextInput,
	Textarea,
	SimpleGrid,
	Title,
	Menu,
	Image,
	Box,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import {
	IconSun,
	IconMoonStars,
	IconCheck,
	IconX,
	IconAt,
	IconBrandTelegram,
	IconShoppingCart,
} from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import { useForm } from "@mantine/form";
import { useCart } from "@/context/cartContext.js";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "@/components/cart.js";
const useStyles = createStyles((theme) => ({
	link: {
		display: "block",
		lineHeight: 1,
		padding: "10px 20px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color: "white",
		// "&:hover": {
		// 	backgroundColor:
		// 		theme.colorScheme === "dark"
		// 			? theme.colors.dark[6]
		// 			: theme.colors.gray[0],
		// },

		[theme.fn.smallerThan("sm")]: {
			borderRadius: 0,
			height: "60px",
			display: "flex",
			alignItems: "center",
			padding: "10px 20px",
		},
	},
	dropdown: {
		position: "absolute",
		top: header_height,
		left: 0,
		right: 0,
		border: "none",
		borderBottomLeftRadius: "10px",
		borderBottomRightRadius: "10px",
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
}));
const header_height = 60;
export default function Nav() {
	const [navOpen, setNavOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	// Set button as state for use-click-outside hook
	const [navButton, setNavButton] = useState(null);
	const [cartButton, setCartButton] = useState(null);
	const [cart, setCart] = useState(null);
	const navRef = useClickOutside(() => setNavOpen(false), null, [navButton]);
	const cartRef = useClickOutside(() => setCartOpen(false), null, [
		cartButton,
		cart,
	]);

	const [modal, openModal] = useState(false);
	const { classes } = useStyles();
	const form = useForm({
		initialValues: {
			name: "",
			telegram: "",
			subject: "",
			message: "",
		},
		validate: {
			name: (value) =>
				value.trim().length < 1 ? "Please input a name." : null,
			telegram: (value) =>
				/^[A-Za-z0-9]+$/.test(value) && value.trim().length >= 5
					? null
					: "Please enter a valid telegram handle.",
			message: (value) =>
				value.trim().length === 0 ? "Please enter a message." : null,
		},
	});
	const { cartQuantity } = useCart();
	return (
		<>
			<Header height={header_height} className="fixed">
				<Container className="h-full max-w-none flex items-center">
					{/* Hamburger and side nav for mobile */}
					<Box className="flex md:hidden items-center justify-between w-full">
						<Burger
							ref={setNavButton}
							id="navButton"
							opened={navOpen}
							onClick={() => {
								setNavOpen(!navOpen);
							}}
							className="inline"
							size="sm"
						/>
						<AnimatePresence>
							{navOpen && (
								<>
									<motion.div
										key="overlay"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											ease: "easeInOut",
											duration: 0.3,
										}}
									>
										<Box
											className="fixed top-[60px] left-0 h-screen w-screen bg-black/70"
											sx={{
												backdropFilter: "blur(2px);",
											}}
										></Box>
									</motion.div>
									<motion.div
										key="menu"
										initial={{ x: -250 }}
										animate={{ x: 0 }}
										exit={{ x: -250 }}
										transition={{
											ease: "easeInOut",
											duration: 0.15,
										}}
										className="fixed top-[60px] left-0 pb-[60px] w-[250px] h-full justify-between flex flex-col bg-main"
										ref={navRef}
									>
										<Box>
											<Link
												href="/"
												className={classes.link}
											>
												Home
											</Link>
											<Link
												href="/shop"
												className={classes.link}
											>
												Shop
											</Link>
											<Link
												href="/about"
												className={classes.link}
											>
												About
											</Link>
											<Link
												href="/cart"
												className={classes.link}
											>
												<span
													style={{
														paddingRight: "0.5rem",
													}}
												>
													Cart
												</span>
												{<IconShoppingCart />}
											</Link>
										</Box>
										<Button
											onClick={() => openModal(true)}
											className="h-14 w-full bg-accent hover:bg-accent-hover rounded-none"
											rightIcon={<IconBrandTelegram />}
										>
											Contact me!
										</Button>
									</motion.div>
								</>
							)}
						</AnimatePresence>
						<Link href="/" className="">
							<Image src="/svgs/v1.svg" width={48} />
						</Link>
					</Box>

					{/* Normal nav bar */}
					<Box className="hidden md:flex row justify-between h-full w-full">
						<Group>
							<Link href="/">
								<Image src="/svgs/v1.svg" width={48} />
							</Link>
						</Group>
						<Group className="flex">
							<Link href="/shop" className={classes.link}>
								Shop
							</Link>
							{/* Shop list of items? 
							<Menu shadow="md" width={200} ref={ref} trigger="hover">
							<Menu.Target>
								<Link href="/shop" className={classes.link}>
									Shop
								</Link>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item>
									<Link
										href={{
											pathname: "/shop",
											query: { filter: "Bezel Inserts" },
										}}
										className={classes.link}
									>
										Bezel Inserts
									</Link>
								</Menu.Item>
								<Menu.Item>
									<Link
										href={{
											pathname: "/shop",
											query: { filter: "Chapter Rings" },
										}}
										className={classes.link}
									>
										Chapter Rings
									</Link>
								</Menu.Item>
								<Menu.Item>Cases</Menu.Item>
								<Menu.Item>Crowns</Menu.Item>
								<Menu.Item>Hands</Menu.Item>
								<Menu.Item>Dials</Menu.Item>
								<Menu.Item>Movements</Menu.Item>
								<Menu.Item>Straps</Menu.Item>
								<Menu.Item>Clasps</Menu.Item>
							</Menu.Dropdown>
						</Menu> */}
							<Link href="/about" className={classes.link}>
								About
							</Link>
							<Button
								className="bg-accent hover:bg-accent-hover"
								onClick={() => openModal(true)}
							>
								Contact me
							</Button>
							<Modal
								transition="pop"
								opened={modal}
								size="md"
								onClose={() => openModal(false)}
								centered
								zIndex={1001}
							>
								<form
									onSubmit={form.onSubmit((values) => {
										var token =
											"6042304491:AAG0Oh1Y9wqccUaHc51M_a07i5JZwSXX62o";
										var chatID = "-1001815908809";

										var text = encodeURIComponent(
											`Name: ${values.name}\nTele: @${values.telegram}\nSubject: ${values.subject}\nMessage: ${values.message}`
										);

										var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
										fetch(url).then((response) => {
											if (response.ok) {
												notifications.show({
													icon: (
														<IconCheck size={16} />
													),
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
															Uh oh! Something
															went wrong.
															<br />
															Please try again, or
															you can reach me
															directly{" "}
															<a
																href="https://t.me/damnsope"
																target="_blank"
																className="no-underline text-blue-300"
															>
																here
															</a>
															. (this link opens a
															new window)
														</span>
													),
												});
											}
										});
										form.reset();
										openModal(false);
									})}
								>
									<Title size="h2" align="center">
										Ask me anything!
									</Title>

									<SimpleGrid
										cols={2}
										mt="xl"
										breakpoints={[
											{ maxWidth: "sm", cols: 1 },
										]}
									>
										<TextInput
											label="Name"
											placeholder="Your name"
											name="name"
											variant="filled"
											withAsterisk
											{...form.getInputProps("name")}
										/>
										<TextInput
											label="Telegram"
											placeholder="Your telegram handle"
											name="telegram"
											variant="filled"
											icon={<IconAt size={16} />}
											withAsterisk
											{...form.getInputProps("telegram")}
										/>
									</SimpleGrid>

									<TextInput
										label="Subject"
										placeholder="Subject"
										mt="md"
										name="subject"
										variant="filled"
										{...form.getInputProps("subject")}
									/>
									<Textarea
										mt="md"
										label="Message"
										placeholder="Your message"
										maxRows={10}
										minRows={5}
										autosize
										name="message"
										variant="filled"
										withAsterisk
										{...form.getInputProps("message")}
									/>

									<Group position="center" mt="xl">
										<Button
											type="submit"
											size="md"
											className="bg-accent hover:bg-accent-hover"
										>
											Send message
										</Button>
									</Group>
								</form>
							</Modal>
							{/* Cart */}
							<Button
								ref={setCartButton}
								className="bg-accent hover:bg-accent-hover rounded-full p-1 w-10 h-10"
								onClick={() => {
									setCartOpen(!cartOpen);
								}}
							>
								{<IconShoppingCart className="text-white" />}
								{cartQuantity > 0 && (
									<div className="text-white text-sm p-1 justify-center flex items-center absolute bg-rose-600 w-5 h-5 top-1/2 left-1/2 rounded-full">
										{cartQuantity}
									</div>
								)}
							</Button>
							<AnimatePresence>
								{cartOpen && (
									<>
										<motion.div
											key="overlay"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{
												ease: "easeInOut",
												duration: 0.3,
											}}
										>
											<Box
												className="fixed top-[60px] left-0 h-screen w-screen bg-black/70"
												sx={{
													backdropFilter:
														"blur(2px);",
												}}
											></Box>
											<Cart
												ref={(cartRef, setCart)}
												onClose={() =>
													setCartOpen(false)
												}
											/>
										</motion.div>
									</>
								)}
							</AnimatePresence>
						</Group>
					</Box>
				</Container>
			</Header>
		</>
	);
}
