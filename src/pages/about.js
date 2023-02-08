import {
	useMantineTheme,
	createStyles,
	Image,
	Accordion,
	Grid,
	Col,
	Container,
	Title,
	List,
	Text,
} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	title: {},

	item: {},
	contact: {
		textDecoration: "none",
	},
}));

export default function Home() {
	const { classes } = useStyles();

	return (
		<>
			<Head>
				<title>About</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container size="sm">
				<Title pt="xl">Hello!</Title>
				<Text pb="xs">
					Welcome to our world of custom-made Seiko watches. I take pride in
					building high-quality, exclusive timepieces using only the finest
					aftermarket parts and OEM Seiko movements.
				</Text>
				<Text pb="xl">
					Each watch is carefully assembled to ensure that it meets high
					standards for quality and reliability. Whether you're looking for a
					template or a unique and personalized timepiece, we have something for
					everyone.
				</Text>
				<Title pt="xl">History</Title>
				<Text pb="xs">
					My journey as a watchmaker began as a hobby, crafting unique
					timepieces for family and friends. The positive response I received to
					my work encouraged me to explore the opportunity to bring my passion
					for watchmaking to a wider audience.
				</Text>
				<Text pb="xl">
					Driven by a desire to offer high-quality, custom-made watches at an
					affordable price, I decided to specialize in the creation of
					one-of-a-kind timepieces for individuals seeking a truly personalized
					accessory.
				</Text>
				<Grid id="faq-grid" py="xl">
					<Col span={12} sm={6}>
						<Image
							src="watches/311.jpg"
							alt="SeikoNaut with Rose Gold details"
						></Image>
					</Col>
					<Col span={12} sm={6}>
						<Title order={2} px="sm" pb="sm">
							Frequently Asked Questions
						</Title>

						<Accordion
							chevronPosition="right"
							defaultValue="0"
							variant="separated"
						>
							<Accordion.Item className={classes.item} value="1">
								<Accordion.Control>
									Where are your parts from?
								</Accordion.Control>
								<Accordion.Panel>
									I source my parts from a variety of reputable suppliers in the
									aftermarket industry. I carefully select my suppliers to
									ensure that they provide high-quality parts that meet strict
									standards for quality and reliability.<br></br>
									<br></br> I use original equipment manufacturer (OEM)
									movements, which are made by the same manufacturer that makes
									the movement for the original watch brand. This ensures that
									my watches are powered by reliable and accurate mechanisms.
									<br></br>
									<br></br>I have zero affiliation with Seiko.
								</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item className={classes.item} value="2">
								<Accordion.Control>
									How long do I need to wait to receive a timepiece upon placing
									an order?
								</Accordion.Control>
								<Accordion.Panel>
									I typically need about a month to build a watch. This is due
									to sourcing and procuring of parts, as well as taking the time
									to carefully assemble each watch to ensure that it meets the
									standards for quality and reliability.
									<br></br>
									<br></br>I want to ensure that you receive a watch that is not
									only beautiful but also a functional and durable timepiece. I
									apologize for any inconvenience this may cause and I will keep
									you updated on the progress of your watch.
								</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item className={classes.item} value="3">
								<Accordion.Control>
									Can I send you a picture of a watch I like for you to build it
									for me?
								</Accordion.Control>
								<Accordion.Panel>
									I will be elated to build your dream watch. However, assuming
									that I am able to source for the exact parts, I will require
									extra time and effort to do so.
									<br></br>
									<br></br>
									As such, I will be charging a premium for this service. I
									understand that this may be an additional cost for you, but I
									believe that the end result will be a unique and exclusive
									timepiece, tailored to your personal style and preferences.
									<br></br>
									<br></br>
									<Text fs="italic">"I'm confused, what do you mean?"</Text>
									Feel free to check these links for inspiration.
									<List listStyleType="disc">
										<List.Item>
											<Link
												className={classes.contact}
												href="https://www.instagram.com/seikomods"
												target="_blank"
											>
												@seikomods
											</Link>
										</List.Item>
										<List.Item>
											<Link
												className={classes.contact}
												href="https://www.instagram.com/bbmod_france/?hl=en"
												target="_blank"
											>
												@bbmod_france
											</Link>
										</List.Item>
										<List.Item>
											<Link
												className={classes.contact}
												href="https://www.bbmodfrance.com/en/boutique/"
												target="_blank"
											>
												Bbmod's website
											</Link>
										</List.Item>
									</List>
									<br></br>
									Feel free to&nbsp;
									<Link
										className={classes.contact}
										href="http://t.me/damnsope"
										target="_blank"
									>
										contact me
									</Link>
									&nbsp;to discuss further.
									<br></br>
								</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item className={classes.item} value="4">
								<Accordion.Control>
									What is your warranty policy?
								</Accordion.Control>
								<Accordion.Panel>
									<Text>
										I stand behind the quality of my work and would love for you
										to be completely satisfied with your purchase. I offer a
										6-month warranty on all of my watches, covering any defects
										in materials and workmanship. This however, does not cover
										wear and tear.
										<br></br>
										<br></br> In the event of an issue or defect, depending on
										the situation, I will:
									</Text>
									<List type="ordered">
										<List.Item>
											Repair the watch using new or spare parts{" "}
										</List.Item>
										<List.Item>Exchange the watch with a new one</List.Item>
										<List.Item>
											Refund the purchase price of the watch
										</List.Item>
									</List>
									<br></br>
									This warranty does not cover:<br></br>
									<List>
										<List.Item>
											Improper care, negligence, normal wear and tear, or the
											natural breakdown of colors and materials over extended
											time and use.
										</List.Item>
										<List.Item>
											Watches that have been damaged by unauthorized repair or
											modification.
										</List.Item>
									</List>
								</Accordion.Panel>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Grid>
			</Container>
		</>
	);
}
