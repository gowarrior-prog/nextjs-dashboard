import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function RevenueChart({ revenue }: { revenue: { month: string; revenue: number }[] }) {
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);
  if (!revenue || revenue.length === 0) return <p className="mt-4 text-gray-400">No data available.</p>;

  return (
    <div className="w-full md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl font-bold">Recent Revenue</h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex" style={{ height: `${chartHeight}px` }}>
            {yAxisLabels.map((label) => <p key={label}>{label}</p>)}
          </div>
          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div className="w-full rounded-md bg-blue-500" style={{ height: `${(chartHeight / topLabel) * month.revenue}px` }} />
              <p className="text-xs text-gray-400">{month.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
