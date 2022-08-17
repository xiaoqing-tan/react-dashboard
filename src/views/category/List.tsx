import React, { useEffect } from 'react';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { CoreList, CoreBreadcrumbs } from './../../core';

type TableConfigProps = {
  url?: string;
  search: {[key: string]: any}[];
  columns: {[key: string]: any}[];
}

const tableConfig: TableConfigProps = {
  url: '/product',
  search: [{
    name: 'ID',
    prop: 'id'
  }, {
    name: 'Name',
    prop: 'name',
    rules: { 
      minLength: {
        value: 5,
        message: 'less than 5'
      }, 
      required: 'required'
    }
  }, {
    name: 'Year',
    prop: 'year'
  }, {
    name: 'Color',
    prop: 'color',
    type: 'select',
    rules: {
      required: 'required'
    },
    dict: {
      '0': 'blue',
      '1': 'yellow',
      '2': 'red'
    }
  }, {
    name: 'Value',
    prop: 'pantone_value'
  }],
  columns: [{
    name: 'ID',
    prop: 'id'
  }, {
    name: 'Name',
    prop: 'name'
  }, {
    name: 'Year',
    prop: 'year'
  }, {
    name: 'Color',
    prop: 'color'
  }, {
    name: 'Value',
    prop: 'pantone_value'
  }]
}

const List = () => {
  return (
    <>
      <CoreBreadcrumbs />
      <CoreList tableConfig={tableConfig} />
    </>
  )
}

export default List;