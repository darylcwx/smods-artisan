import {
	createStyles,
	Paper,
	Text,
	Title,
	Flex,
	SimpleGrid,
	Container,
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
import { IconCheck, IconAt } from "@tabler/icons-react";
import React from "react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
	card: {},
	category: {},
	title: {},
}));
export default function Watch(watch) {
	const size = "28px";
	const { classes } = useStyles();
	const [selectedWatch, setSelectedWatch] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = (watch) => {
		setSelectedWatch(watch.name);
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};
	const exitedModal = () => {
		setSelectedWatch(null);
	};
	const form = useForm({
		initialValues: {
			name: "",
			telegram: "",
			message: "",
		},
		validate: {
			name: (value) =>
				value.trim().length < 1 ? "Please input a name." : null,
			telegram: (value) =>
				/^[A-Za-z0-9]+$/.test(value) && value.trim().length >= 5
					? null
					: "Please enter a valid telegram handle.",
		},
	});
	const watches = [
		{
			name: "001",
			price: "269",
			image: "001.jpg",
			insert: "Embossed Black Submariner",
			shell: "Standard 316L oyster case",
			crown: "Standard 316L crown",
			strap: "Rubber oyster strap",
			clasp: "Standard 316L clasp, center gloss finish",
			crystal: "Flat sapphire",
			cRing: "",
			dial: "Seiko Marine Master",
			hands: "Mercedes hands",
			movement: "NH35A",
		},
		{
			name: "003",
			price: "269",
			image: "003" + ".png",
			insert: "Black Submariner w additional decals",
			shell: "Standard 316L oyster case",
			crown: "Standard 316L crown",
			strap: "Standard 316L oyster strap",
			clasp: "Standard 316L clasp",
			crystal: "Flat sapphire crystal",
			cRing: "Built-in rehaut",
			dial: "Seiko slanted double bars in blue",
			hands: "Sword hands",
			movement: "NH35A with white date wheel",
		},
		{
			name: "301",
			price: "269",
			image: "301" + ".JPG",
			insert: "",
			shell: "Case resembling Patek Aquanaut",
			crown: "Crown resembling Patek Aquanaut",
			strap: "Strap resembling Patek Aquanaut",
			clasp: "Butterfly clasp",
			crystal: "Flat sapphire",
			cRing: "",
			dial: "Seiko dial resembling Patek Aquanaut w Date",
			hands: "Sword hands",
			movement: "NH35A",
		},
		{
			name: "601",
			price: "269",
			image: "601.jpg",
			insert: "Ceramic Black-Brown 12 hour GMT bezel insert",
			shell: "Standard 316L oyster case",
			crown: "Seiko gold crown",
			strap: "Silver and gold jubilee strap",
			clasp: "Silver and gold seiko clasp",
			crystal: "Flat sapphire crystal",
			cRing: "Built-in rehaut",
			dial: "Seiko Automatic Diver's",
			hands: "Syringe hands",
			movement: "NH35A with black date wheel",
		},
		{
			name: "701",
			price: "269",
			image: "701" + ".JPG",
			insert: "Embossed Black Submariner",
			shell: "SKX007 case in black",
			crown: "Seiko crown",
			strap: "Rubber strap",
			clasp: "Buckle",
			crystal: "Double domed with blue AR",
			cRing: "wHITE + Black",
			dial: "Off-White stealth Seiko Day Date",
			hands: "Black mercedes hands",
			movement: "NH36A",
		},
		{
			name: "R001 (NFS)",
			price: " -",
			image: "R001" + ".JPG",
			insert: "Embossed Black Submariner",
			shell: "SKX007 case in black",
			strap: "Rubber strap",
			clasp: "Rose gold clasp",
		},
	];
	return (
		<>
			<SimpleGrid
				cols={3}
				spacing={size}
				verticalSpacing={size}
				breakpoints={[
					{
						maxWidth: "lg",
						cols: 2,
						spacing: { size },
						verticalSpacing: { size },
					},
					{
						maxWidth: "md",
						cols: 1,
						verticalSpacing: { size },
					},
				]}
			>
				{watches.map((watch) => (
					<Paper
						shadow="xl"
						p="0"
						radius="lg"
						className={classes.card}
						withBorder
						key={watch.name}
					>
						<Flex
							direction="column"
							justify="flex-start"
							sx={{ height: "100%" }}
						>
							<Image
								src={"/watches/" + watch.image}
								fit="cover"
								sx={{
									borderTopLeftRadius: "12px",
									borderTopRightRadius: "12px",
									overflow: "hidden",
									background: "#faf0e6",
								}}
							></Image>
							<Box
								ma="0"
								p="xl"
								sx={{
									backgroundColor: "#212121",
									borderBottomLeftRadius: "12px",
									borderBottomRightRadius: "12px",
									flexGrow: "1",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Tooltip
										label="Name"
										position="bottom-start"
										withArrow
									>
										<Title order={1}>"{watch.name}"</Title>
									</Tooltip>
									<Tooltip
										label="Bezel Insert"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.insert}</Text>
									</Tooltip>
									<Tooltip
										label="Case"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.shell}</Text>
									</Tooltip>
									<Tooltip
										label="Crown"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.crown}</Text>
									</Tooltip>
									<Tooltip
										label="Strap"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.strap}</Text>
									</Tooltip>
									<Tooltip
										label="Clasp"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.clasp}</Text>
									</Tooltip>
									<Tooltip
										label="Chapter Ring"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.cRing}</Text>
									</Tooltip>
									<Tooltip
										label="Crystal"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.crystal}</Text>
									</Tooltip>
									<Tooltip
										label="Dial"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.dial}</Text>
									</Tooltip>
									<Tooltip
										label="Hands"
										position="bottom-start"
										withArrow
									>
										<Text size="sm">{watch.hands}</Text>
									</Tooltip>
									<Tooltip
										label="Movement"
										position="bottom-start"
										withArrow
									>
										<Text
											className={classes.category}
											size="sm"
										>
											{watch.movement}
										</Text>
									</Tooltip>
								</Box>
								<Box>
									<Flex
										justify="space-between"
										align="center"
										mt="md"
									>
										<Text size="xl">${watch.price}</Text>
										<Modal
											overlayProps={{
												opacity: 0.15,
												blur: 2,
											}}
											transitionProps={{
												transition: "fade",
												timingFunction: "ease",
												duration: 100,
											}}
											opened={modalOpen}
											size="md"
											onClose={closeModal}
											onExited={exitedModal}
										>
											<form
												onSubmit={form.onSubmit(
													(values) => {
														var token =
															"6042304491:AAG0Oh1Y9wqccUaHc51M_a07i5JZwSXX62o";
														var chatID =
															"-1001815908809";

														var text =
															encodeURIComponent(
																`Name: ${values.name}\nTele: @${values.telegram}\nType: Reservation\nCode: ${watch.name}\nMessage: ${values.message}`
															);

														var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
														let api =
															new XMLHttpRequest();
														api.open(
															"GET",
															url,
															true
														);
														api.send();
														showNotification({
															icon: (
																<IconCheck
																	size={16}
																/>
															),
															title: "Success!",
															autoClose: 7000,
															message:
																"I've received a notification with regards to your message.\n\nI'll get back to you shortly!",
														});
														form.reset();
														openModal(false);
													}
												)}
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
														{...form.getInputProps(
															"name"
														)}
													/>
													<TextInput
														label="Telegram"
														placeholder="Your telegram handle"
														name="telegram"
														variant="filled"
														icon={
															<IconAt size={16} />
														}
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
													{...form.getInputProps(
														"message"
													)}
												/>

												<Group
													position="center"
													mt="xl"
												>
													<Button
														type="submit"
														size="md"
													>
														Reserve for me!
													</Button>
												</Group>
											</form>
										</Modal>
										<Button
											value={watch.name}
											onClick={() => openModal(watch)}
										>
											Reserve 1 now
										</Button>
									</Flex>
								</Box>
							</Box>
						</Flex>
					</Paper>
				))}
			</SimpleGrid>
		</>
	);
}
