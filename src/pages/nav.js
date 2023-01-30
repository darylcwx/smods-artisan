import { useState } from "react";
import {
	useMantineColorScheme,
	createStyles,
	Burger,
	Group,
	Header,
	Container,
	Transition,
	Paper,
	Modal,
	Button,
	TextInput,
	Textarea,
	SimpleGrid,
	Title,
	Alert,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoonStars, IconCheck, IconAt } from "@tabler/icons-react";
import Link from "next/link";
import { useForm } from "@mantine/form";
import Script from "next/script";
import { showNotification } from "@mantine/notifications";

const useStyles = createStyles((theme) => ({
	root: {
		position: "relative",
		zIndex: 1,
	},
	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},
	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},

		[theme.fn.smallerThan("sm")]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},
	dropdown: {
		position: "absolute",
		top: header_height,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: "hidden",

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
				.color,
		},
	},
	header: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		[theme.fn.smallerThan("sm")]: {
			justifyContent: "start",
		},
		[theme.fn.largerThan("sm")]: {
			justifyContent: "end",
		},
	},
}));

const header_height = 60;

export default function Nav() {
	// const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const [opened, { toggle, close }] = useDisclosure(false);
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

	return (
		<>
			<Header height={header_height} className={classes.root}>
				<Container
					className={classes.header}
					sx={(theme) => ({
						justify: theme.fn.smallerThan("sm") ? "flex-start" : "flex-end",
					})}
				>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size="sm"
					/>

					<Transition transition="scale-y" duration={200} mounted={opened}>
						{(styles) => (
							<Paper className={classes.dropdown} withBorder style={styles}>
								<Link href="/" className={classes.link} onClick={toggle}>
									Home
								</Link>
								<Link href="/shop" className={classes.link} onClick={toggle}>
									Shop
								</Link>
								<Link href="/about" className={classes.link} onClick={toggle}>
									About
								</Link>
								{/* <ActionIcon
								onClick={() => toggleColorScheme()}
								size="lg"
								sx={(theme) => ({
									color:
										theme.colorScheme === "dark"
											? theme.colors.yellow[4]
											: theme.colors.dark[6],
								})}
							>
								{colorScheme === "dark" ? (
									<IconSun size={20} />
								) : (
									<IconMoonStars size={20} />
								)}
							</ActionIcon> */}
							</Paper>
						)}
					</Transition>
					<Group spacing="lg" className={classes.links}>
						<Link href="/" className={classes.link}>
							Home
						</Link>
						<Link href="/shop" className={classes.link}>
							Shop
						</Link>
						<Link href="/about" className={classes.link}>
							About
						</Link>
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
									var token = "6042304491:AAG0Oh1Y9wqccUaHc51M_a07i5JZwSXX62o";
									var chatID = "-1001815908809";

									var text = encodeURIComponent(
										`Name: ${values.name}\nTele: @${values.telegram}\nSubject: ${values.subject}\nMessage: ${values.message}`
									);

									var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
									let api = new XMLHttpRequest();
									// api.open("GET", url, true);
									// api.send();
									showNotification({
										icon: <IconCheck size={16} />,
										title: "Success!",
										autoClose: 7000,
										message:
											"I've received a notification with regards to your message.\n\nI'll get back to you shortly!",
									});
									// form.reset();
									openModal(false);
								})}
							>
								<Title size="h2" align="center">
									Get in touch
								</Title>

								<SimpleGrid
									cols={2}
									mt="xl"
									breakpoints={[{ maxWidth: "sm", cols: 1 }]}
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
									<Button type="submit" size="md">
										Send message
									</Button>
								</Group>
							</form>
						</Modal>
						<Button onClick={() => openModal(true)}>Contact me!</Button>
						{/* <ActionIcon
						className={classes.link}
						onClick={() => toggleColorScheme()}
						size="lg"
					>
						{colorScheme === "dark" ? (
							<IconSun size={20} />
						) : (
							<IconMoonStars size={20} />
						)}
					</ActionIcon> */}
					</Group>
				</Container>
				<Script src="/contact.js" />
			</Header>
		</>
	);
}
