import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import RevenueChart from '@/app/ui/revenue-chart';
import LatestInvoices from '@/app/ui/latest-invoices';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="mb-4 text-xl md:text-2xl font-bold text-gray-800">
        Dashboard Overview
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
