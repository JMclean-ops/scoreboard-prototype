
export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div className="bg-green-500 h-4" style={{ width: `${value}%` }} />
    </div>
  );
}
