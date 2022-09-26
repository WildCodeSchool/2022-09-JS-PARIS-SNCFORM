import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { TokenType } from "@type/index";
import { useLocation } from "react-router-dom";

export const useToken = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    if (!token) {
      setIsLogin(false);
    } else {
      const decodedToken: TokenType = jwtDecode(token);
      const isTokenExpired = Date.now() < decodedToken.exp * 1000;
      setUserId(decodedToken.sub);
      setIsLogin(isTokenExpired);
    }
  }, [location, token]);

  return {
    userId,
    token,
    isLogin,
  };
};
