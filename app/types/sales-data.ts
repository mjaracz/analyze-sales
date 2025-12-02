export interface SalesRow {
  date: string;
  channel_type: string;
  channel_name: string;
  order_status_id: number;
  sum_sales: number;
  count_orders: number;
}

export type SalesData = SalesRow[];
