export default function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-10 h-10 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" />
    </div>
  );
}
