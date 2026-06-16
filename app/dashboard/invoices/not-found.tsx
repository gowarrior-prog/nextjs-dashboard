import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

// Explicit default export layout standard use kar rahe hain
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 bg-white p-12 rounded-xl border border-gray-100 text-gray-900">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold mt-2">404 Not Found</h2>
      <p className="text-gray-500 text-sm">Requested invoice data baseline database mein maujood nahi hai.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-500"
      >
        Go Back
      </Link>
    </main>
  );
}
