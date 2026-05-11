const RACING_PROFILE =
  "https://www.racingclub.com.ar/futbol/plantel-femenino/jugador/1570_holzheier/";
const BESOCCER =
  "https://es.besoccer.com/jugador/partidos/a-holzheier-3265969";

const seasons = [
  {
    year: "2023–present",
    school: "Racing Club",
    schoolUrl: RACING_PROFILE,
    conf: "Argentina",
    apps: "66",
    goals: "20",
    ast: "—",
    note: "At Racing since August 2023 — club stats (BeSoccer / official profile).",
  },
  {
    year: "2023",
    school: "Grêmio (Brazil)",
    schoolUrl: BESOCCER,
    conf: "Brasil",
    apps: "—",
    goals: "—",
    ast: "—",
    note: "Spell in Brazil before joining Racing.",
  },
  {
    year: "2021/22",
    school: "River Plate",
    schoolUrl: BESOCCER,
    conf: "Argentina",
    apps: "—",
    goals: "—",
    ast: "—",
    note: "Copa Federal 2022 with River Plate.",
  },
  {
    year: "Senior",
    school: "Argentina",
    conf: "National team",
    apps: "25",
    goals: "3",
    ast: "—",
    note: "Selección absoluta — 25 PJ, 3 goals.",
  },
] as const;

export default function AgostinaSeasonBreakdown() {
  return (
    <section id="seasons" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Club & seasons
        </h2>
        <p className="mt-2 max-w-3xl font-body text-secondary-foreground">
          Summary from public profiles. Primary sources:{" "}
          <a
            href={RACING_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            Racing Club — Agostina Holzheier
          </a>
          ,{" "}
          <a
            href={BESOCCER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            BeSoccer
          </a>
          .
        </p>
        <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 font-body font-semibold text-primary">
                  Period
                </th>
                <th className="px-4 py-3 font-body font-semibold">Club</th>
                <th className="px-4 py-3 font-body font-semibold">League</th>
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
                    {"schoolUrl" in s && s.schoolUrl ? (
                      <a
                        href={s.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-2 hover:underline"
                      >
                        {s.school}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">
                        {s.school}
                      </span>
                    )}
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
