import React from "react";
import * as JSURL from "jsurl";
import {  useSearchParams } from "react-router-dom";
import type { NavigateOptions } from "react-router-dom";

export function useQueryParam<T>(
  key: string,
  defaultVals: T
): [T, (newQuery: T, options?: NavigateOptions) => void] {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(key);

  const value = React.useMemo(() => JSURL.parse(paramValue) || defaultVals, [defaultVals, paramValue]);

  const setValue = React.useCallback(
    (newValue: T, options?: NavigateOptions) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, JSURL.stringify(newValue));
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
}
