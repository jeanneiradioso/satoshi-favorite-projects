import { Skeleton } from "@mui/material";

const FavoritesSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" width="100%" height={40} />
      <Skeleton variant="text" width="80%" height={40} />
      <Skeleton variant="text" width="90%" height={40} />
    </>
  );
};

export default FavoritesSkeleton;
