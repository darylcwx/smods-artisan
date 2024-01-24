import { useState, useEffect, useCallback } from "react";
import {
  Container,
  Text,
  Tooltip,
  Title,
  Grid,
  Button,
  Box,
} from "@mantine/core";
import Image from "next/image";
import {
  IconChevronLeft,
  IconChevronRight,
  IconHeartFilled,
} from "@tabler/icons-react";
import Head from "next/head";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/router";
import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";

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

  useEffect(() => {
    if (router.isReady) {
      const watchName = router.query.id;
      console.log(watchName);
      const data = localStorage.getItem("watches");
      console.log(data);
      if (data != null) {
        const parsedData = JSON.parse(data);
        const w = parsedData.find((x) => x.name === watchName);
        console.log(w);
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

  useEffect(() => {
    console.log(watch);
  }, []);
  return (
    <>
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
                      className="embla overflow-hidden  max-w-2xl"
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
                                width={800}
                                height={0}
                                quality={100}
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
                      quality={100}
                      className="w-full h-auto rounded-xl"
                      alt={watch.name}
                    />
                  </Box>
                )}
              </Box>
              <Box id="details" className="w-80 px-4 flex flex-col">
                <Box>
                  <Tooltip label="Name" position="bottom-start" withArrow>
                    <Title order={1}>{watch.name}</Title>
                  </Tooltip>
                  <Text size="sm"></Text>
                  <Box className="pt-4">
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
                <Box className="flex items-center">
                  <IconHeartFilled
                    className="text-accent"
                    size={24}
                    onClick={() => handleLike(watch.name)}
                  />
                  <Text className="pl-2 text-white">{watch.likes}</Text>
                </Box>
                <Box className="pt-4">
                  <Button className="bg-accent hover:bg-accent-hover w-full">
                    I want this one!
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}
