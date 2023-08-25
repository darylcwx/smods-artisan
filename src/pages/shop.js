import { useState, useEffect } from "react";
import {
	createStyles,
	Container,
	Text,
	Button,
	Box,
	Popover,
	Select,
	SimpleGrid,
	Image,
	List,
	TextInput,
} from "@mantine/core";
import Link from "next/link";
import Head from "next/head";
import Watch from "@/components/watch.js";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import getAll from "@/pages/api/getAll";
import getPrices from "@/pages/api/getPrices";

const useStyles = createStyles((theme) => ({
	contact: {
		textDecoration: "none",
	},
}));

// SSR
export async function getServerSideProps() {
	const watches = await getAll();
	const pricesData = await getPrices();
	const priceObject = {};
	pricesData.forEach((price) => {
		priceObject[price.name] = price.price;
	});
	for (const watch of watches) {
		watch.price = priceObject[watch.price];
	}
	return {
		props: {
			watches: JSON.parse(JSON.stringify(watches)),
			prices: JSON.parse(JSON.stringify(priceObject)),
		},
	};
}
export default function Shop({ watches, prices }) {
	const { classes } = useStyles();
	const [scroll, setScrollPosition] = useState(0);
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState("");
	const [searchRes, setSearchRes] = useState([]);
	useEffect(() => {
		const handleSearch = async () => {
			await fetch("/api/getBySearch", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(search),
			})
				.then((res) => res.json())
				.then((data) => setSearchRes(data));

			return;
		};
		handleSearch();
	}, [search]);

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
	return (
		<>
			<Head>
				<title>Shop</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/svgs/gold.svg" />
			</Head>
			<NavigationProgress color="dark.0" />
			<Container p="xl" size="md">
				<Text ta="center" fw={500}>
					Please note the watches displayed here are those personally
					built so far. This means it doesn't include watches that I{" "}
					<span className={"underline"}>can</span> build.
				</Text>
				<Text ta="center" c="dimmed" mb="lg">
					In the near future, there will be more models — seikoNauts,
					seikOaks, open balance wheels, skeleton dials, and female
					models personally made and thereafter displayed here.
				</Text>
				<Text ta="center" mb="xl">
					Also, more often than not, I don't get stock orders from
					what is displayed here, so don't be shy, drop me a text to
					discuss what exact parts or the exact watch you'd like! 😀
				</Text>
				<Box className="flex row justify-center items-center gap-2 flex-wrap pb-6">
					<Popover width={450} position="bottom" withArrow>
						<Popover.Target>
							<Button
								variant="outline"
								size="sm"
								className="text-accent border-accent hover:bg-accent/10"
							>
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
					<Popover width={450} position="bottom" withArrow>
						<Popover.Target>
							<Button
								variant="outline"
								size="sm"
								className="text-accent border-accent hover:bg-accent/10"
							>
								Ladies version?
							</Button>
						</Popover.Target>

						<Popover.Dropdown>
							<Text size="md">
								I made my first 36mm watch recently! Check out
								F01 below!
								<br></br>
								<br></br>
								Ladies' watches will be priced at $
								{prices.ladies}.
							</Text>
						</Popover.Dropdown>
					</Popover>
					<Popover width={450} position="bottom" withArrow>
						<Popover.Target>
							<Button
								variant="outline"
								size="sm"
								className="text-accent border-accent hover:bg-accent/10"
							>
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
								hands, that's fine too! It'll be classified as
								part of the normal range at ${prices.regular}.
								<br></br>
								<br></br>
								Functional GMTs are priced at ${prices.gmt}.
							</Text>
						</Popover.Dropdown>
					</Popover>
					<Popover width={450} position="bottom" withArrow>
						<Popover.Target>
							<Button
								variant="outline"
								size="sm"
								className="text-accent border-accent hover:bg-accent/10"
							>
								Daytona/Chronographs?
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="md">
								I'm currently still exploring the intricacies of
								a chronograph movement. Stay tuned for more!
							</Text>
						</Popover.Dropdown>
					</Popover>
					<Popover width={450} position="bottom" withArrow>
						<Popover.Target>
							<Button
								variant="outline"
								size="sm"
								className="text-accent border-accent hover:bg-accent/10"
							>
								What am I looking at?
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<Text size="md">
								Each watch belongs to a certain category seen in
								the first number of its code. Watches starting
								with 'R' are repair jobs, whereby the components
								listed are the only parts <b>I personally </b>
								replaced or changed.
								<br></br>
								<br></br>Details of each watch will be displayed
								in their respective cards in the following
								order:
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
				</Box>
				<Box className="mb-6 flex row justify-end w-full p-3 bg-accent text-white rounded-md">
					{/* <Select placeholder="Filter by" data={[]}></Select> */}
					<Box className=""></Box>
					<Box className="flex items-center">
						<Text pr="sm">Search:</Text>
						<TextInput
							className=""
							onChange={() => setSearch(event.target.value)}
							placeholder="jubilee"
						/>
					</Box>
				</Box>
				<SimpleGrid
					cols={3}
					spacing="xl"
					verticalSpacing="xl"
					breakpoints={[
						{
							maxWidth: "md",
							cols: 2,
							spacing: "xl",
							verticalSpacing: "xl",
						},
						{
							maxWidth: "sm",
							cols: 1,
							verticalSpacing: "xl",
						},
					]}
					className="pb-6"
				>
					{search
						? searchRes.map((watch) => (
								<Watch key={watch.name} {...watch} />
						  ))
						: watches.map((watch) => (
								<Watch key={watch.name} {...watch} />
						  ))}
				</SimpleGrid>
			</Container>
		</>
	);
}
