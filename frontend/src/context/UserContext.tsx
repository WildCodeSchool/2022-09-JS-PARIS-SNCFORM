import { UserType } from "@type/userTypes";
import { createContext, useContext } from "react";

export const UserContext = createContext<UserType | null>(null);

export const useUserContext = () => useContext(UserContext);
