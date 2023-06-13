import React from "react";
import { useState, useEffect, useMemo } from "react";
import {
	createStyles,
	Paper,
	Text,
	Title,
	Flex,
	Container,
	SimpleGrid,
	Image,
	Tooltip,
	Button,
	Modal,
	TextInput,
	Textarea,
	Group,
	Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCart } from "@/context/cartContext.js";
const useStyles = createStyles((theme) => ({}));
export default function Watch({
	name,
	price,
	image,
	insert,
	shell,
	crown,
	strap,
	clasp,
	crystal,
	cRing,
	dial,
	hands,
	movement,
}) {
	const { classes } = useStyles();
	// const [selectedWatch, setSelectedWatch] = useState(null);
	// const [modalOpen, setModalOpen] = useState(false);
	// const openModal = (name) => {
	// 	setSelectedWatch(name);
	// 	setModalOpen(true);
	// };
	// const closeModal = () => {
	// 	setModalOpen(false);
	// };
	// const exitedModal = () => {
	// 	setSelectedWatch(null);
	// };
	// const form = useForm({
	// 	initialValues: {
	// 		name: "",
	// 		telegram: "",
	// 		message: "",
	// 	},
	// 	validate: {
	// 		name: (value) =>
	// 			value.trim().length < 1 ? "Please input a name." : null,
	// 		telegram: (value) =>
	// 			/^[A-Za-z0-9]+$/.test(value) && value.trim().length >= 5
	// 				? null
	// 				: "Please enter a valid telegram handle.",
	// 	},
	// });
	const { increaseCartQuantity } = useCart();
	return (
		<>
			<Paper
				className="p-0 rounded-xxl shadow-2xl transition ease-in-out hover:shadow-white/50 hover:scale-105 hover:duration-200"
				key={name}
			>
				<Box className="flex flex-col justify-start h-full">
					<Image
						src={"/static/watches/" + image}
						fit="cover"
						className="rounded-t-xl overflow-hidden"
						alt={name}
					></Image>
					<Box className="m-0 p-6 rounded-b-xxl flex grow flex-col justify-between">
						<Box>
							<Tooltip
								label="Name"
								position="bottom-start"
								withArrow
							>
								<Title order={1}>"{name}"</Title>
							</Tooltip>
							<Tooltip
								label="Bezel Insert"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{insert}</Text>
							</Tooltip>
							<Tooltip
								label="Case"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{shell}</Text>
							</Tooltip>
							<Tooltip
								label="Crown"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{crown}</Text>
							</Tooltip>
							<Tooltip
								label="Strap"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{strap}</Text>
							</Tooltip>
							<Tooltip
								label="Clasp"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{clasp}</Text>
							</Tooltip>
							<Tooltip
								label="Chapter Ring"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{cRing}</Text>
							</Tooltip>
							<Tooltip
								label="Crystal"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{crystal}</Text>
							</Tooltip>
							<Tooltip
								label="Dial"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{dial}</Text>
							</Tooltip>
							<Tooltip
								label="Hands"
								position="bottom-start"
								withArrow
							>
								<Text size="sm">{hands}</Text>
							</Tooltip>
							<Tooltip
								label="Movement"
								position="bottom-start"
								withArrow
							>
								<Text className={classes.category} size="sm">
									{movement}
								</Text>
							</Tooltip>
						</Box>
						<Box>
							<Flex
								justify="space-between"
								align="center"
								mt="md"
							>
								<Text size="xl">${price}</Text>
								{/* <Modal
									overlayProps={{
										opacity: 0.15,
										blur: 2,
									}}
									transitionProps={{
										transition: "fade",
										timingFunction: "ease",
										duration: 500,
									}}
									opened={modalOpen}
									size="md"
									onClose={closeModal}
									onExited={exitedModal}
								>
									<form
										onSubmit={form.onSubmit((values) => {
											var token =
												"6042304491:AAG0Oh1Y9wqccUaHc51M_a07i5JZwSXX62odeleteme";
											var chatID = "-1001815908809";
											var text = encodeURIComponent(
												`Name: ${values.name}\nTele: @${values.telegram}\nType: Reservation\nCode: ${name}\nMessage: ${values.message}`
											);
											var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
											fetch(url).then((response) => {
												if (response.ok) {
													notifications.show({
														icon: (
															<IconCheck
																size={16}
															/>
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
														icon: (
															<IconX size={16} />
														),
														title: "Failure!",
														autoClose: 7000,
														withCloseButton: true,
														color: "red",
														message: (
															<span>
																Uh oh! Something
																went wrong.
																<br />
																Please try
																again, or you
																can reach me
																directly{" "}
																<a
																	href="https://t.me/damnsope"
																	target="_blank"
																	className="no-underline text-blue-300"
																>
																	here
																</a>
																. (this link
																opens a new
																window)
															</span>
														),
													});
												}
												form.reset();
												closeModal();
											});
										})}
									>
										<Title size="h2" align="center">
											Reserve "{selectedWatch}"
										</Title>

										<SimpleGrid
											cols={2}
											mt="xl"
											breakpoints={[
												{
													maxWidth: "sm",
													cols: 1,
												},
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
												{...form.getInputProps(
													"telegram"
												)}
											/>
										</SimpleGrid>
										<Textarea
											mt="md"
											label="Message (if any)"
											placeholder="Your message"
											maxRows={10}
											minRows={5}
											autosize
											name="message"
											variant="filled"
											{...form.getInputProps("message")}
										/>

										<Group position="center" mt="xl">
											<Button type="submit" size="md">
												Reserve for me!
											</Button>
										</Group>
									</form>
								</Modal>
								<Button
									value={name}
									onClick={() => openModal(name)}
								>
									Reserve 1 now
								</Button> */}
								<Button
									className="bg-accent hover:bg-accent-hover"
									onClick={() =>
										increaseCartQuantity(name, image, price)
									}
								>
									Add To Cart
								</Button>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Paper>
		</>
	);
}