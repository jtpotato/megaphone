import { Navbar, Text, Button } from "@nextui-org/react";

function PageNavbar() {
  return (
    <>
      <Navbar variant={"sticky"}>
        <Navbar.Brand>
          <Text b>Megaphone</Text>
        </Navbar.Brand>
        <Navbar.Content variant={"highlight-rounded"} hideIn={"xs"}>
          <Navbar.Link isActive={true}>For You</Navbar.Link>
          <Navbar.Link>Top</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link>Login</Navbar.Link>
          <Navbar.Link>
            <Button auto flat>
              Sign Up
            </Button>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  );
}

export default PageNavbar;
