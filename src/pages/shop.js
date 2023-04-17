import { useState, useEffect } from "react";
import {
	createStyles,
	Container,
	Text,
	Button,
	Flex,
	Popover,
	NativeSelect,
	Image,
	List,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import Head from "next/head";
import Watch from "@/pages/watch.js";
import { useRouter } from "next/router";
import { nprogress, NavigationProgress } from "@mantine/nprogress";

const useStyles = createStyles((theme) => ({
	contact: {
		textDecoration: "none",
	},
	underline: {
		textDecoration: "underline",
	},
}));

export default function Shop() {
	const { classes } = useStyles();
	const router = useRouter();
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
					therefore I have limited photos. The watches displayed here
					are those personally built so far. This means it doesn't
					include watches that I{" "}
					<span className={classes.underline}>can</span> build.
				</Text>

				<Text ta="center" c="dimmed" mb="xl">
					In the near future, there will be more models — seikoNauts,
					seikOaks, open balance wheels, skeleton dials, and female
					models personally made and thereafter displayed here.
				</Text>
				<Flex
					justify="center"
					align="center"
					direction="row"
					gap="md"
					wrap="wrap"
				>
					<Popover
						width={450}
						position="bottom"
						withArrow
						shadow="md"
					>
						<Popover.Target>
							<Button variant="outline" size="sm">
								That's all...?
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="md">
								As mentioned above, the watches displayed here
								are only those personally built so far.
								Depending on the intricacy, parts involved, and
								availability of said parts, I might be able to
								build them.
								<br></br>
								<br></br>
								Feel free to check these links for design
								inspiration. I might be able to build a watch
								you like from any of these other modders.
								<List>
									<List.Item>
										<Link
											href="https://www.instagram.com/seikomods"
											target="_blank"
										>
											@seikomods
										</Link>
									</List.Item>
									<List.Item>
										<Link
											href="https://www.instagram.com/bbmod_france/"
											target="_blank"
										>
											@bbmod_france
										</Link>
									</List.Item>
									<List.Item>
										<Link
											href="https://www.instagram.com/bbmod_watches"
											target="_blank"
										>
											@bbmod_watches
										</Link>
									</List.Item>
									<List.Item>
										<Link
											href="https://www.instagram.com/jack_hypoxia/?hl=en"
											target="_blank"
										>
											@jack_hypoxia
										</Link>
									</List.Item>
								</List>
							</Text>
						</Popover.Dropdown>
					</Popover>
					<Popover
						width={450}
						position="bottom"
						withArrow
						shadow="md"
					>
						<Popover.Target>
							<Button variant="outline" size="sm">
								Ladies version?
							</Button>
						</Popover.Target>

						<Popover.Dropdown>
							<Text size="md">
								As stated, they are not displayed here (yet) but
								I am able to build them.
								<br></br>
								<br></br>
								Yes! It's a WIP right now but it's essentially
								the same style with 36mm cases instead. Stay
								tuned for a 36mm jubilee DateJust by July.
								<br></br>
								<br></br>
								Ladies' watches will be priced at $239.
							</Text>
						</Popover.Dropdown>
					</Popover>
					<Popover
						width={450}
						position="bottom"
						withArrow
						shadow="md"
					>
						<Popover.Target>
							<Button variant="outline" size="sm">
								GMT?
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="md">
								As stated, they are not displayed here (yet) but
								I am able to build them.
								<br></br>
								<br></br>
								For GMT models, I offer the option of having an
								actual GMT movement with the fourth GMT hand
								(other modders primarily only do the GMT bezel
								insert without the GMT hand nor the function).
								<br></br>
								<br></br>
								However, if you'd like just the GMT bezel with 3
								hands, that's fine too!
								<br></br>
								<br></br>
								Functional GMTs are priced at $299.
							</Text>
						</Popover.Dropdown>
					</Popover>
					<Popover
						width={450}
						position="bottom"
						withArrow
						shadow="md"
					>
						<Popover.Target>
							<Button variant="outline" size="sm">
								Daytona/Chronographs?
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="md">
								I'm currently still exploring the intricacies of
								a chronograph movement. Stay tuned for more!
								<br></br>
								<br></br>
								{/* <br></br><br></br> */}
								Functional chronographs will be priced at $349.
							</Text>
						</Popover.Dropdown>
					</Popover>
					<Popover
						width={450}
						position="bottom"
						withArrow
						shadow="md"
					>
						<Popover.Target>
							<Button variant="outline" size="sm">
								What am I looking at?
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="md">
								Each watch belongs to a certain category seen in
								the first number of its code. Watches starting
								with 'R' are repair jobs, whereby the components
								listed are the only parts <b>I personally </b>{" "}
								replaced or changed.
								<br></br>
								<br></br>Details of each watch will be displayed
								in their respective cards in the following
								order:{" "}
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
