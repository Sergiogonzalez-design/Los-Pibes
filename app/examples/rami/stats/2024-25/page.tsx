import type { Metadata } from "next";
import LosPibesFooter from "@/components/LosPibesFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Pablo Ramirez — 2024/25 Stats",
  description: "Match-by-match stats for Pablo Ramirez Moreno at Leganés B, 2024/25 season.",
};

const matches = [
  { date: "27 Abr", home: "LEG", away: "LRZ", score: "1–2", min: 64  },
  { date: "19 Abr", home: "CAN", away: "LEG", score: "0–3", min: 90  },
  { date: "13 Abr", home: "LEG", away: "ALC", score: "1–1", min: 90  },
  { date: "22 Feb", home: "LEG", away: "ALA", score: "0–0", min: 32  },
  { date: "02 Feb", home: "VAL", away: "LEG", score: "1–1", min: 90  },
  { date: "18 Ene", home: "ALC", away: "LEG", score: "1–2", min: 75  },
  { date: "12 Ene", home: "ADP", away: "LEG", score: "1–3", min: 88  },
  { date: "21 Dic", home: "LEG", away: "VIL", score: "1–2", min: 90  },
  { date: "15 Dic", home: "LRZ", away: "LEG", score: "2–4", min: 90  },
  { date: "07 Dic", home: "LEG", away: "CAN", score: "6–1", min: 90  },
  { date: "30 Nov", home: "ALC", away: "LEG", score: "2–2", min: 44  },
  { date: "17 Nov", home: "ALC", away: "LEG", score: "1–0", min: 89  },
  { date: "10 Nov", home: "LEG", away: "RVB", score: "0–3", min: 75  },
  { date: "03 Nov", home: "CPO", away: "LEG", score: "3–3", min: 90  },
  { date: "27 Oct", home: "TRC", away: "LEG", score: "2–2", min: 28  },
  { date: "19 Oct", home: "LEG", away: "CAR", score: "0–0", min: 14  },
  { date: "13 Oct", home: "ALA", away: "LEG", score: "0–4", min: 14  },
  { date: "06 Oct", home: "LEG", away: "ATM", score: "1–0", min: 90  },
  { date: "29 Sep", home: "GAL", away: "LEG", score: "1–1", min: 90  },
  { date: "21 Sep", home: "LEG", away: "VAL", score: "1–2", min: 90  },
  { date: "15 Sep", home: "ARA", away: "LEG", score: "1–0", min: 90  },
  { date: "08 Sep", home: "LEG", away: "ALC", score: "4–0", min: 90  },
  { date: "28 Ago", home: "LEG", away: "CDT", score: "0–1", min: 90  },
];

export default function RamiStats2425Page() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.80) 100%), url('/rami perfil.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 72px",
        backgroundAttachment: "scroll",
      }}
    >
      <SiteHeader
        backHref="/examples/rami"
        backAriaLabel="Back to Rami's profile"
        menuLabel="Menu"
        badge="PR15"
        items={[
          { type: "link", href: "/examples/rami", label: "Profile" },
          { type: "link", href: "/examples/rami/stats/2025-26", label: "2025/26" },
          { type: "link", href: "/examples/rami/stats/2024-25", label: "2024/25", active: true },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">Leganés B · Tercera Federación</p>
        <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          2024 / 25 Season
        </h1>

        {/* Match log */}
        <div className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full font-body text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-black/30">
                <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Date</th>
                <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Match</th>
                <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Score</th>
                <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Min</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, i) => (
                <tr key={i} className="border-b border-white/5 bg-black/10 transition-colors hover:bg-black/25">
                  <td className="px-4 py-3 text-secondary-foreground whitespace-nowrap">{m.date}</td>
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                    {m.home} <span className="text-secondary-foreground">vs</span> {m.away}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-foreground">{m.score}</td>
                  <td className="px-4 py-3 text-center text-secondary-foreground">{m.min > 0 ? `${m.min}'` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body mt-4 text-xs text-secondary-foreground">Source: BeSoccer</p>
      </section>

      <LosPibesFooter />
    </div>
  );
}

