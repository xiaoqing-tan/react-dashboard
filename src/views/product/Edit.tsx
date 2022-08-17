import React from 'react';
import { Box, Paper } from '@mui/material'
import { CoreBreadcrumbs } from './../../core';

const Edit = () => {
  return (
    <>
      <CoreBreadcrumbs />
      <Box component={Paper} sx={{ mb: 2, p: 3, borderRadius: 2, boxSizing: 'border-box'}}>
        Edit
      </Box>
    </>
  )
}

export default Edit;