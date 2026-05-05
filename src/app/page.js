"use client";

import { authClient } from "@/lib/auth-client";
import avatar from "@/assets/avatar.png";

import Navbar from "./components/Navbar";
import Image from "next/image";
import LoginWithG from "./components/LoginWithG";

export default function Home() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const getAvatarSrc = () => {
    if (!user?.image || typeof user.image !== "string") {
      return avatar;
    }

    try {
      const url = new URL(user.image);
      if (url.protocol !== "https:" && url.protocol !== "http:") {
        return avatar;
      }
      return user.image;
    } catch (error) {
      return avatar;
    }
  };

  const avatarSrc = getAvatarSrc();

  console.log(user);
  return (
    <div>
      <LoginWithG />
      {isPending ? (
        <p className="bg-amber-400 p-2 rounded-2xl">Loading...</p>
      ) : user ? (
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-bold text-2xl">{user?.name}</h1>

          <Image
            src={avatarSrc || avatar}
            width={100}
            height={100}
            alt="user avatar"
          />

          <button
            className="bg-blue-400 text-white rounded-2xl p-2"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <p>user doesn't exist</p>
      )}
    </div>
  );
}
