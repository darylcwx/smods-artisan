import { useState, useEffect, useRef } from "react";
import {
  useMantineColorScheme,
  createStyles,
  Burger,
  Group,
  Header,
  Container,
  Modal,
  Button,
  TextInput,
  Textarea,
  SimpleGrid,
  Title,
  Menu,
  Image,
  Box,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import {
  IconCheck,
  IconX,
  IconAt,
  IconBrandTelegram,
} from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import { useForm } from "@mantine/form";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: "10px 20px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "white",
    // "&:hover": {
    // 	backgroundColor:
    // 		theme.colorScheme === "dark"
    // 			? theme.colors.dark[6]
    // 			: theme.colors.gray[0],
    // },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      height: "60px",
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
    },
  },
  dropdown: {
    position: "absolute",
    top: header_height,
    left: 0,
    right: 0,
    border: "none",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
const header_height = 60;
export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  // Set button as state for use-click-outside hook
  const [navButton, setNavButton] = useState(null);
  const navRef = useClickOutside(() => setNavOpen(false), null, [navButton]);
  const [modal, openModal] = useState(false);
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      name: "",
      telegram: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 1 ? "Please input a name." : null,
      telegram: (value) =>
        /^[A-Za-z0-9]+$/.test(value) && value.trim().length >= 5
          ? null
          : "Please enter a valid telegram handle.",
      message: (value) =>
        value.trim().length === 0 ? "Please enter a message." : null,
    },
  });
  const router = useRouter();
  return (
    <>
      <Header height={header_height} className="fixed">
        <Container className="h-full max-w-none flex items-center">
          {/* Hamburger and side nav for mobile */}
          <Box className="flex md:hidden items-center justify-between w-full">
            <Burger
              ref={setNavButton}
              id="navButton"
              opened={navOpen}
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="inline"
              size="sm"
            />
            <AnimatePresence>
              {navOpen && (
                <>
                  <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                    }}>
                    <Box
                      className="fixed top-[60px] left-0 h-screen w-screen bg-black/70"
                      sx={{
                        backdropFilter: "blur(2px);",
                      }}></Box>
                  </motion.div>
                  <motion.div
                    key="menu"
                    initial={{ x: -250 }}
                    animate={{ x: 0 }}
                    exit={{ x: -250 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.15,
                    }}
                    className="fixed top-[60px] left-0 pb-[60px] w-[250px] h-full justify-between flex flex-col bg-main"
                    ref={navRef}>
                    <Box>
                      <Link href="/" className={classes.link}>
                        Home
                      </Link>
                      <Link href="/shop" className={classes.link}>
                        Shop
                      </Link>
                      <Link href="/about" className={classes.link}>
                        About
                      </Link>
                    </Box>
                    <Button
                      onClick={() => openModal(true)}
                      className="h-14 w-full bg-accent hover:bg-accent-hover rounded-none"
                      rightIcon={<IconBrandTelegram />}>
                      Contact me!
                    </Button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            <Link href="/" className="">
              <Image src="/svgs/v1.svg" alt="logo" width={48} />
            </Link>
          </Box>

          {/* Normal nav bar */}
          <Box className="hidden md:flex row justify-between h-full w-full">
            <Group>
              <Link href="/">
                <Image src="/svgs/v1.svg" alt="logo" width={48} />
              </Link>
            </Group>
            <Group className="flex">
              <Link href="/shop" className={classes.link}>
                Shop
              </Link>
              <Link href="/about" className={classes.link}>
                About
              </Link>
              <Button
                className="bg-accent hover:bg-accent-hover"
                onClick={() => openModal(true)}>
                Contact me
              </Button>
              <Modal
                transition="pop"
                opened={modal}
                size="md"
                onClose={() => openModal(false)}
                centered
                zIndex={1001}>
                <form
                  onSubmit={form.onSubmit((values) => {
                    const token = process.env.TELEGRAM_TOKEN;
                    const chatID = process.env.TELEGRAM_CHAT_ID;
                    const text = encodeURIComponent(
                      `Name: ${values.name}\nTelegram: @${values.telegram}\nSubject: ${values.subject}\nMessage: ${values.message}`
                    );

                    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
                    fetch(url).then((response) => {
                      if (response.ok) {
                        notifications.show({
                          icon: <IconCheck size={16} />,
                          title: "Success!",
                          autoClose: 7000,
                          withCloseButton: true,
                          color: "green",
                          message:
                            "I've received a notification with regards to your message.\n\nI'll get back to you shortly!",
                        });
                      } else {
                        notifications.show({
                          icon: <IconX size={16} />,
                          title: "Failure!",
                          autoClose: 7000,
                          withCloseButton: true,
                          color: "red",
                          message: (
                            <span>
                              Uh oh! Something went wrong.
                              <br />
                              Please try again, or you can reach me directly{" "}
                              <a
                                href="https://t.me/damnsope"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline text-blue-300">
                                here
                              </a>
                              . (this link opens a new window)
                            </span>
                          ),
                        });
                      }
                    });
                    form.reset();
                    openModal(false);
                  })}>
                  <Title size="h2" align="center">
                    Ask me anything!
                  </Title>

                  <SimpleGrid
                    cols={2}
                    mt="xl"
                    breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                    <TextInput
                      label="Name"
                      placeholder="Your name"
                      name="name"
                      variant="filled"
                      withAsterisk
                      {...form.getInputProps("name")}
                    />
                    <TextInput
                      label="Telegram"
                      placeholder="Your telegram handle"
                      name="telegram"
                      variant="filled"
                      icon={<IconAt size={16} />}
                      withAsterisk
                      {...form.getInputProps("telegram")}
                    />
                  </SimpleGrid>

                  <TextInput
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    name="subject"
                    variant="filled"
                    {...form.getInputProps("subject")}
                  />
                  <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    withAsterisk
                    {...form.getInputProps("message")}
                  />

                  <Group position="center" mt="xl">
                    <Button
                      type="submit"
                      size="md"
                      className="bg-accent hover:bg-accent-hover">
                      Send message
                    </Button>
                  </Group>
                </form>
              </Modal>
            </Group>
          </Box>
        </Container>
      </Header>
    </>
  );
}
