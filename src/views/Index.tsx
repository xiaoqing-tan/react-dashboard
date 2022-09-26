import React, { memo } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import faker from "faker";
import { CoreBreadcrumbs } from "./../core";

// 你可以直接获取 DOM button 的 ref：

export default function Index() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <>
      <CoreBreadcrumbs />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box component={Paper} sx={{ p: 2, borderRadius: 1 }}>
            <Line options={options} data={data} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box component={Paper} sx={{ p: 2, borderRadius: 1 }}>
            <Line options={options} data={data} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box component={Paper} sx={{ p: 2, borderRadius: 1 }}>
            <Line options={options} data={data} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
