import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userData", {});

  const logOut = () => {
    setUserData("empty");
    localStorage.removeItem("userData");
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
