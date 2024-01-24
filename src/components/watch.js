import React from "react";
import { useState, useCallback } from "react";
import { Paper, Text, Title, Flex, Tooltip, Button, Box } from "@mantine/core";
import Image from "next/image";
import {
  IconChevronLeft,
  IconChevronRight,
  IconHeartFilled,
} from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";

export default function Watch(watch) {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [likeCount, setLikeCount] = useState(watch.likes);
  const handleClick = (event) => {
    if (
      event.target.classList.contains("embla__prev") ||
      event.target.classList.contains("embla__next") ||
      event.target.tagName === "svg" ||
      event.target.tagName === "path"
    ) {
      return;
    }
    router.push("/watch?id=" + watch.name);
  };

  const handleLike = async (watch) => {
    const res = await fetch("/api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(watch),
    });
    const data = await res.json();
    setLikeCount(likeCount + 1);
    return;
  };
  return (
    <>
      <Paper
        className="relative p-0 rounded-xxl shadow-2xl transition ease-in-out hover:shadow-white/50 hover:scale-105 hover:duration-200"
        key={watch.name}
        onClick={handleClick}>
        <Box className="flex flex-col justify-start h-full">
          {Array.isArray(watch.image) ? (
            <Box className="relative">
              <Box className="embla overflow-hidden">
                <Box className="embla__viewport" ref={emblaRef}>
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
                            className="w-full h-auto rounded-t-xl"
                            alt={item}></Image>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
              <Box
                className="embla__prev absolute flex top-0 -left-1 h-full items-center group"
                onClick={scrollPrev}>
                <IconChevronLeft
                  size={36}
                  className="text-accent group-hover:scale-150 duration-200"
                />
              </Box>
              <Box
                className="embla__next absolute right-0 flex top-0 -right-1 h-full items-center group"
                onClick={scrollNext}>
                <IconChevronRight
                  size={36}
                  className="text-accent group-hover:scale-150 duration-200"
                />
              </Box>
            </Box>
          ) : (
            <Image
              src={"/static/watches/" + watch.image}
              priority
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-t-xl"
              alt={watch.name}></Image>
          )}
          <Box className="m-0 px-6 py-4 rounded-b-xxl flex grow flex-col justify-between">
            <Box className="flex justify-between">
              <Title order={1}>{watch.name}</Title>
              <Box className="flex items-center">
                <IconHeartFilled
                  className="text-accent"
                  size={24}
                  onClick={() => handleLike(watch.name)}
                />
                <Text className="pl-2 text-white">{likeCount}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
