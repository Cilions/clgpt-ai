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
    <div style={{ 
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center"
    }}>
      <p style={{ marginBottom: "1rem" }}>Not signed in</p>
      <SignIn />
    </div>
  );
}