import React from "react";
import { UserContext } from "@context/index";
import { UserType } from "@type/index";

type ContextProviderProps = {
  user: UserType | null;
  children: JSX.Element | JSX.Element[];
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  user,
  children,
}) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
