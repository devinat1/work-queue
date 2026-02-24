import Link from "next/link";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import { SignUpForm } from "@/components/SignUpForm";
import { getSession } from "@helpers/api/auth";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
};

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Create Account - Queue Manager</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="flex flex-col gap-6 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex flex-col gap-2 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Create Account
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Get started with Queue
            </div>
          </div>

          <SignUpForm />

          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <span>Already have an account? </span>
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
