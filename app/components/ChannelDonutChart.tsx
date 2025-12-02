import type { FC } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#38bdf8', '#818cf8', '#10b981', '#facc15', '#f472b6', '#f87171'];

interface ChannelDonutChartProps {
  data: { name: string; sum: number }[];
}

const ChannelDonutChart: FC<ChannelDonutChartProps> = ({ data }) => {
  return (
    <div className="card">
      <h3 className="section-title">Revenue by Channel</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="sum" nameKey="name" cx="50%" cy="50%" outerRadius={110} innerRadius={70} paddingAngle={2}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChannelDonutChart;
