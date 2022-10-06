import { UserType } from "@type/userTypes";
import { createContext, useContext } from "react";

type UserContextType = { user: UserType | null };
export const UserContext = createContext<UserContextType>({ user: null });

export const useUserContext = () => useContext(UserContext);
