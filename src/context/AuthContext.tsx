import { createContext, useReducer } from "react";
import type { AuthContextType,  AuthState } from "../types/user";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true, // true on mount — we haven't checked session yet
};

type AuthAction =
  | { type: "SET_USER"; payload: AuthState["user"] }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean };

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false, isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}


const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({children} : {children:React.ReactNode}){
  const [state, dispatch] =  useReducer(authReducer, initialState)
}