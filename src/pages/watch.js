import { createStyles, Paper, Button, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	card: {},
	category: {},
	title: {},
}));
export default function Watch(products) {
	const { classes } = useStyles();
	let watch = products["001"];
	// look into .map()
	let movement = watch.movement;
	let dial = watch.dial;
	let hands = watch.hands;
	let cRing = watch.cRing;
	let insert = watch.insert;
	let shell = watch.shell;
	let crown = watch.crown;
	let strap = watch.strap;
	let clasp = watch.clasp;

	return (
		<>
			<Paper
				shadow="md"
				p="xl"
				radius="md"
				// sx={{ backgroundImage: `url(${image})` }}
				className={classes.card}
			>
				<div>
					<Text className={classes.category} size="xs">
						{movement}
					</Text>
					<Title order={3}>{clasp}</Title>
				</div>
				<Button variant="white" color="dark">
					Read article
				</Button>
			</Paper>
		</>
	);
}
