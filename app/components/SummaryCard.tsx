interface SummaryCardProps {
  title: string;
  value: string | number;
}

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="card flex flex-col gap-1">
      <p className="text-sm text-slate-300">{title}</p>
      <p className="text-2xl font-semibold gradient_text_accent">{value}</p>
    </div>
  );
}
