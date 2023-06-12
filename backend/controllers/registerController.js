import { NextResponse } from "next/server";

export const userRegister = (request, response) => {
  console.log("user registeration");
  return new NextResponse("User register", {
    status: 200,
  });
};
