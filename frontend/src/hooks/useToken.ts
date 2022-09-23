import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { TokenType } from "@type/index";
import { useLocation, useNavigate } from "react-router-dom";

export const useToken = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  console.log("token:", token);
  const location = useLocation();

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    console.log("token in useEffect:", token);
    if (!token) {
      setIsLogin(false);
    } else {
      const decodedToken: TokenType = jwtDecode(token);
      const isTokenExpired = Date.now() < decodedToken.exp * 1000;
      setUserId(decodedToken.sub);
      setIsLogin(isTokenExpired);
    }
  }, [location]);

  return {
    userId,
    token,
    isLogin,
  };
};
