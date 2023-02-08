import { useState } from "react";
import { Container, Text, NativeSelect } from "@mantine/core";
import Head from "next/head";
import Watch from "@/pages/watch.js";
import { useRouter } from "next/router";

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
	const router = useRouter();
	var q = router.query;
	const [value, setValue] = useState("");

	return (
		<>
			<Head>
				<title>Shop</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container my="xl" sx={{ maxWidth: 700 }}>
				<Text ta="center" fw={500}>
					Please note that this business is in it's early stage and therefore I
					have limited photos.
				</Text>
				<Text ta="center" c="dimmed">
					In the near future, there will be more models — seikoNauts, seikOaks,
					open balance wheels, skeleton dials, and female models personally made
					and thereafter displayed here.
				</Text>
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
			<Container
				my="md"
				sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
			>
				<Watch />
				{/* <Watch {...watches["001"]} /> */}
			</Container>
		</>
	);
}
