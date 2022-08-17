import React from 'react';
import { Auth } from './../types';
export { useLogin } from './useLogin';
export { useCheckAuth } from './useCheckAuth';
export { useUser } from './useUser';

const tryParse = (value: string): any => {
  try {
      return JSON.parse(value);
  } catch (e) {
      return value;
  }
};

export const defaultAuth = {
  login({ user }: any) {
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve(user)
  },
  logout(props: any) {
    localStorage.removeItem('user');
    return Promise.resolve()
  },
  checkAuth(props: any) {
    const val = localStorage.getItem('user') || '{}';
    const user = tryParse(val)
    return localStorage.getItem('user')
  },
  user() {
    return localStorage.getItem('user');
  }
}

export const AuthContext = React.createContext<Auth>(defaultAuth);
AuthContext.displayName = 'AuthContext'