import { Skeleton } from "@mui/material";

const SkeletonDetails = () => {
  return (
    <>
      <Skeleton height={50} width="60%" />
      <Skeleton height={50} width="80%" />
      <Skeleton height={50} width="100%" />
      <Skeleton height={50} width="70%" />
      <Skeleton height={50} width="50%" />
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-6">
        <Skeleton height={50} width="30%" />
      </div>
    </>
  );
};

export default SkeletonDetails;
