import { useState, useEffect } from "react";
import {
  createStyles,
  Container,
  Text,
  Button,
  ActionIcon,
  Box,
  Popover,
  SimpleGrid,
  List,
  TextInput,
  Loader,
  NativeSelect,
  Skeleton,
} from "@mantine/core";
import SkeletonWatchComponent from "../components/skeletonWatchComponent.js";
import { IconSortAscending, IconSortDescending } from "@tabler/icons-react";

import Link from "next/link";
import Head from "next/head";
import Watch from "@/components/watch.js";

export default function Shop() {
  const [watches, setWatches] = useState([]);
  const [prices, setPrices] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [sortByDesc, setSortByDesc] = useState(true);
  const [search, setSearch] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(endpoint);
      if (res.ok) {
        const data = await res.json();
        return data.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllData = async () => {
    try {
      if (!localStorage.getItem("watches") || !localStorage.getItem("prices")) {
        const watchData = await fetchData("api/getWatches");
        const priceData = await fetchData("api/getPrices");

        if (!watchData || !priceData) {
          setIsLoading(false);
          setError(true);
          return;
        }

        const updatedWatchData = watchData.map((watch) => ({
          ...watch,
          price: priceData[watch.priceCat],
        }));

        const updatedAndSortedWatchData = handleSort(updatedWatchData, "date");
        setWatches(updatedAndSortedWatchData);
        localStorage.setItem(
          "watches",
          JSON.stringify(updatedAndSortedWatchData)
        );
        localStorage.setItem("prices", JSON.stringify(priceData));
        setPrices(priceData);
        setIsLoading(false);
      } else {
        const watches = JSON.parse(localStorage.getItem("watches"));
        const prices = JSON.parse(localStorage.getItem("prices"));
        setWatches(watches);
        setPrices(prices);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  };

  const handleSearch = async (search) => {
    if (!localStorage.getItem("watches")) {
      await fetchAllData();
    }
    const searched = watches.filter((watchObject) =>
      Object.values(watchObject).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(search.toLowerCase())
      )
    );
    const sorted = handleSort(searched, "date");
    setWatches(sorted);
  };

  const handleSort = (watches, sort) => {
    if (!watches || !Array.isArray(watches)) return watches;
    const sorted = [...watches];
    sorted.sort((a, b) => {
      if (sort === "name") {
        return b.name.localeCompare(a.name);
      } else if (sort === "likes") {
        return b.likes - a.likes;
      } else if (sort === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    return sorted;
  };

  useEffect(() => {
    fetchAllData();
    setSort("date");
  }, []);

  useEffect(() => {
    handleSearch(filter);
  }, [filter]);

  useEffect(() => {
    setWatches((watches) => handleSort(watches, sort));
  }, [sort]);

  useEffect(() => {
    setWatches((watches) => {
      const sorted = [...watches];
      return sorted.reverse();
    });
  }, [sortByDesc]);

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svgs/gold.svg" />
      </Head>
      <Container p="xl" size="md">
        <Text ta="center" fw={500}>
          Here are the watches I have personally built so far. They do not
          include watches that I <span className={"underline"}>can</span> build.
        </Text>
        <Text ta="center" c="dimmed" mb="xl">
          This is only a portfolio, so you can still drop me a text to discuss
          the exact parts or the exact watch you'd like! 😀
        </Text>
        <Box className="flex row justify-center items-center gap-2 flex-wrap pb-6">
          <Popover width={450} position="bottom" withArrow>
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                That's all...?
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="md">
                As mentioned, I might be able to build other watches not
                displayed here.
                <br></br>
                <br></br>
                Feel free to check these links for design inspiration. I might
                be able to build a watch you like made by fellow modders.
                <List>
                  <List.Item>
                    <Link
                      href="https://www.instagram.com/seikomods"
                      target="_blank">
                      @seikomods
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link
                      href="https://www.instagram.com/bbmod_france/"
                      target="_blank">
                      @bbmod_france
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link
                      href="https://www.instagram.com/bbmod_watches"
                      target="_blank">
                      @bbmod_watches
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link
                      href="https://www.instagram.com/jack_hypoxia/?hl=en"
                      target="_blank">
                      @jack_hypoxia
                    </Link>
                  </List.Item>
                </List>
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow>
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                Ladies version?
              </Button>
            </Popover.Target>

            <Popover.Dropdown>
              <Text size="md">
                Check out F01 below! Ladies' watches will be priced at $
                {prices.ladies}.
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow>
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                GMT?
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="md">
                For GMT models, I offer the option of having an actual GMT
                movement. Functional GMTs are priced at ${prices.gmt}.<br></br>
                <br></br>
                However, if you'd like just the GMT bezel with 3 hands, that's
                fine too! It'll be classified as part of the normal range at $
                {prices.regular}.
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow>
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                Daytona/Chronographs?
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="md">
                I've recently built a chronograph! Check out 401 below.
                Chronographs are priced at ${prices.regular}.
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow></Popover>
        </Box>
        <Box className="mb-6 flex row justify-between w-full p-2 bg-accent text-white rounded-md">
          {/* <Select placeholder="Filter by" data={[]}></Select> */}
          <div className="flex">
            <Box className="flex flex-col justify-start">
              <div className="text-sm font-semibold pb-0.5">Filter by:</div>
              <NativeSelect
                value={filter}
                onChange={(e) => setFilter(e.currentTarget.value)}
                data={[
                  { label: "-", value: "" },
                  { label: "Ladies", value: "ladies" },
                  { label: "GMT", value: "GMT" },
                  { label: "Oyster strap", value: "oyster" },
                  { label: "Jubilee strap", value: "jubilee" },
                  { label: "Rubber strap", value: "rubber" },
                ]}></NativeSelect>
            </Box>
            <Box className="flex flex-col justify-start pl-3">
              <div className="text-sm font-semibold pb-0.5">Sort by:</div>
              <Box className="flex">
                <NativeSelect
                  value={sort}
                  onChange={(e) => setSort(e.currentTarget.value)}
                  data={[
                    { label: "Name", value: "name" },
                    { label: "Likes", value: "likes" },
                    { label: "Date", value: "date" },
                  ]}></NativeSelect>
                <ActionIcon className="h-auto ml-0.5 bg-[#25262B] hover:bg-[#343A40]">
                  {sortByDesc ? (
                    <IconSortDescending
                      size={18}
                      className=""
                      onClick={() => setSortByDesc(!sortByDesc)}
                    />
                  ) : (
                    <IconSortAscending
                      size={18}
                      className=""
                      onClick={() => setSortByDesc(!sortByDesc)}
                    />
                  )}
                </ActionIcon>
              </Box>
            </Box>
          </div>
          <Box className="flex flex-col justify-start">
            <Text className="text-sm font-semibold pb-0.5">Search:</Text>
            <TextInput
              className=""
              onChange={(e) => {
                setFilter("-");
                handleSearch(e.target.value);
              }}
              placeholder="jubilee"
            />
          </Box>
        </Box>
        {isLoading ? (
          <>
            <SimpleGrid
              cols={3}
              spacing="xl"
              verticalSpacing="xl"
              breakpoints={[
                {
                  maxWidth: "md",
                  cols: 2,
                  spacing: "xl",
                  verticalSpacing: "xl",
                },
                {
                  maxWidth: "sm",
                  cols: 1,
                  spacing: "xl",
                  verticalSpacing: "xl",
                },
              ]}
              className="pb-6">
              <SkeletonWatchComponent />
              <SkeletonWatchComponent />
              <SkeletonWatchComponent />
              <SkeletonWatchComponent />
            </SimpleGrid>
          </>
        ) : error ? (
          <>
            {" "}
            <Box className="flex flex-col place-items-center gap-2">
              <Text>Something went wrong. Please try again later!</Text>
            </Box>
          </>
        ) : (
          <SimpleGrid
            cols={3}
            spacing="xl"
            verticalSpacing="xl"
            breakpoints={[
              {
                maxWidth: "md",
                cols: 2,
                spacing: "xl",
                verticalSpacing: "xl",
              },
              {
                maxWidth: "sm",
                cols: 1,
                spacing: "xl",
                verticalSpacing: "xl",
              },
            ]}
            className="pb-6">
            {watches.map((watch) => (
              <Watch key={watch.name} {...watch} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}
