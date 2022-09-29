import { Dispatch, SetStateAction } from "react";
import { UserType } from "./userTypes";

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type TokenType = {
  sub: number;
  iat: number;
  exp: number;
  user: Partial<UserType>;
};
