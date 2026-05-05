import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-4 bg-blue-400 p-4 m-4 font-bold justify-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/my-tiles">MY Tiles</Link>
      <Link href="/login">login</Link>
      <Link href="/register">register</Link>
    </div>
  );
}
