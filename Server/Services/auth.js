import jwt from "jsonwebtoken";

import constants from "../Config/constants";
import Device from "../Models/Device";

export async function requireAuth(device) {
  if (!device) {
    throw new Error("Unauthorized!");
  }

  const me = await Device.findById(device._id);

  if (!me) {
    throw new Error("Unauthorized!");
  }

  return me;
}

export function decodeToken(token) {
  const arr = token.split(" ");

  if (arr[0] === "Bearer") {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error("Token not valid!");
}
