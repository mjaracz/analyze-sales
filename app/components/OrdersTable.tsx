import type { FC } from 'react';
import type { SalesRow } from '../types';

interface OrdersTableProps {
  rows: SalesRow[];
}

const OrdersTable: FC<OrdersTableProps> = ({ rows }) => {
  return (
    <div className="card p-0 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-white/10 backdrop-blur-sm">
          <tr className="border-b border-white/10">
            <th className="p-3 text-slate-300 font-medium">Date</th>
            <th className="p-3 text-slate-300 font-medium">Channel</th>
            <th className="p-3 text-slate-300 font-medium">Revenue</th>
            <th className="p-3 text-slate-300 font-medium">Orders</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-white/5 hover:bg-white/10 transition-colors"
            >
              <td className="p-3">{r.date}</td>
              <td className="p-3">{r.channel_name}</td>
              <td className="p-3">{r.sum_sales} PLN</td>
              <td className="p-3">{r.count_orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
