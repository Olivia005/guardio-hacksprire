"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      {/* Clerk will handle nested segments with a catch-all route; no explicit routing prop needed */}
      <SignUp />
    </main>
  );
};

export default SignUpPage;
