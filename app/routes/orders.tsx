import SpinnerLoader from '../components/SpinnerLoader';
import type { SalesData } from '~/types';
import { delay } from '~/utils/delay';
import salesRaw from '../data/sales.json?raw';
import { useLoaderData, useNavigation, Link } from 'react-router';

export const loader = async (): Promise<SalesData> => {
  await delay(120);
  const parsed: SalesData = JSON.parse(salesRaw);
  return parsed;
};

export default function OrdersPage() {
  const data: SalesData = useLoaderData();

  const navigation = useNavigation();
  const isPending = navigation.state === 'loading';

  if (isPending) {
    return (
      <div className="gradient_bg min-h-screen p-6 text-white space-y-8">
        <SpinnerLoader />
      </div>
    );
  }

  return (
    <div className="gradient_bg min-h-screen p-6 text-white space-y-8">
      <h1 className="text-3xl font-semibold gradient_text_accent">
        Orders Overview
      </h1>

      <div className="card p-4">
        <ul className="space-y-3">
          {data.slice(0, 40).map((row, i) => (
            <li key={i} className="p-0">
              <Link
                to={`/orders/${row.order_status_id}`}
                state={row}
                className="block p-3 rounded bg-white/5 hover:bg-white/10 transition"
              >
                <p className="font-medium">{row.date}</p>
                <p className="text-sm text-slate-300">
                  {row.channel_name || '—'} • {row.sum_sales} PLN •{' '}
                  {row.count_orders} orders
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
