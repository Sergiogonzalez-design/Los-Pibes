const IONA_ROSTER =
  "https://ionagaels.com/sports/mens-soccer/roster/thiago-cagna/7618";

const seasons = [
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "19",
    goals: "2",
    ast: "10",
    note:
      "18 starts · 14 pts · All-MAAC First Team (MID) · All-ECAC Second Team · MAAC All-Championship Team · MAAC All-Academic",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "15",
    goals: "5",
    ast: "2",
    note:
      "11 starts · 12 pts · All-MAAC First Team · MAAC All-Championship Team · MAAC All-Academic · three game-winning goals",
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "17",
    goals: "0",
    ast: "3",
    note: "12 starts · 3 pts · MAAC All-Academic",
  },
  {
    year: "2021",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "11",
    goals: "1",
    ast: "1",
    note:
      "4 starts · first collegiate goal (GW vs Quinnipiac) · MAAC All-Academic",
  },
  {
    year: "2020–21",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "5",
    goals: "0",
    ast: "0",
    note: "Freshman season",
  },
] as const;

export default function ThiagoSeasonBreakdown() {
  return (
    <section id="seasons" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Season breakdown
        </h2>
        <p className="mt-2 max-w-3xl font-body text-secondary-foreground">
          Numbers from the official Iona roster and season bios. School link:{" "}
          <a
            href={IONA_ROSTER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            Iona Men&apos;s Soccer — Thiago Cagna
          </a>
          .
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
                  key={`${s.year}-${s.school}`}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {s.year}
                  </td>
                  <td className="px-4 py-3 text-secondary-foreground">
                    <a
                      href={s.schoolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary underline-offset-2 hover:underline"
                    >
                      {s.school}
                    </a>
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
