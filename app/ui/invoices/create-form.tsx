import Link from 'next/link';
import { UserCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Form({ customers }: { customers: any[] }) {
  return (
    <form className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-900">
      {/* Customer Name */}
      <div className="mb-4">
        <label htmlFor="customer" className="mb-2 block text-sm font-medium">Choose customer</label>
        <div className="relative">
          <select id="customer" name="customerId" className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 bg-white" defaultValue="">
            <option value="" disabled>Select a customer</option>
            {customers?.map((customer) => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </select>
          <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Invoice Amount */}
      <div className="mb-4">
        <label htmlFor="amount" className="mb-2 block text-sm font-medium">Choose an amount</label>
        <div className="relative mt-2 rounded-md">
          <input id="amount" name="amount" type="number" step="0.01" placeholder="Enter USD amount" className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 bg-white" />
          <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link href="/dashboard/invoices" className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">Cancel</Link>
        <button type="submit" className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500">Create Invoice</button>
      </div>
    </form>
  );
}
