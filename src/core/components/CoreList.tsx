import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { CoreTable, CorePagination, CoreSearch } from "./../components";
import { services } from "../../services";
import { useQueryParam } from "./../utils";
import { queryProps } from "./../../core";

type tableConfigProps = {
  url?: string;
  search: { [key: string]: any }[];
  columns: { [key: string]: any }[];
};

interface dataSourceProps {
  [key: string]: any;
}

export const defaultQueryProps: queryProps = {
  page: 1,
  per_page: 10,
}

export const CoreList = ({
  tableConfig,
}: {
  tableConfig: tableConfigProps;
}) => {
  const { pathname } = useLocation();
  const [dataSource, setDataSource] = useState<dataSourceProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query] = useQueryParam<queryProps>('query', defaultQueryProps);
  const [count, setCount] = useState<number>(0)
  const url = tableConfig.url || pathname;

  const getData = useCallback(
    async () => {
      try {
        const { data, total_pages } = await services.getList({ url,
          params: {
            page: query.page
          },
        });
        setDataSource(data);
        setCount(total_pages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [query, url]
  );

  useEffect(() => {
    getData();
    return setLoading(true);
  }, [query, getData]);

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxSizing: "border-box",
        mb: 2,
      }}
      component={Paper}
    >
      <CoreSearch config={tableConfig.search} />
      <CoreTable loading={loading} columns={tableConfig.columns} dataSource={dataSource} />
      <CorePagination page={query.page} count={count} />
    </Box>
  );
};
