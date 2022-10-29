import {
  Autorenew,
  FavoriteBorder,
  IosShare,
  Loop,
  ModeCommentOutlined,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Icon,
  IconButton,
  Skeleton,
  Stack,
} from "@mui/material";

const Post = () => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              {/* User Profile Picture */}
              <Skeleton variant="circular" width={40} height={40} />
              <Stack direction="column" spacing={1}>
                <Skeleton width={120}></Skeleton>
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            </Stack>
            <Stack justifyContent={"space-evenly"} direction="row">
              <Stack direction="row">
                <IconButton>
                  <ModeCommentOutlined></ModeCommentOutlined>
                </IconButton>
                <Skeleton width={40}></Skeleton>
              </Stack>

              <Stack direction="row">
                <IconButton>
                  <Autorenew></Autorenew>
                </IconButton>
                <Skeleton width={40}></Skeleton>
              </Stack>
              <Stack direction="row">
                <IconButton>
                  <FavoriteBorder></FavoriteBorder>
                </IconButton>
                <Skeleton width={40}></Skeleton>
              </Stack>
              <Stack direction="row">
                <IconButton>
                  <IosShare></IosShare>
                </IconButton>
                <Skeleton width={40}></Skeleton>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
