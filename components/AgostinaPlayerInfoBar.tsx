const items = [
  { k: "Height", v: "1.60 m" },
  { k: "Weight", v: "59 kg" },
  { k: "Position", v: "Forward / left wing" },
  { k: "Hometown", v: "Crespo, Entre Ríos" },
  { k: "Strong Foot", v: "Left" },
];

export default function AgostinaPlayerInfoBar() {
  return (
    <section
      id="stats"
      className="border-y border-white/10 bg-zinc-900/50 py-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.k} className="text-center">
            <p className="font-body text-xs uppercase tracking-widest text-primary">
              {item.k}
            </p>
            <p className="mt-1 font-body text-sm font-medium text-foreground">
              {item.v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
