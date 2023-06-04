import Head from "next/head";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import {
	MediaQuery,
	createStyles,
	Container,
	Button,
	Group,
	Title,
	Text,
	Overlay,
} from "@mantine/core";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const useStyles = createStyles((theme) => ({
	title: {
		color: "white",
		fontSize: 48,
	},
	titleMobile: {
		color: "white",
		fontSize: 32,
	},
	image: {
		position: "relative",
		backgroundImage: "url(bg2-2.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "100vh",
		zIndex: "0",
	},
	outer: {
		position: "relative",
		zIndex: "1",
		display: "flex",
		justifyContent: "flex-start",
		minHeight: "90vh",
		alignItems: "center",
		textAlign: "left",
		maxWidth: "80rem",
	},
	inner: {
		display: "flex",
		flexDirection: "column",
		maxWidth: "40rem",
		marginLeft: 0,
	},
	text: {
		maxWidth: "500px",
	},
}));

export default function Home() {
	const { classes } = useStyles();
	return (
		<>
			<Head>
				<title>Seiko Couturier</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={classes.image}>
				<Overlay color="#000" opacity={0.65} zIndex={0} />
				<Container className={classes.outer}>
					<Container className={classes.inner}>
						<MediaQuery
							largerThan="md"
							styles={{ display: "none" }}
						>
							<Title
								tt="uppercase"
								className={classes.titleMobile}
							>
								Affordable luxury, handcrafted to perfection
							</Title>
						</MediaQuery>
						<MediaQuery
							smallerThan="md"
							styles={{ display: "none" }}
						>
							<Title tt="uppercase" className={classes.title}>
								Affordable luxury, handcrafted to perfection
							</Title>
						</MediaQuery>
						<Text py="lg" size="lg" className={classes.text}>
							Welcome to our world of custom Seiko mods.
							<br></br> We take pride in building high-quality,
							exclusive timepieces using only the finest
							aftermarket parts and Seiko movements.
						</Text>
						<Group spacing="xl" sx={{ zIndex: "100" }}>
							<Link href="/shop">
								<Button
									variant="filled"
									radius="xl"
									uppercase
									rightIcon={<IconChevronRight size={18} />}
								>
									<Text size="xs">buy now</Text>
								</Button>
							</Link>
							<Link href="/about">
								<Button variant="outline" radius="xl" uppercase>
									<Text size="xs">read more</Text>
								</Button>
							</Link>
						</Group>
					</Container>
				</Container>
			</div>
		</>
	);
}
