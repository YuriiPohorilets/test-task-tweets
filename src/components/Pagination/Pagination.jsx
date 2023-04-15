import { Pagination as PaginationMui } from '@mui/material';

export const Pagination = ({ onChange, totalHits }) => {
  return (
    <PaginationMui
      onChange={onChange}
      count={totalHits}
      size="large"
      variant="outlined"
      shape="rounded"
      color="secondary"
    />
  );
};
