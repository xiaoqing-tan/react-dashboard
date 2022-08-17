import { useContext } from "react";
import { AuthContext } from "./index";
import { Auth } from "./../types";

const useAuthProvider = (): Auth => useContext(AuthContext);

export default useAuthProvider;
