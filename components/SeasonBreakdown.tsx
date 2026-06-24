const GMU_ROSTER =
  "https://gomason.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/9251";
const IONA_ROSTER =
  "https://ionagaels.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/7622";

const seasons = [
  {
    year: "2025",
    school: "George Mason",
    schoolUrl: GMU_ROSTER,
    conf: "A-10",
    apps: "13",
    goals: "0",
    ast: "5",
    note:
      "Graduate student · MSBA (Business Analytics) · 8 starts · 5 pts · per GMU 2025 game-by-game stats",
  },
  {
    year: "2024",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "18",
    goals: "9",
    ast: "3",
    note:
      "Started all 18 · 21 pts (led team) · MAAC Championship MVP · All-MAAC First Team · All-ECAC First Team",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "16",
    goals: "1",
    ast: "0",
    note: "12 starts · All-MAAC Second Team · MAAC All-Academic",
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    apps: "17",
    goals: "2",
    ast: "5",
    note: "Started all 17 · Led team in assists (5) · All-MAAC Second Team",
  },
] as const;

export default function SeasonBreakdown() {
  return (
    <section id="seasons" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Season breakdown
        </h2>
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
