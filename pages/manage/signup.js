import React, { useState } from "react";
import dynamic from "next/dynamic";
const SignInFormDynamic = dynamic(() => import("@/components/formSignup"), {
  ssr: false,
});
const SignUpPage = () => {
  return <SignInFormDynamic />;
};

export default SignUpPage;
