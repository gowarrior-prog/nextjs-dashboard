import Image from 'next/image';

export default function LatestInvoices({ latestInvoices }: { latestInvoices: any[] }) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl font-bold">Latest Invoices</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => (
            <div key={invoice.customer_id || i} className="flex flex-row items-center justify-between py-4 border-b last:border-0">
              <div className="flex items-center">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">Amount Tracked</p>
                  <p className="text-sm text-gray-500">{invoice.date}</p>
                </div>
              </div>
              <p className="truncate text-sm font-medium md:text-base">${invoice.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
