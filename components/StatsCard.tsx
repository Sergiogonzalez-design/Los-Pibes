type Props = {
  value: string;
  label: string;
};

export default function StatsCard({ value, label }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-center backdrop-blur-sm sm:px-4">
      <p className="font-heading text-xl font-bold text-primary sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 font-body text-[10px] uppercase tracking-wider text-secondary-foreground sm:text-xs">
        {label}
      </p>
    </div>
  );
}
