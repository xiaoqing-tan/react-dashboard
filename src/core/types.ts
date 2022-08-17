import { ComponentType } from 'react';
import { RouteObject } from 'react-router-dom';

export interface Config {

}

export interface Auth {
  login: (params: any) => Promise<any>;
  logout: (params: any) => Promise<void | false | string>;
  checkAuth: (params: any) => any;
  user: () => string | null
};

export interface RouterBuilderProps {
  name?: string;
  path?: string;
  icon?: ComponentType;
  element?: ComponentType;
  list?: ComponentType;
  view?: ComponentType;
  create?: ComponentType;
  edit?: ComponentType;
  index?: boolean;
}

export interface RouteProps extends RouteObject {
  level?: number;
  name?: string;
  icon?: React.ReactNode;
  children?: RouteProps[];
  needAuth?: boolean;
}