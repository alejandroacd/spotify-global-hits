// app/auth/error/page.tsx
'use client';

import Link from "next/link";
import { type NextPage } from "next";

interface ErrorPageProps {
  searchParams: {
    error?: string;
  };
}

const ErrorPage: NextPage<ErrorPageProps> = ({ searchParams }) => {
  const errorMessages: Record<string, string> = {
    RefreshAccessTokenError: 'Your session expired. Please sign in again.',
    Callback: 'Authentication failed. Please try again.',
    NoRefreshToken: 'Session expired. Please sign in again.',
    OAuthAccountNotLinked: 'This account is already linked to another user.',
    default: 'An unknown authentication error occurred.',
  };

  const error = searchParams?.error || 'default';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Authentication Error
        </h1>
        <p className="mb-6 text-gray-700">
          {errorMessages[error]}
        </p>
        <Link
          href="/api/auth/signin"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors text-center"
        >
          Sign In Again
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;