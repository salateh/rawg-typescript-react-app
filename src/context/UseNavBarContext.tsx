// import { createContext, useContext, useState } from "react";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// interface NavBarContextType {
//   page: "games" | undefined;
//   togglePage: () => void;
// }

// export const NavBarContext = createContext<NavBarContextType>({
//   page: "games",
//   togglePage: () => {},
// });

// export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
//   const [page, setPage] = useState<"games">("games");
//   const togglePage = () => {
//     setPage((prev) => (prev === "games" ?  : "games"));
//   };

//   return (
//     <NavBarContext.Provider value={{ page, togglePage }}>
//       {children}
//     </NavBarContext.Provider>
//   );
// };

// export function useNavBar() {
//   const context = useContext(NavBarContext);
//   //   if (context === undefined) return;

//   return context;
// }
export {};
