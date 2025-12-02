import type { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface RevenueLineChartProps {
  data: { date: string; sum: number }[];
}

const RevenueLineChart: FC<RevenueLineChartProps> = ({ data }) => {
  return (
    <div className="card">
      <h3 className="section-title">Daily Revenue (Line)</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="sum" stroke="#38bdf8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueLineChart;
