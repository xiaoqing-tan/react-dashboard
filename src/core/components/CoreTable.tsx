import { memo, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  CircularProgress,
  Paper,
} from "@mui/material";


type columnsProps = {[key: string]: any}[];
type dataSourceProps = {
  [key: string]: any;
};

export const CoreTable = memo(({
  dataSource = [],
  columns,
  loading
}: {
  dataSource: Array<dataSourceProps>;
  columns: columnsProps,
  loading: boolean
}) => {

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p:3,  
          borderRadius: 3, 
          boxSizing: 'border-box', 
          mb: 2
        }}
        component={Paper}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!loading && !dataSource.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p:3,  
          borderRadius: 3, 
          boxSizing: 'border-box', 
          mb: 2
        }}
        component={Paper}
      >
        No Data!
      </Box>
    );
  }





  return (
    <TableContainer sx={{mb: 2}} component={Box}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((item, index) => {
              return (
                <TableCell key={item.prop} align={index ? "right" : "left"}>
                  {item.name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover
            >
            {columns.map((item, index) => {
              return (
                <TableCell key={item.prop} align={index ? "right" : "left"}>
                  {row[item.prop]}
                </TableCell>
              );
            })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
