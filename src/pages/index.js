import Head from "next/head";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import {
  MediaQuery,
  createStyles,
  Container,
  Button,
  Group,
  Title,
  Text,
  Overlay,
  Image,
  Box,
} from "@mantine/core";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Head>
        <title>Seiko Mods Artisan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Image
        src={"/static/background/bg2-2.jpg"}
        alt="background"
        fit="cover"
        height="calc(100vh - 60px)"
        className="absolute bg-center"
      />
      <Overlay color="#000" opacity={0.65} className="z-0" />
      <Container
        className="absolute flex flex-col justify-center items-start sm:items-start left-0 right-0"
        sx={{
          height: "calc(100vh - 60px)",
        }}
        size="md"
        px="xl">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ duration: 0.75, delay: 0.2 }}>
          <Title order={1} className="w-full pb-1">
            <span className="">Welcome to </span>
            <span className="sm:inline block animate-index bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-secondary to-accent">
              Seiko Mods Artisan.
            </span>
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ duration: 0.75, delay: 0.4 }}>
          <Text size="lg" className="pb-4 w-full sm:w-3/4">
            We handcraft high-quality, exclusive, yet affordable timepieces
            using the finest aftermarket parts.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ duration: 0.75, delay: 0.6 }}>
          <Box className="flex gap-6 w-full sm:w-3/4 justify-center sm:justify-normal">
            <Link href="/shop">
              <Button
                uppercase
                rightIcon={<IconChevronRight size={18} />}
                className="bg-accent hover:bg-accent-hover rounded-full">
                <Text size="xs">buy now</Text>
              </Button>
            </Link>
            <Link href="/about">
              <Button
                uppercase
                variant="outline"
                className="text-accent border-accent hover:bg-accent-hover/20 hover:text-white hover:border-accent-hover/20 rounded-full">
                <Text size="xs">read more</Text>
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
