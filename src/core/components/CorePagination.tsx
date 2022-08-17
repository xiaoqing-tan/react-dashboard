import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useQueryParam } from "./../utils";
import { queryProps, defaultQueryProps } from "./../../core";

export const CorePagination = React.memo(({ 
  page,
  count
}: { 
  page: number,
  count: number
}) => {
  const [query, setQuery] = useQueryParam<queryProps>('query', defaultQueryProps);

  const onChange = React.useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    setQuery({ 
      ...query,
      page
    });
  }, [query, setQuery])

  return (
    <Box>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        showFirstButton
        showLastButton
      />
    </Box>
  );
});
