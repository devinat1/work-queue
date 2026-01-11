import Link from "next/link";
import { SignInForm } from "@/components/SignInForm";
import { getSession } from "@/lib/auth-helpers";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-gray-900">Sign In</div>
          <div className="text-gray-600 mt-1">Welcome back to Queue</div>
        </div>

        <SignInForm />

        <div className="mt-6 text-center text-sm text-gray-600">
          <span>Don&apos;t have an account? </span>
          <Link href="/sign-up" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
