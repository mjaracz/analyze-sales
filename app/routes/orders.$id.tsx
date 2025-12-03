import { useLoaderData, useNavigation, useParams } from 'react-router';
import SpinnerLoader from '../components/SpinnerLoader';
import type { SalesData } from '~/types';
import salesRaw from '../data/sales.json?raw';
import { delay } from '~/utils/delay';
import { useLocation, Link } from 'react-router';

export const loader = async (): Promise<SalesData> => {
  await delay(120);
  const parsed: SalesData = JSON.parse(salesRaw);
  return parsed;
};

export default function OrderDetails() {
  const data: SalesData = useLoaderData();

  const navigation = useNavigation();
  const isPending = navigation.state === 'loading';

  const { id } = useParams();
  const numericId = Number(id);
  const location = useLocation();

  if (isPending) return <SpinnerLoader />;

  const stateRow = (location && location.state) || undefined;

  const row =
    stateRow ??
    (Array.isArray(data)
      ? data.find((r) => Number(r.order_status_id) === numericId)
      : undefined);

  if (!row) {
    return (
      <div className="gradient_bg p-8 text-white">
        <h1 className="text-3xl font-bold gradient_text_accent">
          Order Not Found
        </h1>
        <p className="text-slate-300 mt-2">No data exists for this order ID.</p>
      </div>
    );
  }

  return (
    <div className="gradient_bg p-8 text-white space-y-6">
      <h1 className="text-2xl font-bold gradient_text_accent">Order Details</h1>

      <div className="card space-y-3 text-white">
        <p>
          <strong>Date:</strong> {row.date}
        </p>
        <p>
          <strong>Channel:</strong> {row.channel_name || 'Unknown'}
        </p>
        <p>
          <strong>Revenue:</strong> {row.sum_sales} PLN
        </p>
        <p>
          <strong>Orders Count:</strong> {row.count_orders}
        </p>
        <p>
          <strong>Status ID:</strong> {row.order_status_id}
        </p>
      </div>
      <div>
        <Link
          to="/orders"
          className="text-ms font-semibold gradient_text_accent hover:underline"
        >
          ← Back to orders
        </Link>
      </div>
    </div>
  );
}
