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
  Text,
  SimpleGrid,
  Tooltip,
  NativeSelect,
  Title,
  Menu,
  Image,
  Box,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";
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

  const handleTelegram = () => {
    window.open("https://t.me/damnsope", "_blank");
  };
  const handleWhatsApp = () => {
    window.open("https://wa.me/6583225795", "_blank");
  };

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
                      className="h-14 w-full bg-accent hover:bg-accent-hover rounded-none">
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
                <Box>
                  <Title size="h2" align="center" className="pb-4">
                    Ask me anything!
                  </Title>
                </Box>
                <Box className="flex flex-col">
                  <Button
                    variant="filled"
                    className="bg-[#2AABEE] h-16 hover:bg-[#229ED9]"
                    leftIcon={<IconBrandTelegram />}
                    onClick={handleTelegram}>
                    Chat on Telegram
                  </Button>

                  <Button
                    variant="filled"
                    className="bg-[#25D366] h-16 mt-4 hover:bg-[#128C7E]"
                    leftIcon={<IconBrandWhatsapp />}
                    onClick={handleWhatsApp}>
                    Chat on WhatsApp
                  </Button>
                </Box>
              </Modal>
            </Group>
          </Box>
        </Container>
      </Header>
    </>
  );
}
