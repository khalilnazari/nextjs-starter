import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("User Data", { status: 201 });
};
