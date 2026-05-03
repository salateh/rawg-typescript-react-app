import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ChangeEvent,
} from "react";
import { IProfile, useProfile } from "../hooks/profile";

interface UserContextType {
  user: IProfile;
  loading: boolean;
  edit: boolean;
  isInvalid: boolean;
  handleCancel: () => void;
  handleSave: () => void;
  handleChange: (
    eventInput: ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => void;
  handleStartEdit: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const {
    handleCancel,
    handleSave,
    handleChange,
    handleStartEdit,
    isInvalid,
    loading,
    edit,
    user,
  } = useProfile();

  return (
    <UserContext.Provider
      value={{
        handleCancel,
        handleSave,
        handleChange,
        handleStartEdit,
        isInvalid,
        edit,
        loading,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useProfileContext must be used within ProfileProvider");
  }
  return context;
}
