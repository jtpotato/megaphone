import { Col, Row, Spacer } from "@nextui-org/react";
import Post from "./Post";
import PostBox from "./PostBox";

function PostColumn() {
  return (
    <>
      <Row justify="center" align="center">
        <Col css={{ mw: "800px" }}>
          <PostBox />
          <Spacer y={2} />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Col>
      </Row>
    </>
  );
}

export default PostColumn;
