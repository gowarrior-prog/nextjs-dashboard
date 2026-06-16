import Search from '@/app/ui/search';
import Table from '@/app/ui/table';
import { CreateInvoice } from '@/app/ui/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices', // Yeh layout ke template mein ja kar "Invoices | Acme Dashboard" ban jayega
};


export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-gray-900">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl font-bold text-gray-800`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      {/* Har naye search query par table re-render hoga */}
      <Suspense key={query} fallback={<RevenueChartSkeleton />}>
        <Table query={query} />
      </Suspense>
    </div>
  );
}
