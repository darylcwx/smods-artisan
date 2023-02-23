import {
	createStyles,
	Paper,
	Text,
	Title,
	Flex,
	SimpleGrid,
	Container,
	Tooltip,
	Button,
	Modal,
	TextInput,
	Textarea,
	Group,
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
	const { classes } = useStyles();
	const [modal, openModal] = useState(false);
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
			image: "001.png",
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
		// {
		// 	name: "002",
		// 	image: "001" + ".png",
		// 	insert: "Embossed Black Submariner",
		// 	shell: "Standard 316L oyster case",
		// 	crown: "Standard 316L crown",
		// 	strap: "Rubber oyster strap",
		// 	clasp: "Standard 316L clasp, center gloss finish",
		// 	crystal: "Flat sapphire",
		// 	cRing: "",
		// 	dial: "Seiko Marine Master",
		// 	hands: "Mercedes hands",
		// 	movement: "NH36A",
		// },
		{
			name: "003",
			image: "003" + ".png",

			insert: "Black Submariner w additional decals",
			shell: "Standard 316L oyster case",
			crown: "Standard 316L crown",
			strap: "Standard 316L oyster strap",
			clasp: "Standard 316L clasp, center gloss finish",
			crystal: "Flat sapphire",
			cRing: "",
			dial: "Seiko slanted double bars in blue",
			hands: "Sword hands",
			movement: "NH35A",
		},
		{
			name: "301",
			image: "301" + ".png",
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
			name: "701",
			image: "701" + ".png",
			insert: "Embossed Black Submariner",
			shell: "SKX007 case in black",
			crown: "Seiko crown",
			strap: "Rubber",
			clasp: "Buckle",
			crystal: "Double domed with blue AR",
			cRing: "Red + Black",
			dial: "Stealth Seiko Day Date",
			hands: "Syringe hands",
			movement: "NH36A",
		},
	];
	return (
		<>
			<SimpleGrid
				cols={2}
				breakpoints={[
					{
						maxWidth: "xl",
						cols: 2,
						spacing: "xl",
						verticalSpacing: "xl",
					},
					{
						maxWidth: "md",
						cols: 1,
						spacing: "md",
						verticalSpacing: "xl",
					},
				]}
			>
				{watches.map((watch) => (
					<Paper
						shadow="xl"
						p="xl"
						radius="lg"
						sx={{
							backgroundImage: `url(/watches/${watch.image})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center -400%",
							height: 600,
							width: 400,
						}}
						className={classes.card}
						withBorder
						key={watch.name}
					>
						<Flex
							direction="column"
							justify="flex-end"
							sx={{ height: "100%" }}
						>
							<Tooltip label="Name" position="left" withArrow>
								<Title order={1}>"{watch.name}"</Title>
							</Tooltip>
							<Tooltip
								label="Bezel Insert"
								position="left"
								withArrow
							>
								<Text size="sm">{watch.insert}</Text>
							</Tooltip>
							<Tooltip label="Case" position="left" withArrow>
								<Text size="sm">{watch.shell}</Text>
							</Tooltip>

							<Tooltip label="Crown" position="left" withArrow>
								<Text size="sm">{watch.crown}</Text>
							</Tooltip>
							<Tooltip label="Strap" position="left" withArrow>
								<Text size="sm">{watch.strap}</Text>
							</Tooltip>
							<Tooltip label="Clasp" position="left" withArrow>
								<Text size="sm">{watch.clasp}</Text>
							</Tooltip>

							<Tooltip
								label="Chapter Ring"
								position="left"
								withArrow
							>
								<Text size="sm">{watch.cRing}</Text>
							</Tooltip>
							<Tooltip label="Crystal" position="left" withArrow>
								<Text size="sm">{watch.crystal}</Text>
							</Tooltip>
							<Tooltip label="Dial" position="left" withArrow>
								<Text size="sm">{watch.dial}</Text>
							</Tooltip>
							<Tooltip label="Hands" position="left" withArrow>
								<Text size="sm">{watch.hands}</Text>
							</Tooltip>
							<Tooltip label="Movement" position="left" withArrow>
								<Text className={classes.category} size="sm">
									{watch.movement}
								</Text>
							</Tooltip>
							<Flex justify="flex-end">
								<Modal
									overlayOpacity={0.6}
									overlayBlur={2}
									transition="pop"
									exitTransitionDuration={300}
									opened={modal}
									size="md"
									onClose={() => openModal(false)}
								>
									<form
										onSubmit={form.onSubmit((values) => {
											var token =
												"6042304491:AAG0Oh1Y9wqccUaHc51M_a07i5JZwSXX62o";
											var chatID = "-1001815908809";

											var text = encodeURIComponent(
												`Name: ${values.name}\nTele: @${values.telegram}\nType: Reservation\nCode: ${watch.name}\nMessage: ${values.message}`
											);

											var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
											let api = new XMLHttpRequest();
											api.open("GET", url, true);
											api.send();
											showNotification({
												icon: <IconCheck size={16} />,
												title: "Success!",
												autoClose: 7000,
												message:
													"I've received a notification with regards to your message.\n\nI'll get back to you shortly!",
											});
											form.reset();
											openModal(false);
										})}
									>
										<Title size="h2" align="center">
											Reserve "{watch.name}"
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
									value={watch.name}
									onClick={() => openModal(true)}
								>
									Reserve 1 now
								</Button>
							</Flex>
						</Flex>
					</Paper>
				))}
			</SimpleGrid>
		</>
	);
}
