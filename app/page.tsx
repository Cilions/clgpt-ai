"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SignIn } from "@/components/sign-in";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    router.push("/chat");
  }
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      Not signed in <br />
      <SignIn />
    </div>
  );
}