import { useState, useEffect, useCallback } from "react";
import {
  Container,
  Text,
  Tooltip,
  Title,
  Button,
  Box,
  Modal,
  TextInput,
  Textarea,
  Group,
} from "@mantine/core";
import Image from "next/image";
import {
  IconChevronLeft,
  IconChevronRight,
  IconAt,
  IconHeartFilled,
} from "@tabler/icons-react";
import Head from "next/head";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/router";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

export default function Watch() {
  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [watch, setWatch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [teleHandle, setTeleHandle] = useState("");
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLike = async (watchName) => {
    // API
    const res = await fetch("/api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(watchName),
    });
    const data = await res.json();

    // Update localStorage
    const watches = localStorage.getItem("watches");
    if (watches != null) {
      const parsedData = JSON.parse(watches);
      const updatedData = parsedData.map((w) =>
        w.name === watchName ? { ...w, likes: w.likes + 1 } : w
      );
      localStorage.setItem("watches", JSON.stringify(updatedData));

      const w = updatedData.find((x) => x.name === watchName);
      setWatch(w);
    } else {
      setWatch((w) =>
        w.name === watchName ? { ...w, likes: w.likes + 1 } : w
      );
    }
  };

  const handleClick = () => {
    setShowError(false);
    setMessage(
      `Hi! I saw watch no. ${watch.name} ("${watch.description}") on your site and I'm interested to know more and perhaps get my own watch. I have a few questions first 🤓🤓`
    );
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowError(false);
    if (teleHandle === "" || message === "") {
      setShowError(true);
      return;
    }
    const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const chatID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    const text = encodeURIComponent(
      `Telegram: @${teleHandle}\nInterested in: ${watch.name} (${watch.description})\nMessage: ${message}`
    );
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
    fetch(url).then((response) => {
      if (response.ok) {
        setShowModal(false);
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
        setShowModal(false);
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
  };
  useEffect(() => {
    if (router.isReady) {
      const watchName = router.query.id;
      const data = localStorage.getItem("watches");
      if (data != null) {
        const parsedData = JSON.parse(data);
        const w = parsedData.find((x) => x.name === watchName);
        setWatch(w);
        setIsLoading(false);
      } else {
        const fetchWatch = async () => {
          try {
            const res = await fetch("api/getWatch?name=" + watchName);
            if (res.ok) {
              const data = await res.json();
              const w = data.data[0];
              setWatch(w);

              setIsLoading(false);
            }
          } catch (error) {
            setIsLoading(false);
            setError(true);
            console.error(error);
            return;
          }
        };
        fetchWatch(watchName);
      }
    }
  }, [router.isReady, router.query.id]);

  return (
    <Box className="relative">
      <Head>
        <title>Seiko Mods Artisan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container p="xl" size="md">
        {isLoading ? (
          <Box>Loading</Box>
        ) : error ? (
          <Box>Error</Box>
        ) : (
          <Box>
            <Box className="sm:flex">
              <Box id="image" className="flex justify-center">
                {Array.isArray(watch.image) ? (
                  <Box className="relative">
                    <Box
                      className="embla overflow-hidden max-w-xl"
                      ref={emblaRef}>
                      <Box className="embla__container flex">
                        {watch.image.map((item) => {
                          return (
                            <Box
                              className="embla__slide flex-[0_0_100%]"
                              key={item}>
                              <Image
                                src={"/static/watches/" + item}
                                priority
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto rounded-xl"
                                alt={item}></Image>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                    <Box
                      className="embla__prev absolute flex top-0 -left-1 h-full items-center z-10"
                      onClick={scrollPrev}>
                      <IconChevronLeft
                        size={36}
                        className="text-accent group-hover:scale-150 duration-200"
                      />
                    </Box>
                    <Box
                      className="embla__next absolute right-0 flex top-0 -right-1 h-full items-center z-10"
                      onClick={scrollNext}>
                      <IconChevronRight
                        size={36}
                        className="text-accent group-hover:scale-150 duration-200"
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box className="max-w-2xl">
                    <Image
                      src={"/static/watches/" + watch.image}
                      width={800}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-xl"
                      alt={watch.name}
                    />
                  </Box>
                )}
              </Box>
              <Box id="details" className="w-80 px-4 flex flex-col">
                <Box>
                  <Box className="flex items-center justify-between">
                    <Tooltip label="Name" position="bottom-start" withArrow>
                      <Title order={1} className="pt-2 sm:pt-0">
                        {watch.name}
                      </Title>
                    </Tooltip>
                    <Box className="flex items-center">
                      <IconHeartFilled
                        className="text-accent"
                        size={24}
                        onClick={() => handleLike(watch.name)}
                      />
                      <Text className="pl-2 text-white">{watch.likes}</Text>
                    </Box>
                  </Box>
                  <Tooltip
                    label="Description"
                    position="bottom-start"
                    withArrow>
                    <Text size="lg">
                      {watch.description ? '"' + watch.description + '"' : ""}
                    </Text>
                  </Tooltip>

                  <Box className="pt-2">
                    <Tooltip
                      label="Bezel Insert"
                      position="bottom-start"
                      withArrow>
                      <Text size="sm">{watch.insert}</Text>
                    </Tooltip>
                    <Tooltip label="Case" position="bottom-start" withArrow>
                      <Text size="sm">{watch.shell}</Text>
                    </Tooltip>
                    <Tooltip label="Crown" position="bottom-start" withArrow>
                      <Text size="sm">{watch.crown}</Text>
                    </Tooltip>
                    <Tooltip label="Strap" position="bottom-start" withArrow>
                      <Text size="sm">{watch.strap}</Text>
                    </Tooltip>
                    <Tooltip label="Clasp" position="bottom-start" withArrow>
                      <Text size="sm">{watch.clasp}</Text>
                    </Tooltip>
                    <Tooltip
                      label="Chapter Ring"
                      position="bottom-start"
                      withArrow>
                      <Text size="sm">{watch.cRing}</Text>
                    </Tooltip>
                    <Tooltip label="Crystal" position="bottom-start" withArrow>
                      <Text size="sm">{watch.crystal}</Text>
                    </Tooltip>
                    <Tooltip label="Dial" position="bottom-start" withArrow>
                      <Text size="sm">{watch.dial}</Text>
                    </Tooltip>
                    <Tooltip label="Hands" position="bottom-start" withArrow>
                      <Text size="sm">{watch.hands}</Text>
                    </Tooltip>
                    <Tooltip label="Movement" position="bottom-start" withArrow>
                      <Text className="" size="sm">
                        {watch.movement}
                      </Text>
                    </Tooltip>
                  </Box>
                </Box>
                <Box className="flex-grow"></Box>

                <Box className="pt-4">
                  <Button
                    className="bg-accent hover:bg-accent-hover w-full"
                    onClick={handleClick}>
                    I want this one!
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
      {showModal && (
        <Modal
          transition="pop"
          opened={showModal}
          size="md"
          onClose={() => setShowModal(false)}
          centered
          zIndex={1001}>
          <TextInput
            label="Telegram"
            placeholder="Your telegram handle"
            name="telegram"
            variant="filled"
            icon={<IconAt size={16} />}
            withAsterisk
            onChange={(e) => setTeleHandle(e.target.value)}
            value={teleHandle}
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
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {showError && (
            <Text size="sm" className="text-red-500 flex justify-center pt-2">
              Please enter your telegram handle and/or message!
            </Text>
          )}
          <Group position="center" mt="sm">
            <Button
              type="submit"
              size="md"
              className="bg-accent hover:bg-accent-hover"
              onClick={handleConfirm}>
              Send message
            </Button>
          </Group>
        </Modal>
      )}
    </Box>
  );
}
