const IONA_ROSTER =
  "https://ionagaels.com/sports/mens-soccer/roster/nacho-alfaro-monge/7135";
const FAU_ROSTER =
  "https://fausports.com/sports/mens-soccer/roster/nacho-alfaro/18064";

const seasons = [
  {
    year: "2024",
    school: "FAU",
    schoolUrl: FAU_ROSTER,
    conf: "AAC",
    gs: "11",
    gaa: "1.28",
    sv: "33",
    so: "3",
    note: "SV% .717 · W4–L4–T3 · 917 min played",
  },
  {
    year: "2023",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gs: "15",
    gaa: "1.01",
    sv: "46",
    so: "3",
    note: "Golden Glove · All-MAAC First Team · MAAC All-Academic",
  },
  {
    year: "2022",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gs: "17",
    gaa: "1.12",
    sv: "58",
    so: "7",
    note: "SV% .753 · W7–L5–T5 · 7 SO tied most in MAAC · MAAC All-Academic",
  },
  {
    year: "2021",
    school: "Iona",
    schoolUrl: IONA_ROSTER,
    conf: "MAAC",
    gs: "7",
    gaa: "1.14",
    sv: "19",
    so: "1",
    note: "SV% .704 · W3–L4–T0 · Freshman · MAAC Defensive Player of the Week",
  },
] as const;

export default function NachoSeasonBreakdown() {
  return (
    <section id="seasons" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Season breakdown
        </h2>
        <p className="mt-2 max-w-3xl font-body text-secondary-foreground">
          Official profiles:{" "}
          <a
            href={IONA_ROSTER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            Iona Gaels
          </a>{" "}
          ·{" "}
          <a
            href={FAU_ROSTER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            FAU Owls
          </a>
        </p>
        <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 font-body font-semibold text-primary">Season</th>
                <th className="px-4 py-3 font-body font-semibold">School</th>
                <th className="px-4 py-3 font-body font-semibold">Conf.</th>
                <th className="px-4 py-3 font-body font-semibold text-center">GS</th>
                <th className="px-4 py-3 font-body font-semibold text-center">GAA</th>
                <th className="px-4 py-3 font-body font-semibold text-center">SV</th>
                <th className="px-4 py-3 font-body font-semibold text-center">SO</th>
                <th className="px-4 py-3 font-body font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map((s) => (
                <tr
                  key={`${s.year}-${s.school}`}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3 font-medium text-foreground">{s.year}</td>
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
                  <td className="px-4 py-3 text-secondary-foreground">{s.conf}</td>
                  <td className="px-4 py-3 text-center">{s.gs}</td>
                  <td className="px-4 py-3 text-center">{s.gaa}</td>
                  <td className="px-4 py-3 text-center">{s.sv}</td>
                  <td className="px-4 py-3 text-center">{s.so}</td>
                  <td className="px-4 py-3 text-secondary-foreground">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-body text-xs text-zinc-500">
          GS = games started · GAA = goals against average · SV = saves · SO = shutouts
        </p>
      </div>
    </section>
  );
}
