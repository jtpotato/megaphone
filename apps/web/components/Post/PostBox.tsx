import { Card, Textarea, User } from "@nextui-org/react";

function PostBox() {
  return (
    <>
      <Card>
        <Card.Body>
          <User src="" name="You">
            <User.Link>@you</User.Link>
          </User>
          <Textarea placeholder="What's happening?" css={{ marginLeft: 64 }}/>
        </Card.Body>
      </Card>
    </>
  );
}

export default PostBox;
