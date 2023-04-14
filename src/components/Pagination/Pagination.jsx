import { Pagination as PaginationMui, Stack } from '@mui/material';

export const Pagination = ({ onChange }) => {
  return (
    <Stack spacing={3}>
      <PaginationMui
        count={6}
        variant="outlined"
        shape="rounded"
        size="large"
        color="secondary"
        onChange={onChange}
      />
    </Stack>
  );
};
