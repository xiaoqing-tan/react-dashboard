import { useNavigate } from "react-router-dom";
import useAuthProvider from "./useAuthProvider";

export function sleep(time: number) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export const useLogin = (): Login => {
  const navigate = useNavigate();
  const authProvider = useAuthProvider();

  const login = async (params: any) => {
    const ret = await authProvider.login(params);
    await sleep(500);
    navigate("/");
    return ret;
  };

  return login;
};

type Login = (params: any) => Promise<any>;
