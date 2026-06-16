'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Terminal ya console par error log karega
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 bg-white p-6 rounded-xl border border-gray-100 text-gray-900">
      <h2 className="text-center text-xl font-semibold text-red-600">Something went wrong!</h2>
      <p className="text-gray-500 text-sm max-w-md text-center">
        Database connection issue ya dynamic data stream crash hone ki wajah se yeh error aaya hai.
      </p>
      <button
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-500"
        onClick={() => reset()} // User page ko dubara recover karne ki koshish kar sakta hai
      >
        Try again
      </button>
    </main>
  );
}
