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

export default function RegisterPage() {
  return (
    <PageWrapper>
      <div className="font-bold mb-5">Register Page</div>
    </PageWrapper>
  );
}
