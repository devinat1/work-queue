import Link from "next/link";
import { SignUpForm } from "@/components/SignUpForm";
import { getSession } from "@/lib/auth-helpers";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">Create Account</div>
          <div className="text-gray-600 dark:text-gray-400 mt-1">Get started with Queue</div>
        </div>

        <SignUpForm />

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <span>Already have an account? </span>
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
