import { Pagination as PaginationMui } from '@mui/material';

export const Pagination = ({ onChange }) => {
  return (
    <PaginationMui
      onChange={onChange}
      count={10}
      size="large"
      variant="outlined"
      shape="rounded"
      color="secondary"
    />
  );
};
