import React from 'react';
import { Config } from '../types';

export const ConfigContext = React.createContext<Config>({} as Config);
ConfigContext.displayName = 'ConfigContext'

