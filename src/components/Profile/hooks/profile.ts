import { SetStateAction, useEffect, useState } from "react";

export function useProfile() {
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState<React.SetStateAction<boolean>>(false);

  const [item, setItem] = useState<{
    name: string;
    preName: string;
    status: string;
    focus: string;
    Bio: string;
  }>(() => {
    const savedProfile = localStorage.getItem("userProfile");
    const savedProfileObj = savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "SalatEh",
          preName: "",
          status: "",
          focus: "",
          Bio: "",
        };

    return savedProfileObj;
  });
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(item));
  }, [item]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (value.trim().length > 15) {
      return;
    }

    setItem((prev) => ({ ...prev, [name]: value }));
  };
   const accept = ()=>{
    setItem((prev) => ({ ...prev, name: item.preName ? item.preName : "Non"}));
    setEdit(false)
   }

  return {
    loading,
    edit,
    setEdit,
    item,
    handleChange,
    accept
  };
}
