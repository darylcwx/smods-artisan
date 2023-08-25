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
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
const useStyles = createStyles((theme) => ({
	item: { height: "40px", display: "flex", alignItems: "center" },
	contact: {
		textDecoration: "none",
	},
}));

export default function Home() {
	const { classes } = useStyles();
	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};
	const item = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<>
			<Head>
				<title>About</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/svgs/gold.svg" />
			</Head>

			<Container size="md" px="xl">
				<motion.div
					variants={container}
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={item}>
						<Title pt="xl">Hello!</Title>
					</motion.div>
					<motion.div variants={item}>
						<Text pb="xs">
							Welcome to Smods Artisan. Smods stands for Seiko
							Mods, and the service I provide is a unique-to-you
							custom modded Seiko, with all parts of your
							choosing.
						</Text>

						<Text pb="xl">
							Each watch is carefully assembled to ensure that it
							meets high standards for quality and reliability.
							Whether you're looking for a template or a unique,
							personalized timepiece, there have something for
							everyone.
						</Text>
					</motion.div>
					<motion.div variants={item}>
						<Title pt="xl">History</Title>
					</motion.div>
					<motion.div variants={item}>
						<Text pb="xs">
							My journey as a watchmaker began as a hobby. The
							positive response I received to my work encouraged
							me to explore the opportunity to bring my passion
							for watchmaking to a wider audience.
						</Text>
					</motion.div>
					<motion.div variants={item}>
						<Title pt="xl">Why me?</Title>
					</motion.div>
					<motion.div variants={item}>
						<Text pb="xl">
							<List>
								<List.Item>
									I stand behind the craftsmanship of every
									watch I create with a 6-month warranty.
								</List.Item>
								<List.Item>
									I enjoying providing and creating designs
									beyond those seen frequently (Pepsi, Batman,
									Rose Gold YM), allowing you to stand out
									from the crowd.
								</List.Item>
								<List.Item>
									I offer the unique option of a fourth and
									functional GMT hand, setting my services
									apart from the competition.
								</List.Item>
								<List.Item>
									I use glidelock clasps, allowing for fine
									adjustment of your bracelet length
								</List.Item>
								<List.Item>
									I value loyalty and offer a 10% discount to
									returning customers.
								</List.Item>
							</List>
						</Text>
					</motion.div>
					<motion.div variants={item}>
						<Grid id="faq-grid">
							<Col
								span={12}
								sm={6}
								py="xl"
								order={1}
								orderSm={2}
								className="flex items-center"
							>
								<Image
									src="static/background/movement.JPG"
									alt="movement"
								></Image>
							</Col>
							<Col span={12} sm={6} py="xl" order={2} orderSm={1}>
								<Title order={2} px="sm" pb="sm">
									Frequently Asked Questions
								</Title>
								<Accordion
									chevronPosition="right"
									defaultValue="0"
									variant="separated"
									styles={{
										item: {
											backgroundColor: "#000000",
										},
									}}
								>
									<Accordion.Item
										value="1"
										className="bg-accent-hover"
									>
										<Accordion.Control className="py-2 text-white">
											Where are your parts from?
										</Accordion.Control>
										<Accordion.Panel>
											I source my parts from the
											aftermarket industry. I carefully
											select my suppliers to ensure that
											they provide high-quality parts for
											quality and reliability.
											<br></br>
											<br></br>
											<Image
												src={
													"/static/background/lume.JPG"
												}
												alt="lume"
											></Image>
											<br></br>
											<br></br> I use different NHxx
											movements for different
											requirements, which ensures that my
											watches are powered by reliable and
											accurate mechanisms.
											<br></br>
											<br></br>I have zero affiliation
											with Seiko.
										</Accordion.Panel>
									</Accordion.Item>
									<Accordion.Item
										value="2"
										className="bg-accent-hover"
									>
										<Accordion.Control className="py-2 text-white">
											How long do I need to wait to
											receive a timepiece upon placing an
											order?
										</Accordion.Control>
										<Accordion.Panel>
											I typically need about 3 weeks to
											fulfil. This is due to sourcing and
											procuring of parts, then carefully
											assembling each watch. I want to
											ensure that you receive a watch that
											is not only beautiful, but also a
											functional and durable timepiece.
											<br></br>
											<br></br>Therefore, I apologize for
											any inconvenience this may cause and
											I will keep you updated on the
											progress of your watch.
										</Accordion.Panel>
									</Accordion.Item>
									<Accordion.Item
										value="3"
										className="bg-accent-hover"
									>
										<Accordion.Control className="py-2 text-white">
											Are there any more available
											designs?
										</Accordion.Control>
										<Accordion.Panel>
											I will be elated to build your dream
											watch. However, assuming that I am
											able to source for the exact parts,
											I will require extra time and effort
											to do so.
											<br></br>
											<br></br>
											As such, there is a small premium
											for this service. This end result of
											this additional cost is a unique and
											exclusive timepiece, tailored to
											your personal style and preferences.
											<br></br>
											<br></br>
											Feel free to check these links for
											inspiration. I might be able to
											build a watch you like from any of
											these other modders.
											<List listStyleType="disc">
												<List.Item>
													<Link
														className={
															classes.contact
														}
														href="https://www.instagram.com/seikomods"
														target="_blank"
													>
														@seikomods
													</Link>
												</List.Item>
												<List.Item>
													<Link
														className={
															classes.contact
														}
														href="https://www.instagram.com/bbmod_france/"
														target="_blank"
													>
														@bbmod_france
													</Link>
												</List.Item>
												<List.Item>
													<Link
														className={
															classes.contact
														}
														href="https://www.instagram.com/bbmod_watches"
														target="_blank"
													>
														@bbmod_watches
													</Link>
												</List.Item>

												<List.Item>
													<Link
														className={
															classes.contact
														}
														href="https://www.instagram.com/jack_hypoxia/?hl=en"
														target="_blank"
													>
														@jack_hypoxia
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
											&nbsp;to clarify any questions you
											may have.
											<br></br>
										</Accordion.Panel>
									</Accordion.Item>
									<Accordion.Item
										value="4"
										className="bg-accent-hover"
									>
										<Accordion.Control className="py-2 text-white">
											What is your warranty policy?
										</Accordion.Control>
										<Accordion.Panel>
											<Text>
												I stand behind the quality of my
												work and would love for you to
												be completely satisfied with
												your purchase. I offer a 6-month
												warranty on all of my watches,
												covering any defects in
												materials and workmanship. This
												however, does not cover wear and
												tear.
												<br></br>
												<br></br>
												<b>
													In the unlikely event of an
													issue or defect, depending
													on the situation, I will:
												</b>
											</Text>
											<List type="ordered">
												<List.Item>
													Repair the watch using new
													or spare parts{" "}
												</List.Item>
												<List.Item>
													Exchange the watch with a
													new one
												</List.Item>
												<List.Item>
													Refund the purchase price of
													the watch
												</List.Item>
											</List>
											<br></br>
											<b>This warranty does not cover:</b>
											<br></br>
											<List>
												<List.Item>
													Improper care, negligence,
													wear and tear, or the
													natural breakdown of colors
													and materials over extended
													time and use.
												</List.Item>
											</List>
										</Accordion.Panel>
									</Accordion.Item>
									<Accordion.Item
										value="5"
										className="bg-accent-hover"
									>
										<Accordion.Control className="py-2 text-white">
											How do I adjust the day and date
											and/or time?
										</Accordion.Control>
										<Accordion.Panel>
											<Image
												src="/static/background/setting.png"
												mb="md"
												alt="settings"
											></Image>
											<Title order={3}>0</Title>
											<Text mb="md">
												The watch crown should be
												screwed in and locked. Unscrew
												it and turn clockwise to wind
												the watch.
											</Text>
											<Title order={3}>1</Title>
											<Text mb="md">
												1 click out will allow you to
												set the
												<b> day</b> and <b>date</b>.
												<br></br>- Turning clockwise
												will set the
												<b> day</b> (only for NH36
												movements)
												<br></br>- Turning
												counterclockwise will set the{" "}
												<b>date</b>.
											</Text>
											<Title order={3}>2</Title>
											<Text mb="md">
												2 clicks out will allow you to
												set the
												<b> time</b>.
											</Text>
										</Accordion.Panel>
									</Accordion.Item>
									<Accordion.Item
										value="6"
										className="bg-accent-hover"
									>
										<Accordion.Control className="py-2 text-white">
											How do I adjust strap length?
										</Accordion.Control>
										<Accordion.Panel>
											<Title order={3}>
												Oyster Straps
											</Title>
											<Text mb="md">
												You may use a 12mm flathead
												screwdriver to remove bracelet
												links if necessary, and
												thereafter adjust the glidelock
												on the clasp to your preferred
												length.
											</Text>
											<Title order={3}>
												Jubilee Straps
											</Title>
											<Text mb="md">
												You may use a 12mm flathead
												screwdriver to remove bracelet
												links if necessary, and
												thereafter adjust the glidelock
												on the clasp to your preferred
												length.
											</Text>
											<Title order={3}>
												Rubber Straps
											</Title>
											<Text mb="md">
												You may use the provided spring
												bar tool to remove the strap
												from the clasp, then use a
												scissors to cut off extra rubber
												to your preferred length.
											</Text>
										</Accordion.Panel>
									</Accordion.Item>
								</Accordion>
							</Col>
						</Grid>
					</motion.div>
				</motion.div>
			</Container>
		</>
	);
}
