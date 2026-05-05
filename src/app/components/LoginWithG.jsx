'use client';

import { authClient } from "@/lib/auth-client";

export default function LoginWithG() {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data, "data");
  };

    const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log(data, "data");
  };
  return (
    <div>
      <button className="bg-blue-400 rounded-2xl p-2" onClick={handleGoogleSignIn}>
        Login with Google
      </button>
       <button className="bg-green-400 rounded-2xl p-2" onClick={handleGithubSignIn}>
        Login with Github
      </button>
    </div>
  );
}