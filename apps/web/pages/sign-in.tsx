import Link from "next/link";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import { SignInForm } from "@/components/SignInForm";
import { getSession } from "@helpers/api/auth";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
};

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign In - Queue Manager</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Sign In
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back to Queue
            </div>
          </div>

          <SignInForm />

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <span>Don&apos;t have an account? </span>
            <Link href="/sign-up" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
