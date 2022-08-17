import React from 'react';
import { Box } from '@mui/material'
import { CoreBreadcrumbs } from './../../core';

const Edit = () => {
  return (
    <>
      <CoreBreadcrumbs />
      <Box sx={{ mb: 2, backgroundColor: "#fff", p: 3, borderRadius: 2, boxSizing: 'border-box'}}>
        Edit
      </Box>
    </>
  )
}

export default Edit;