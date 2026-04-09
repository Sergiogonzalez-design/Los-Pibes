const items = [
  { k: "Height", v: "6'0\"" },
  { k: "Weight", v: "165 lbs" },
  { k: "Position", v: "Midfielder" },
  { k: "Hometown", v: "Buenos Aires, Argentina" },
];

export default function ThiagoPlayerInfoBar() {
  return (
    <section
      id="stats"
      className="border-y border-white/10 bg-zinc-900/50 py-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.k} className="text-center sm:text-left">
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
