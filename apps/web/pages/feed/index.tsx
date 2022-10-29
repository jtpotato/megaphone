import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import Post from "../../components/Post/Post";
import PostBox from "../../components/Post/PostBox";
import Sidebar from "../../components/Menu/Tabs";

const Home = () => {
  return (
    <>
      <Box paddingLeft={10}>
        <Stack spacing={2}>
          <PostBox />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
