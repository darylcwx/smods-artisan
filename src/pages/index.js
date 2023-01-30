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
		fontSize: 60,
		maxWidth: 500,
	},
	image: {
		position: "relative",
		backgroundImage: "url(bg2-2.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		minHeight: "calc( 100vh - 60px )",
		zIndex: "-2",
	},
	inner: {
		position: "relative",
		zIndex: "1",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		minHeight: 500,
		height: "calc(70vh)",
	},
	text: {
		maxWidth: 450,
	},
}));

export default function Home() {
	const { classes } = useStyles();
	return (
		<>
			<Head>
				<title>Seiko Couturier</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={classes.image}>
				<Overlay color="#000" opacity={0.65} zIndex={-1} />
				<Container className={classes.inner}>
					<Title tt="uppercase" className={classes.title}>
						fk your apple watch
					</Title>
					<Text py="lg" size="xl" className={classes.text}>
						Welcome to our world of custom-made Seiko watches. We take pride in
						building high-quality, exclusive timepieces using only the finest
						aftermarket parts and OEM Seiko movements.
						<br></br>
						<br></br>
						Each watch is carefully assembled to ensure that it meets our high
						standards for quality and reliability. Whether you're looking for a
						unique, one-of-a-kind watch or a personalized timepiece, we have
						something for everyone.
					</Text>
					<Group spacing="xl">
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
