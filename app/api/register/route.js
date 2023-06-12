import { userRegister } from "@/backend/controllers/registerController";

export const POST = async (res, req) => {
  return userRegister(req, res);
};
