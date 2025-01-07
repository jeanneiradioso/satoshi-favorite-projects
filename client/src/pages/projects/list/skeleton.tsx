import { TableRow, TableCell, Skeleton } from "@mui/material";

const SkeletonList = () => {
  return [...Array(5)].map((_, index) => (
    <TableRow key={index}>
      <TableCell colSpan={6}>
        <Skeleton variant="rectangular" width="100%" height={30} />
      </TableCell>
    </TableRow>
  ));
};

export default SkeletonList;
