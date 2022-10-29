import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

const Tabs = () => {
  return (
    <>
      <Stack direction={"column"} spacing={2}>
        {/* Product Logo */}
        <Skeleton variant="circular" width={40} height={40} />
        <Button>For You</Button>
        <Button>Top</Button>
        <Button>Settings</Button>
      </Stack>
    </>
  );
};
export default Sidebar;
