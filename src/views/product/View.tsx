import { Box, Paper } from '@mui/material';
import React from 'react';
import { CoreBreadcrumbs } from './../../core';

const View = () => {
  return (
    <>
      <CoreBreadcrumbs />
      <Box component={Paper} sx={{ mb: 2,  p: 3, borderRadius: 2, boxSizing: 'border-box'}}>
        View
      </Box>
    </>
  )
}

export default View;