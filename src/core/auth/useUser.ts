import React from 'react';
import { AuthContext } from './index';
import { Auth } from '../types';

export const useUser = () => {
  const { user } = React.useContext(AuthContext) as Auth;
  return user();
}