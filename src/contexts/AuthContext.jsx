import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  return children;
}
