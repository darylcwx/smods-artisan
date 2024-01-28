import { useState, useEffect } from "react";
import {
  createStyles,
  Container,
  Text,
  Button,
  Box,
  Popover,
  SimpleGrid,
  List,
  TextInput,
  Loader,
  NativeSelect,
} from "@mantine/core";
import Link from "next/link";
import Head from "next/head";
import Watch from "@/components/watch.js";

export default function Shop() {
  const [watches, setWatches] = useState([]);
  const [prices, setPrices] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState(null);
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

  //TODO - reuse watch context once available
  useEffect(() => {
    const fetchAllData = async () => {
      const watchData = await fetchData("api/getWatches");
      const priceData = await fetchData("api/getPrices");

      if (watchData === undefined || priceData === undefined) {
        setIsLoading(false);
        setError(true);
        return;
      }
      const updatedWatchData = watchData.map((watch) => ({
        ...watch,
        price: priceData[watch.priceCat],
      }));
      setWatches(updatedWatchData);
      localStorage.setItem("watches", JSON.stringify(updatedWatchData));
      setPrices(priceData);
      setIsLoading(false);
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      await fetch("/api/getBySearch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(search),
      })
        .then((res) => res.json())
        .then((data) => setWatches(data.data));

      return;
    };
    handleSearch();
  }, [search]);

  const handleSort = async (sort) => {
    console.log(sort);
    if (sort === "name") {
    } else if (sort === "likes") {
    } else if (sort === "recent") {
    }
    return;
  };

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
              <div className="text-sm font-semibold">Filter by:</div>
              <NativeSelect
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                data={[
                  { label: "-", value: "" },
                  { label: "Ladies", value: "ladies" },
                  { label: "GMT", value: "GMT" },
                  { label: "Oyster strap", value: "oyster" },
                  { label: "Jubilee strap", value: "jubilee" },
                  { label: "Rubber strap", value: "rubber" },
                ]}></NativeSelect>
            </Box>
            <Box className="flex flex-col justify-start pl-2">
              <div className="text-sm font-semibold">Sort by:</div>
              <NativeSelect
                value={sort}
                onChange={(e) => handleSort(e.currentTarget.value)}
                data={[
                  { label: "Name", value: "name" },
                  { label: "Likes", value: "likes" },
                  { label: "Recency", value: "recent" },
                ]}></NativeSelect>
            </Box>
          </div>
          <Box className="flex flex-col justify-start">
            <Text className="text-sm font-semibold">Search:</Text>
            <TextInput
              className=""
              onChange={() => setSearch(event.target.value)}
              placeholder="jubilee"
            />
          </Box>
        </Box>
        {isLoading ? (
          <>
            <Box className="flex flex-col place-items-center gap-2">
              <Text>Hang on! Retrieving data...</Text>
              <Loader color="white" type="bars" />
            </Box>
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
