
import { useQueryParam } from "./../utils";
import { queryProps, defaultQueryProps } from "./../../core";

type ValuesProps = {
  [key: string]: any
}

export const useDefaultValues = (values: ValuesProps[]) => {
  const defaultValues: ValuesProps = {};
  const [query] = useQueryParam<queryProps>('query', defaultQueryProps);
  values.forEach((item) => {
    defaultValues[item.prop] = query[item.prop] || '';
  });
  return defaultValues;
}