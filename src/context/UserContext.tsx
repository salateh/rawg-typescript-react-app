import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState<string>("SalatEh");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
