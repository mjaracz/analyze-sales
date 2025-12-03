import type { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface RevenueBarChartProps {
  data: { date: string; sum: number }[];
}

const RevenueBarChart: FC<RevenueBarChartProps> = ({ data }) => {
  return (
    <div className="card">
      <h3 className="section-title">Daily Revenue (Bar)</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid
            stroke="rgba(255,255,255,0.05)"
            strokeDasharray="4 4"
          />
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Bar dataKey="sum" fill="url(#gradientBar)" radius={[6, 6, 0, 0]} />
          <defs>
            <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueBarChart;
