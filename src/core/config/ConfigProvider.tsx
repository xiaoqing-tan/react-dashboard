import React from "react";
import { ConfigContext } from "./ConfigContext";
import { Config } from './../types';

export const ConfigProvider = ({ value: Config, children }: ConfigContextProviderProps) => {
  return <ConfigContext.Provider value={ Config }>{ children }</ConfigContext.Provider>
}

export interface ConfigContextProviderProps {
  value: Config,
  children: React.ReactNode
}