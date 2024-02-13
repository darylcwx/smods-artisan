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
      localStorage.setItem(
        "watches",
        JSON.stringify(updatedAndSortedWatchData)
      );
      localStorage.setItem("prices", JSON.stringify(priceData));
      setWatches(updatedAndSortedWatchData);
      setPrices(priceData);
      setIsLoading(false);
      setSort("date");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  };

  const handleSearch = (search) => {
    if (localStorage.getItem("watches")) {
      const watchData = JSON.parse(localStorage.getItem("watches"));
      const searched = watchData.filter((watchObject) =>
        Object.values(watchObject).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(search.toLowerCase())
        )
      );
      const sorted = handleSort(searched, "date");
      setWatches(sorted);
    }
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
    if (!localStorage.getItem("watches") || !localStorage.getItem("prices")) {
      fetchAllData();
    } else {
      const watchData = JSON.parse(localStorage.getItem("watches"));
      const priceData = JSON.parse(localStorage.getItem("prices"));
      console.log(watchData, priceData);
      setWatches(watchData);
      setPrices(priceData);
      setIsLoading(false);
      setSort("date");
    }
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
        <Text ta="center" c="dimmed" mb="md">
          This is only a portfolio, so you can still drop me a text to discuss
          the exact parts or the exact watch you'd like! 😀
        </Text>
        <Box className="flex row justify-center items-center gap-2 flex-wrap pb-4">
          <Popover width={400} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                That's all...?
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="sm">
                If you find a picture of a watch you'd like, send it to me!
                <br></br>
                <br></br>
                Feel free to check these links for design inspiration. I might
                be able to build a watch you like made by fellow modders.
                <List>
                  <List.Item>
                    <Link
                      className="text-accent no-underline text-sm"
                      href="https://www.instagram.com/seikomods"
                      target="_blank">
                      @seikomods (IG)
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link
                      className="text-accent no-underline text-sm"
                      href="https://www.instagram.com/doctorseiko/"
                      target="_blank">
                      @doctorseiko (IG)
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link
                      className="text-accent no-underline text-sm"
                      href="https://www.instagram.com/seiko_mods"
                      target="_blank">
                      @seiko_mods (IG)
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link
                      className="text-accent no-underline text-sm"
                      href="https://www.instagram.com/jack_hypoxia/?hl=en"
                      target="_blank">
                      @jack_hypoxia (IG)
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link
                      className="text-accent no-underline text-sm"
                      href="https://www.pinterest.com/Four_Forty_Four_PM/seiko-mods-by-four_forty_four_pm/"
                      target="_blank">
                      @Four_Forty_Four_PM (Pinterest)
                    </Link>
                  </List.Item>
                </List>
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                Ladies?
              </Button>
            </Popover.Target>

            <Popover.Dropdown>
              <Text size="sm">
                Check out F01 below! Ladies' watches will be priced at{" "}
                {prices.ladies}. I also offer the option of a crown clasp,
                albeit it comes with a crown too. (PM for more details)
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                GMT?
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="sm">
                For GMT models, I offer the option of having a GMT movement (4
                hands). Functional GMTs are priced at {prices.gmt}.<br></br>
                <br></br>
                However, if you'd like just the GMT bezel with 3 hands, that's
                fine too! It'll be classified as part of the normal range at{" "}
                {prices.regular}.
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button
                variant="outline"
                size="sm"
                className="text-accent border-accent hover:bg-accent/10">
                Prices?
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="sm">
                Most watches are priced at {prices.regular} due to the standard
                NH35 Automatic movement.<br></br>
                <br></br>
                GMTs are priced at {prices.gmt}, while ladies' watches are
                priced at {prices.ladies}. Skeleton/Open hearts are different
                movements too, so they will be priced at {prices.regular}.
              </Text>
            </Popover.Dropdown>
          </Popover>
          <Popover width={450} position="bottom" withArrow></Popover>
        </Box>
        <Box className="mb-6 sm:flex row justify-between w-full p-2 bg-accent text-white rounded-md">
          {/* <Select placeholder="Filter by" data={[]}></Select> */}
          <div className="flex justify-between">
            <Box className="flex flex-col justify-start">
              <div className="text-sm font-bold text-neutral-800">
                Filter by:
              </div>
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
              <div className="text-sm font-bold text-neutral-800">Sort by:</div>
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
          <Box className="flex flex-col justify-start pt-2 sm:pt-0">
            <Text className="text-sm font-bold text-neutral-800">Search:</Text>
            <TextInput
              className=""
              onChange={(e) => {
                setFilter("-");
                handleSearch(e.target.value);
              }}
              placeholder="Jubilee / Pepsi / Rose gold"
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
