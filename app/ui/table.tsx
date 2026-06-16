import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({ query }: { query: string }) {
  const filteredInvoices = await fetchFilteredInvoices(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Amount</th>
                <th scope="col" className="px-3 py-5 font-medium">Date</th>
                <th scope="col" className="px-3 py-5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredInvoices?.map((invoice, idx) => (
                <tr key={idx} className="w-full border-b py-3 text-sm last-of-type:border-none">
                  <td className="whitespace-nowrap px-3 py-3">${invoice.amount}</td>
                  <td className="whitespace-nowrap px-3 py-3">{invoice.date}</td>
                  <td className="whitespace-nowrap px-3 py-3">{invoice.status}</td>
                </tr>
              ))}
              {filteredInvoices.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-400">No invoices found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
