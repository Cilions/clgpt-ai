"use client";

import { SignIn } from "@/components/sign-in";

export default function AuthButton() {
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