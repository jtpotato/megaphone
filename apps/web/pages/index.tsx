import { Button, Navbar, Spacer, Text } from "@nextui-org/react";
import PageNavbar from "../components/Navbar";
import PostBox from "../components/Post/PostBox";
import PostColumn from "../components/Post/PostColumn";

const Home = () => {
  return (
    <>
      <PageNavbar />
      <Spacer y={2} />
      <PostColumn />
    </>
  );
};

export default Home;
