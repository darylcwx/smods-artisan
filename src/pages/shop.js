import { Container } from "@mantine/core";
import Head from "next/head";
import Watch from "@/pages/watch.js";

export default function Shop() {
	const products = {
		"001": {
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
			<Container>
				<Watch {...products} />
			</Container>
		</>
	);
}
