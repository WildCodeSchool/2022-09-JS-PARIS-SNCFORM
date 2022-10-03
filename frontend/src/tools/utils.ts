import { TokenType } from "@type/index";
import jwtDecode from "jwt-decode";

export const tokenApp = () => {
  const token = sessionStorage.getItem("token");
  let user;
  let id;
  if (token) {
    const decodedToken: TokenType = jwtDecode(token);
    user = decodedToken.user;
    id = decodedToken.sub;
  }
  return {
    token,
    id,
    user,
  };
};

export const useHeaders = () => {
  const { token, id } = tokenApp();

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  return {
    headers,
    id,
  };
};
