import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import Post from "../components/Post/Post";
import PostBox from "../components/Post/PostBox";

const Home = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 xs={4}></Grid2>
        <Grid2 xs={4}>
          <Stack spacing={2}>
            <PostBox />
            <Post />
          </Stack>
        </Grid2>
        <Grid2 xs={4}></Grid2>
      </Grid2>
    </>
  );
};

export default Home;
