import { jwtDecode } from "jwt-decode";
import { TJwtPayload } from "../types";

export const verifyToken = (token: string): TJwtPayload => {
  return jwtDecode(token);
};
