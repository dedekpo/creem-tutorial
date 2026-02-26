import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Thank you for your purchase!</h1>
      <br />
      <Link href="/protected">Go to protected page</Link>
    </div>
  );
}
