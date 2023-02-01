import {
	createStyles,
	Paper,
	Text,
	Title,
	Flex,
	SimpleGrid,
	Container,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
	card: {},
	category: {},
	title: {},
}));
export default function Watch(watch) {
	const { classes } = useStyles();
	// let image = watch.image;
	// let movement = watch.movement;
	// let dial = watch.dial;
	// let hands = watch.hands;
	// let cRing = watch.cRing;
	// let insert = watch.insert;
	// let shell = watch.shell;
	// let crown = watch.crown;
	// let strap = watch.strap;
	// let clasp = watch.clasp;
	const watches = [
		{
			name: "001",
			image: "001.png",
			movement: "NH35A",
			dial: "Seiko Marine Master",
			hands: "Mercedes hands",
			cRing: "nil",
			insert: "Embossed Black Submariner bezel insert",
			shell: "Standard 316L oyster case",
			crown: "Standard 316L crown",
			strap: "Rubber oyster strap",
			clasp: "Standard 316L clasp, middle gloss finish, sides brushed finish",
		},
		{
			name: "002",
			image: "001" + ".png",
			movement: "NH36A",
			dial: "Seiko Marine Master",
			hands: "Mercedes hands",
			cRing: "nil",
			insert: "Embossed Black Submariner bezel insert",
			shell: "Standard 316L oyster case",
			crown: "Standard 316L crown",
			strap: "Rubber oyster strap",
			clasp: "Standard 316L clasp, middle gloss finish, sides brushed finish",
		},
		{
			name: "003",
			image: "003" + ".png",
			movement: "NH35A",
			dial: "Seiko slanted double bars",
			hands: "Sword hands",
			cRing: "nil",
			insert: "Black Submariner w additional decals",
			shell: "Standard 316L oyster case",
			crown: "Standard 316L crown",
			strap: "Standard 316L oyster strap",
			clasp: "Standard 316L clasp, middle gloss finish, sides brushed finish",
		},
	];
	return (
		<>
			<SimpleGrid
				cols={2}
				breakpoints={[
					{ maxWidth: "xl", cols: 2, spacing: "xl", verticalSpacing: "xl" },
					{ maxWidth: "md", cols: 1, spacing: "md", verticalSpacing: "xl" },
				]}
			>
				{watches.map((watch) => (
					<Paper
						shadow="xl"
						p="xl"
						radius="lg"
						sx={{
							backgroundImage: `url(/watches/${watch.image})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center -400%",
							height: 600,
							maxWidth: 400,
						}}
						className={classes.card}
						withBorder
					>
						<Flex direction="column" justify="flex-end" sx={{ height: "100%" }}>
							<Title order={3}>"{watch.name}"</Title>
							<Text className={classes.category} size="sm">
								{watch.movement}
							</Text>

							<Text size="sm">{watch.shell}</Text>
							<Text size="sm">{watch.dial}</Text>
							<Text size="sm">{watch.hands}</Text>
							<Text size="sm">{watch.cRing}</Text>
							<Text size="sm">{watch.insert}</Text>
							<Text size="sm">{watch.crown}</Text>
							<Text size="sm">{watch.strap}</Text>
							<Text size="sm">{watch.clasp}</Text>
						</Flex>
					</Paper>
				))}
			</SimpleGrid>
		</>
	);
}
