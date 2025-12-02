import type { SalesData } from '../types';

export function useSalesData(rows: SalesData, isPending: boolean) {
  if (isPending) {
    return {
      isPending: true,
      totalRevenue: 0,
      totalOrders: 0,
      byDate: [],
      byChannel: [],
      latestRows: [],
    };
  }

  const totalRevenue = rows.reduce((acc, r) => acc + r.sum_sales, 0);
  const totalOrders = rows.reduce((acc, r) => acc + r.count_orders, 0);

  const byDateMap: Record<string, { date: string; sum: number }> = {};
  rows.forEach((r) => {
    if (!byDateMap[r.date]) byDateMap[r.date] = { date: r.date, sum: 0 };
    byDateMap[r.date].sum += r.sum_sales;
  });

  const byDate = Object.values(byDateMap).sort((a, b) => a.date.localeCompare(b.date));

  const byChannelMap: Record<string, { name: string; sum: number }> = {};
  rows.forEach((r) => {
    const key = r.channel_name || 'Unknown';
    if (!byChannelMap[key]) byChannelMap[key] = { name: key, sum: 0 };
    byChannelMap[key].sum += r.sum_sales;
  });

  const byChannel = Object.values(byChannelMap);

  const latestRows = [...rows].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 50);

  return {
    isPending: false,
    totalRevenue,
    totalOrders,
    byDate,
    byChannel,
    latestRows,
  };
}
