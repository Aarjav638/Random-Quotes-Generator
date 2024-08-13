import { createContext,Dispatch,SetStateAction } from "react";
import { AuthContextType } from "../../constants/types";
type AuthContextState = [AuthContextType, Dispatch<SetStateAction<AuthContextType>>];
const AuthContext = createContext<AuthContextState|null>(null);
export default AuthContext;