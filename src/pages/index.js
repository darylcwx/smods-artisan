import Head from "next/head";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import {
	createStyles,
	Container,
	Button,
	Group,
	Title,
	Text,
	Overlay,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	title: {
		color: "white",
		fontSize: 50,
		maxWidth: 600,
	},
	image: {
		position: "relative",
		backgroundImage: "url(bg2-2.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		minHeight: "calc( 100vh )",
		paddingBottom: 150,
		zIndex: "0",
	},
	inner: {
		position: "relative",
		zIndex: "1",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		minHeight: 700,
	},
	text: {
		maxWidth: 500,
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
			<div className={classes.image} >
				<Overlay color="#000" opacity={0.65} zIndex={0} />
				<Container className={classes.inner}>
					<Title tt="uppercase" className={classes.title}>
						Affordable luxury, handcrafted to perfection
					</Title>
					<Text py="lg" size="xl" className={classes.text}>
						Welcome to our world of custom Seiko mods.
						<br></br> We take pride in building high-quality,
						exclusive timepieces using only the finest aftermarket
						parts and Seiko movements.
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
			</div>
		</>
	);
}
