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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svgs/gold.svg" />
      </Head>

      <Container size="md" px="xl">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <Title pt="xl">Hello!</Title>
          </motion.div>
          <motion.div variants={item}>
            <Text pb="xs">Welcome to Seiko Mods Artisan.</Text>
            <Text>
              I provide custom modded Seikos, with most parts of your choosing.
              Whether you're looking for a template or a unique, personalized
              timepiece, there is something for everyone.
            </Text>
          </motion.div>
          <motion.div variants={item}>
            <Title pt="xl">History</Title>
          </motion.div>
          <motion.div variants={item}>
            <Text className="pt-2">
              My journey as a watchmaker began as a hobby. The positive response
              I received to my work encouraged me to explore the opportunity to
              bring my passion for watchmaking to a wider audience.
            </Text>
          </motion.div>
          <motion.div variants={item}>
            <Title pt="xl">Why me?</Title>
          </motion.div>
          <motion.div variants={item}>
            <List className="py-2">
              <List.Item className="pr-6">
                I stand behind the craftsmanship of every watch I create with a
                6-month warranty.
              </List.Item>
              <List.Item className="pr-6">
                I enjoying creating custom designs, allowing you to stand out
                from the crowd.
              </List.Item>
              <List.Item className="pr-6">
                I use glidelock clasps, allowing for fine adjustment of your
                bracelet length
              </List.Item>
              <List.Item className="pr-6">
                I value loyalty and offer a 10% discount to returning customers.
              </List.Item>
            </List>
          </motion.div>
          <motion.div variants={item}>
            <Title order={2} pt="xl">
              Frequently Asked Questions
            </Title>
            <Grid id="faq-grid" className="py-4">
              <Col span={12} sm={6} order={1} orderSm={2} className="flex">
                <Image
                  src="static/background/movement.JPG"
                  alt="movement"></Image>
              </Col>
              <Col span={12} sm={6} order={2} orderSm={1}>
                <Accordion
                  chevronPosition="right"
                  defaultValue="0"
                  variant="separated"
                  styles={{
                    item: {
                      backgroundColor: "#000000",
                    },
                  }}>
                  <Accordion.Item value="1" className="bg-accent-hover">
                    <Accordion.Control className="text-white">
                      How do I adjust the day and date and/or time?
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Image
                        src="/static/background/setting.png"
                        mb="md"
                        alt="settings"></Image>
                      <Title order={3}>Position 0</Title>
                      <Text mb="md">
                        The watch crown should be screwed in and locked. Unscrew
                        it and turn clockwise to wind the watch.
                      </Text>
                      <Title order={3}>Position 1</Title>
                      <Text mb="md">
                        At position 0 after unscrewing, pull the crown out by 1
                        click.<br></br>- Turning clockwise sets the
                        <b> day</b> for NH36 movements, or the <b>24H hand</b>{" "}
                        for GMT movements
                        <br></br>- Turning counterclockwise sets the <b>date</b>
                      </Text>
                      <Title order={3}>Position 2</Title>
                      <Text mb="md">
                        Pulling the crown out by 2 clicks sets the <b>time</b>.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="2" className="bg-accent-hover">
                    <Accordion.Control className="text-white">
                      How do I adjust strap length?
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Title order={1}>Metal Straps</Title>
                      <Text mb="md">
                        <small className="text-red-400 flex pb-2">
                          Applicable to both oyster and jubilee straps.
                        </small>{" "}
                        <li>
                          Use a 12mm flathead screwdriver to remove bracelet
                          links if necessary.
                        </li>
                        <div className="pt-2">
                          <Image
                            src="static/background/glidelock1.jpg"
                            alt="glidelock"
                          />
                          <li>
                            Then, adjust the glidelock on the clasp to your
                            preferred length.
                          </li>
                        </div>
                        <li>
                          <Link
                            className={classes.contact}
                            href="https://www.youtube.com/watch?v=lcAdJGR9v0I"
                            target="_blank">
                            YouTube video example
                          </Link>
                        </li>
                      </Text>
                      <Title order={2}>Rubber Straps</Title>
                      <Text mb="md">
                        Use a spring bar tool to remove the strap from the
                        clasp, then use a scissors to cut off extra rubber to
                        your preferred length.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="3" className="bg-accent-hover">
                    <Accordion.Control className="text-white">
                      Where are your parts from?
                    </Accordion.Control>
                    <Accordion.Panel>
                      I source my parts from Namoki, DLW, and the aftermarket
                      industry. I carefully select my suppliers to ensure that
                      they provide high-quality parts.
                      <br></br>
                      <br></br>
                      <Image src={"/static/background/lume.JPG"} alt="lume" />
                      <div className="text-center">
                        <Text size="xs" pt="xs">
                          I have zero affiliation with Seiko.
                        </Text>
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="4" className="bg-accent-hover">
                    <Accordion.Control className="text-white">
                      How long do I need to wait to receive a timepiece upon
                      placing an order?
                    </Accordion.Control>
                    <Accordion.Panel>
                      I typically need about 2 weeks to fulfil an order. This
                      may vary due to unforeseen circumstances.
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="5" className="bg-accent-hover">
                    <Accordion.Control className="text-white">
                      Are there any more available designs?
                    </Accordion.Control>
                    <Accordion.Panel>
                      Feel free to check these links for inspiration. I might be
                      able to build a watch you like from any of these other
                      modders.
                      <List listStyleType="disc">
                        <List.Item>
                          <Link
                            className={classes.contact}
                            href="https://www.instagram.com/seikomods"
                            target="_blank">
                            @seikomods
                          </Link>
                        </List.Item>
                        <List.Item>
                          <Link
                            className={classes.contact}
                            href="https://www.instagram.com/bbmod_france/"
                            target="_blank">
                            @bbmod_france
                          </Link>
                        </List.Item>
                        <List.Item>
                          <Link
                            className={classes.contact}
                            href="https://www.instagram.com/bbmod_watches"
                            target="_blank">
                            @bbmod_watches
                          </Link>
                        </List.Item>

                        <List.Item>
                          <Link
                            className={classes.contact}
                            href="https://www.instagram.com/jack_hypoxia/?hl=en"
                            target="_blank">
                            @jack_hypoxia
                          </Link>
                        </List.Item>
                      </List>
                      <br></br>
                      Feel free to&nbsp;
                      <Link
                        className={classes.contact}
                        href="http://t.me/damnsope"
                        target="_blank">
                        contact me
                      </Link>
                      &nbsp;to clarify any questions you may have.
                      <br></br>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="6" className="bg-accent-hover">
                    <Accordion.Control className="text-white">
                      What is your warranty policy?
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text>
                        I stand behind the quality of my work and offer a
                        6-month warranty on all of my watches, covering any
                        defects in materials and workmanship. This however, does
                        not cover wear and tear.
                        <br></br>
                        <br></br>
                        <b>
                          In the unlikely event of an issue or defect, depending
                          on the situation, I will:
                        </b>
                      </Text>
                      <List type="ordered">
                        <List.Item>
                          Replace affected parts with new or spare parts
                        </List.Item>
                        <List.Item>Offer a 1:1 exchange</List.Item>
                        <List.Item>
                          Refund the purchase price of the watch upon receiving
                          the watch back
                        </List.Item>
                      </List>
                      <br></br>
                      <b>This warranty does not cover:</b>
                      <br></br>
                      <List>
                        <List.Item>
                          Improper care, negligence, wear and tear (bracelet
                          scratches etc.), or the natural breakdown of colors
                          and materials over extended time and use.
                        </List.Item>
                      </List>
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
