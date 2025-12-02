import type { SalesData } from '../types';
import salesRaw from '../data/sales.json?raw';

import { useLoaderData, useNavigation } from 'react-router';

import { useSalesData } from '../hooks/useSalesData';
import Spinner from '../components/SpinnerLoader';
import SummaryCard from '../components/SummaryCard';
import RevenueLineChart from '../components/RevenueLineChart';
import RevenueBarChart from '../components/RevenueBarChart';
import ChannelDonutChart from '../components/ChannelDonutChart';
import OrdersTable from '../components/OrdersTable';
import { delay } from '~/utils/delay';

export const loader = async (): Promise<SalesData> => {
  await delay(200);
  const parsed = JSON.parse(salesRaw) as SalesData;
  return parsed;
};

export const meta = () => {
  return [
    {
      title: 'Dashboard • Sales Insights',
    },
  ];
};

export default function Dashboard() {
  const salesData: SalesData = useLoaderData();

  const navigation = useNavigation();
  const isPending = navigation.state === 'loading';

  const { isPending: hookPending, totalRevenue, totalOrders, byDate, byChannel, latestRows } = useSalesData(salesData, isPending);

  if (hookPending) {
    return <Spinner />;
  }

  return (
    <div className="gradient_bg min-h-screen p-6 text-white space-y-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold gradient_text_accent">Sales Dashboard</h1>
        <p className="text-sm text-slate-300 mt-2">Overview of the loaded sales dataset (simulated static loader)</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Total Revenue" value={`${totalRevenue.toFixed(2)} PLN`} />
        <SummaryCard title="Total Orders" value={totalOrders} />
        <SummaryCard title="Unique Channels" value={byChannel.length} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueLineChart data={byDate} />
        </div>

        <ChannelDonutChart data={byChannel} />
      </div>

      <RevenueBarChart data={byDate} />

      <div className="mt-10">
        <h2 className="section-title mb-2">All Orders</h2>
        <OrdersTable rows={latestRows.length ? latestRows : salesData} />
      </div>
    </div>
  );
}
