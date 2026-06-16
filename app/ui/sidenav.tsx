import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon, DocumentDuplicateIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-50 border-r border-gray-200">
      <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40" href="/dashboard">
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 mt-4">
        <Link href="/dashboard" className="flex h-[48px] items-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 border border-gray-100">
          <DocumentDuplicateIcon className="w-6" />
          <p className="hidden md:block">Overview</p>
        </Link>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-red-50 hover:text-red-600 border border-gray-100 md:justify-start">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
