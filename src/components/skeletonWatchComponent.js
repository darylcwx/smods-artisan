import { Box, Skeleton } from "@mantine/core";

export default function skeletonWatchComponent() {
  return (
    <Box>
      <Skeleton height={285} radius="md"></Skeleton>
      <Box className="flex flex-col">
        <Box className="flex items-center justify-between">
          <Skeleton
            height={45}
            width="30%"
            radius="md"
            ml={15}
            mt={20}></Skeleton>
          <Skeleton
            height={35}
            width="20%"
            radius="md"
            mr={15}
            mt={20}></Skeleton>
        </Box>
        <Skeleton
          height={20}
          radius="md"
          width="75%"
          ml={15}
          mt={20}></Skeleton>
      </Box>
    </Box>
  );
}
