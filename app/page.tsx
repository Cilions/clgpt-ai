"use client";

import { SignIn } from "@/components/sign-in";

export default function AuthButton() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <p className="mb-4">Not signed in</p>
      <SignIn />
    </div>
  );
}