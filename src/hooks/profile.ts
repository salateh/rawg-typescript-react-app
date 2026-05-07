import { SetStateAction, useEffect, useRef, useState } from "react";
export interface IProfile {
  name: string;
  status: string;
  focus: string;
  Bio: string;
}
export function useProfile() {
  const [loading, setLoading] = useState(true);

  const [edit, setEdit] = useState<boolean>(false);
  const [backUp, setBackUp] = useState<IProfile>(() => ({
    name: "SalatEh",
    status: "",
    focus: "",
    Bio: "",
  }));

  const [user, setItem] = useState<IProfile>(() => {
    const savedProfile = localStorage.getItem("userProfile");
    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "SalatEh",
          status: "",
          focus: "",
          Bio: "",
        };
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    eventInput: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = eventInput.target;

    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleStartEdit = () => {
    setBackUp({ ...user });
    setEdit(true);
  };

  useEffect(() => {
    if (edit) {
      nameInputRef.current?.focus();
    }
  }, [edit]);

  const handleCancel = () => {
    setItem(backUp);
    setEdit(false);
  };
  const isInvalid =
    user.name.trim().length > 15 ||
    user.focus.trim().length > 30 ||
    user.status.trim().length > 10 ||
    user.name.trim().length <= 0;

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    setEdit(false);
  };

  return {
    nameInputRef,
    loading,
    edit,
    user,
    isInvalid,
    handleChange,
    handleCancel,
    handleSave,
    handleStartEdit,
  };
}
