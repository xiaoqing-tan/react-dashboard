import React from 'react';
import { Box, Paper } from '@mui/material';
import { CoreBreadcrumbs, CoreForm } from './../../core';

type formProps = {
  [key: string]: any;
};

const config: formProps[] = [
  {
    name: 'Id',
    prop: 'id',
    type: 'text',
    xs: 2,
    rules: {
      required: 'name is required!'
    }
  },
  {
    name: 'Name',
    prop: 'name',
    type: 'text',
    xs: 2,
    rules: {
      required: 'name is required!'
    }
  },
  {
    name: 'Gender',
    prop: 'gender',
    type: 'text',
    xs: 2,
    rules: {
      required: 'name is required!'
    }
  },
];

const Create = () => {
  return (
    <>
      <CoreBreadcrumbs />
      <Box component={Paper} sx={{ mb: 2, p: 3, borderRadius: 2, boxSizing: 'border-box'}}>
        <CoreForm config={config} />
      </Box>
    </>
  )
}

export default Create;