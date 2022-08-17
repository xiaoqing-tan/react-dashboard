import { useContext } from "react";
import { ConfigContext } from "./ConfigContext";

export const useConfig = () => {
  const config = useContext(ConfigContext);
  return config;
}