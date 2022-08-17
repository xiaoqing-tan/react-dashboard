import React from 'react';
import { Box, OutlinedInput } from '@mui/material';
import { CoreBreadcrumbs, CoreForm } from './../../core';

type formProps = {
  [key: string]: any;
};
const config: formProps[] = [
  {
    name: 'Name',
    prop: 'name',
    type: 'text',
    rules: {
      required: 'name is required!'
    }
  }
];

const Create = () => {
  return (
    <>
      <CoreBreadcrumbs />
      <Box sx={{ mb: 2, backgroundColor: "#fff", p: 3, borderRadius: 2, boxSizing: 'border-box'}}>
        <CoreForm config={config} />
        <OutlinedInput size='small' />
      </Box>
    </>
  )
}

export default Create;