import { useState, useEffect } from "react";
import {
	createStyles,
	Container,
	Text,
	Button,
	Box,
	Popover,
	NativeSelect,
	SimpleGrid,
	Image,
	List,
} from "@mantine/core";
import Link from "next/link";
import Head from "next/head";
import Watch from "@/components/watch.js";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import priceList from "@/constants/pricelist.js";
const useStyles = createStyles((theme) => ({
	contact: {
		textDecoration: "none",
	},
}));

const watches = [
	{
		name: "001",
		price: priceList.regular,
		image: "001.JPG",
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
		price: priceList.regular,
		image: "003.JPG",
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
		price: priceList.regular,
		image: "301.JPG",
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
		price: priceList.regular,
		image: "601.JPG",
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
		price: priceList.regular,
		image: "701.jpeg",
		insert: "Embossed Black Submariner",
		shell: "SKX007 case in black",
		crown: "Seiko crown",
		strap: "Rubber strap",
		clasp: "Buckle",
		crystal: "Double domed with blue AR",
		cRing: "White + Black",
		dial: "Off-White stealth Seiko Day Date",
		hands: "Black mercedes hands",
		movement: "NH36A",
	},
	{
		name: "F01",
		price: priceList.ladies,
		image: "F01.JPG",
		insert: "Fluted bezel",
		shell: "Standard 316L 36mm oyster case",
		crown: "Standard 316L crown",
		strap: "Standard 316L jubilee strap",
		clasp: "Standard 316L clasp",
		crystal: "Double domed with blue AR",
		cRing: "White + Black",
		dial: "Off-White stealth Seiko Day Date",
		hands: "Black mercedes hands",
		movement: "NH36A",
	},
	{
		name: "R001 (NFS)",
		price: " -",
		image: "R001.jpeg",
		insert: "Embossed Black Submariner",
		shell: "SKX007 case in black",
		strap: "Rubber strap",
		clasp: "Rose gold clasp",
	},
];
export default function Shop() {
	const { classes } = useStyles();
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
								{priceList.ladies}.
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
								part of the normal range at ${priceList.regular}
								.<br></br>
								<br></br>
								Functional GMTs are priced at ${priceList.gmt}.
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
				{/* <Box className="pb-10">
					Filter by:
					<input />
				</Box> */}
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
					{watches.map((watch) => (
						<Watch key={watch} {...watch} />
					))}
				</SimpleGrid>
			</Container>
		</>
	);
}
