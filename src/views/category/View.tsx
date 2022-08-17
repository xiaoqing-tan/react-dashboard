import { Box } from '@mui/system';
import React from 'react';
import { CoreBreadcrumbs } from './../../core';

const View = () => {
  return (
    <>
      <CoreBreadcrumbs />
      <Box sx={{ mb: 2, backgroundColor: "#fff", p: 3, borderRadius: 2, boxSizing: 'border-box'}}>
        View
      </Box>
    </>
  )
}

export default View;