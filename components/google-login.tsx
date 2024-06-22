import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export function GoogleLogin() {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <Button onClick={handleGoogleLogin} className="w-full">
      Sign in with Google
    </Button>
  );
}