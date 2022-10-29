import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";

const PostBox = () => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Stack direction="row" spacing={1}>
            <Skeleton variant="circular" width={40} height={40}></Skeleton>
            <TextField
              multiline
              variant="outlined"
              placeholder="What's happening?"
              fullWidth
            ></TextField>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default PostBox;
