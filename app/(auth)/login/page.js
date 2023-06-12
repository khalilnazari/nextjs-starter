"use client";

import PageWrapper from "@/components/PageWrapper";
import Spinner from "@/components/Spinner";
import { signIn, signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata = {
  title: "Login page",
  description: "Login page description",
};

export default function LoginPage() {
  const params = useParams();
  console.log("params", params);

  const session = useSession();

  const handleSignin = () => {
    signIn("credentials", {
      email: "khalil@gmail.com",
      password: "1234",
      redirect: true,
      callbackUrl: "/",
    });
  };
  console.log("sesssion", session);

  if (session.status === "authenticated") {
    route.push("/profile");
  }

  if (session.status === "loading") {
    return <Spinner />;
  }

  const handleSignout = () => {
    signOut();
  };

  return (
    <PageWrapper>
      <div className="font-bold mb-5">Login Page</div>
      <div>
        {session.status === "authenticated" ? (
          <button onClick={handleSignout}>Logout</button>
        ) : (
          <button onClick={handleSignin}>Login</button>
        )}
      </div>
    </PageWrapper>
  );
}
