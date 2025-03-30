// app/auth/error/page.tsx
'use client';

import Link from "next/link";

type ErrorCode = 
  | 'RefreshAccessTokenError' 
  | 'Callback' 
  | 'NoRefreshToken' 
  | 'OAuthAccountNotLinked'
  | 'default';

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const error = Array.isArray(searchParams.error) 
    ? searchParams.error[0]
    : searchParams.error;

  const errorMessages: Record<ErrorCode, string> = {
    RefreshAccessTokenError: 'Your session expired. Please sign in again.',
    Callback: 'Authentication failed. Please try again.',
    NoRefreshToken: 'Session expired. Please sign in again.',
    OAuthAccountNotLinked: 'This account is already linked to another user.',
    default: 'An unknown authentication error occurred.',
  };

  // Type-safe error message lookup
  const getErrorMessage = (code: string | undefined): string => {
    if (!code) return errorMessages.default;
    return errorMessages[code as ErrorCode] || errorMessages.default;
  };

  const message = getErrorMessage(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Authentication Error
        </h1>
        <p className="mb-6 text-gray-700">
          {message}
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
}