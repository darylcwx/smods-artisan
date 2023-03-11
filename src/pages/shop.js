import { useState, useEffect } from "react";
import {
	Container,
	Text,
	Button,
	Flex,
	Popover,
	NativeSelect,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import Head from "next/head";
import Watch from "@/pages/watch.js";
import { useRouter } from "next/router";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
export default function Shop() {
	const router = useRouter();
	const [opened, { close, open }] = useDisclosure(false);
	const [scroll, setScrollPosition] = useState(0);
	useEffect(() => {
		const handleScroll = (event) => {
			setScrollPosition(window.scrollY);
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const percentage = window.scrollY / totalHeight;
			nprogress.set(percentage * 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	var q = router.query;
	return (
		<>
			<Head>
				<title>Shop</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavigationProgress color="dark.0" />
			<Container py="xl">
				<Text ta="center" fw={500}>
					Please note that this business is in it's early stage and
					therefore I have limited photos. With more orders, rest
					assured higher quality photos will be taken.
				</Text>

				<Text ta="center" c="dimmed" mb="xl">
					In the near future, there will be more models — seikoNauts,
					seikOaks, open balance wheels, skeleton dials, and female
					models personally made and thereafter displayed here.
				</Text>

				<Text ta="center">
					For GMT models, I offer the option of having an actual GMT
					movement with the fourth GMT hand (others simply do the GMT
					bezel insert)
				</Text>
				<Flex justify="center" mt="xl">
					<Popover
						width={450}
						position="bottom"
						withArrow
						shadow="md"
						opened={opened}
					>
						<Popover.Target>
							<Button
								onMouseEnter={open}
								onMouseLeave={close}
								variant="outline"
								size="sm"
								sx={{ width: "250px" }}
							>
								What am I looking at?
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="md">
								Details of each watch will be displayed in their
								respective cards in the following order:{" "}
								<ol>
									<li>Bezel Insert</li>
									<li>Cases</li>
									<li>Crown</li>
									<li>Strap</li>
									<li>Clasp</li>
									<li>Crystal</li>
									<li>Chapter Ring</li>
									<li>Dial</li>
									<li>Hands</li>
									<li>Movement</li>
								</ol>
								You can also hover over the details to see which
								watch part it refers to.
							</Text>
						</Popover.Dropdown>
					</Popover>
				</Flex>
			</Container>

			{/* <Container
				my="md"
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<NativeSelect
					id="filter"
					data={[
						"Bezel Inserts",
						"Chapter Rings",
						"Cases",
						"Crowns",
						"Hands",
						"Dials",
						"Movements",
						"Straps",
						"Clasps",
					]}
					label="Filter by"
					value={value}
					onChange={(event) => setValue(event.currentTarget.value)}
				></NativeSelect>
			</Container> */}
			<Container size="xl">
				<Watch />
				{/* <Watch {...watches["001"]} /> */}
			</Container>
		</>
	);
}
