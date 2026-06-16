import AcmeLogo from '@/app/ui/acme-logo';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen bg-gray-50 text-gray-900">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-600 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <form className="space-y-3 rounded-lg bg-white px-6 pb-4 pt-8 border border-gray-200">
          <h1 className="mb-3 text-2xl font-bold">Please log in to continue.</h1>
          <div className="w-full">
            <div>
              <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">Email</label>
              <input className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500 bg-white" id="email" type="email" name="email" placeholder="Enter your email address" required />
            </div>
            <div className="mt-4">
              <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">Password</label>
              <input className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500 bg-white" id="password" type="password" name="password" placeholder="Enter password" required />
            </div>
          </div>
          <button type="submit" className="mt-4 flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white transition-colors hover:bg-blue-500">
            Log in
          </button>
        </form>
      </div>
    </main>
  );
}
