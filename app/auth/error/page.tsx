// app/auth/error/page.tsx
'use client';

export default function ErrorPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const errorMessages: Record<string, string> = {
    RefreshAccessTokenError: 'Your session expired. Please sign in again.',
    Callback: 'Authentication failed. Please try again.',
    default: 'An unknown error occurred.',
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-xl font-bold text-red-600 mb-4">Error</h1>
        <p className="mb-6">
          {errorMessages[searchParams.error || 'default']}
        </p>
        <a
          href="/api/auth/signin"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Sign In Again
        </a>
      </div>
    </div>
  );
}