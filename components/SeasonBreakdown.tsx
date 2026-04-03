const seasons = [
  {
    year: "2024–25",
    school: "George Mason",
    conf: "A-10",
    apps: "—",
    goals: "—",
    ast: "—",
    note: "Graduate season (MBA)",
  },
  {
    year: "2023",
    school: "Iona",
    conf: "MAAC",
    apps: "20",
    goals: "4",
    ast: "5",
    note: "MAAC Championship MVP",
  },
  {
    year: "2022",
    school: "Iona",
    conf: "MAAC",
    apps: "18",
    goals: "3",
    ast: "4",
    note: "All-MAAC",
  },
  {
    year: "2021",
    school: "Iona",
    conf: "MAAC",
    apps: "17",
    goals: "2",
    ast: "3",
    note: "Starter",
  },
];

export default function SeasonBreakdown() {
  return (
    <section id="seasons" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Season breakdown
        </h2>
        <p className="mt-2 font-body text-secondary-foreground">
          Career numbers by year — update with official NCAA stats as needed.
        </p>
        <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 font-body font-semibold text-primary">
                  Season
                </th>
                <th className="px-4 py-3 font-body font-semibold">School</th>
                <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                <th className="px-4 py-3 font-body font-semibold text-center">
                  GP
                </th>
                <th className="px-4 py-3 font-body font-semibold text-center">
                  G
                </th>
                <th className="px-4 py-3 font-body font-semibold text-center">
                  A
                </th>
                <th className="px-4 py-3 font-body font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map((s) => (
                <tr
                  key={s.year}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {s.year}
                  </td>
                  <td className="px-4 py-3 text-secondary-foreground">
                    {s.school}
                  </td>
                  <td className="px-4 py-3 text-secondary-foreground">
                    {s.conf}
                  </td>
                  <td className="px-4 py-3 text-center">{s.apps}</td>
                  <td className="px-4 py-3 text-center">{s.goals}</td>
                  <td className="px-4 py-3 text-center">{s.ast}</td>
                  <td className="px-4 py-3 text-secondary-foreground">
                    {s.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
