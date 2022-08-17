import React from 'react';
import { AuthContext } from './index';
import { Auth } from './../types';

export const useCheckAuth = () => {
  const { checkAuth } = React.useContext(AuthContext) as Auth;
  return checkAuth;
}