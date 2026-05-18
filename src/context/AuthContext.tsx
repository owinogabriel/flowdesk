import { createContext, useContext, useEffect, useReducer } from "react";
import type {
  AuthContextType,
  AuthState,
  LoginCredentials,
  RegisterCredentials,
} from "../types/user";
import {
  getSession,
  mockLogin,
  mockLogout,
  mockRegister,
} from "../data/mockAuth";

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

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // On mount - check if session exist in localstorage
  useEffect(() => {
    const session = getSession();
    dispatch({ type: "SET_USER", payload: session });
  }, []);

  async function login(credentials: LoginCredentials) {
    dispatch({ type: "SET_LOADING", payload: true });
    const user = await mockLogin(credentials); // throws on failure
    dispatch({ type: "SET_USER", payload: user });
  }

  async function register(credentials: RegisterCredentials) {
    dispatch({ type: "SET_LOADING", payload: true });
    const user = await mockRegister(credentials);
    dispatch({ type: "SET_USER", payload: user });
  }

  function logout() {
    mockLogout();
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

//  HOOK
export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
