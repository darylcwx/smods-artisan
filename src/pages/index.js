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
	Image,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({}));

export default function Home() {
	const { classes } = useStyles();
	return (
		<>
			<Head>
				<title>SA</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Image
				src={"/static/background/bg2-2.jpg"}
				fit="cover"
				height="calc(100vh - 60px)"
				className="absolute bg-center"
			/>
			<Overlay color="#000" opacity={0.65} className="z-0" />
			<Container
				className="absolute flex flex-col justify-center items-center sm:items-start left-0 right-0"
				sx={{
					height: "calc(100vh - 60px)",
				}}
				size="md"
				px="xl"
			>
				<Title order={1} className="w-full sm:w-3/4 text-white">
					Welcome to SMods Artisan.
				</Title>
				<Text size="lg" className="py-3 w-full sm:w-3/4">
					We take pride in handcrafting high-quality, exclusive yet
					affordable timepieces using only the finest aftermarket
					parts.
				</Text>
				<Group
					spacing="xl"
					sx={{ zIndex: "100" }}
					className="w-full sm:w-3/4 justify-center sm:justify-normal"
				>
					<Link href="/shop">
						<Button
							uppercase
							rightIcon={<IconChevronRight size={18} />}
							className="bg-accent hover:bg-accent-hover rounded-full"
						>
							<Text size="xs">buy now</Text>
						</Button>
					</Link>
					<Link href="/about">
						<Button
							uppercase
							variant="outline"
							className="text-accent border-accent hover:bg-accent-hover hover:text-white hover:border-accent-hover rounded-full"
						>
							<Text size="xs">read more</Text>
						</Button>
					</Link>
				</Group>
			</Container>
		</>
	);
}
