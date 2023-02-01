import { Container } from "@mantine/core";
import Head from "next/head";
import Watch from "@/pages/watch.js";

export default function Shop() {
	const watches = {
		"001": {
			name: "001",
			image: "001.png",
			movement: "NH35A",
			dial: "Seiko Marine Master",
			hands: "Mercedes hands",
			cRing: "nil",
			insert: "Embossed Black Submariner bezel insert",
			shell: "Standard 316L Stainless Steel Oyster Case",
			crown: "Standard 316L Stainless Steel Crown",
			strap: "Rubber oyster strap",
			clasp: "316L clasp, middle gloss finish, sides brushed finish",
		},
		"002": {
			name: "002",
			image: "001" + ".png",
			movement: "NH36A",
			dial: "Seiko Marine Master",
			hands: "Mercedes hands",
			cRing: "nil",
			insert: "Embossed Black Submariner bezel insert",
			shell: "Standard 316L Stainless Steel Oyster Case",
			crown: "Standard 316L Stainless Steel Crown",
			strap: "Rubber oyster strap",
			clasp: "316L clasp, middle gloss finish, sides brushed finish",
		},
		"003": {
			name: "003",
			image: "003" + ".png",
			movement: "NH35A",
			dial: "Seiko Marine Master",
			hands: "Mercedes hands",
			cRing: "nil",
			insert: "Embossed Black Submariner bezel insert",
			shell: "Standard 316L Stainless Steel Oyster Case",
			crown: "Standard 316L Stainless Steel Crown",
			strap: "Rubber oyster strap",
			clasp: "316L clasp, middle gloss finish, sides brushed finish",
		},
	};
	return (
		<>
			<Head>
				<title>Shop</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container
				my="xl"
				sx={{ display: "flex", direction: "row", justifyContent: "center" }}
			>
				<Watch />
				{/* <Watch {...watches["001"]} /> */}
			</Container>
		</>
	);
}
