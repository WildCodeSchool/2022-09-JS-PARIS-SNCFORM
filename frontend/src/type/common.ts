import { Dispatch, SetStateAction } from "react";

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type TokenType = {
  sub: number;
  iat: number;
  exp: number;
};
