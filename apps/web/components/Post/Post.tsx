import { Card, User, Text, Spacer } from "@nextui-org/react";

function Post() {
  return (
    <>
      <Card>
        <Card.Body>
          <User src="" name="Name">
            <User.Link>@name</User.Link>
          </User>
          <Text css={{ marginLeft: 64 }}>
            So this is what's happening...
          </Text>
        </Card.Body>
      </Card>
      <Spacer y={1} />
    </>
  );
}

export default Post;
