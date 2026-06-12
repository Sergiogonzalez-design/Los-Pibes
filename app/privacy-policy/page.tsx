import LosPibesNavbar from "@/components/LosPibesNavbar";
import LosPibesFooter from "@/components/LosPibesFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Onix Media.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar backHref="/" />

      <section className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="font-body mt-2 text-sm text-secondary-foreground">
          Effective date: June 12, 2026
        </p>

        <div className="font-body mt-10 space-y-8 text-base leading-relaxed text-secondary-foreground">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-2">
              Aplicaciones Patrimoniales Moreia S.L., operating as ONIX Media ("we," "our," or "us"), is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you provide when using our website, the ONIX Media mobile application (the "App"), and related services.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="mt-2">We may collect the following types of information:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Contact information:</strong> Name, email address, and age submitted through our inquiry form.</li>
              <li><strong className="text-foreground">Athlete data:</strong> Career statistics, biographical information, and media provided by or about the athletes we represent.</li>
              <li><strong className="text-foreground">Usage data:</strong> Anonymous browsing information such as pages visited and time on site, collected through standard web analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-2">We use the information collected to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Respond to inquiries and provide requested services.</li>
              <li>Build and maintain athlete profile websites.</li>
              <li>Improve the quality and performance of our website.</li>
              <li>Communicate with athletes and clients about their projects.</li>
            </ul>
            <p className="mt-2">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">4. Athlete Profiles and Public Information</h2>
            <p className="mt-2">
              Athlete profiles published on this website contain information that is intentionally made public for recruiting and media purposes, with the athlete's explicit consent. This includes statistics sourced from publicly available NCAA, university, and league records, and images provided by or authorized by the athlete.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">5. ONIX Media Mobile App</h2>
            <p className="mt-2">
              The ONIX Media App lets athletes create and manage a player dossier (profile, statistics, achievements, photos, videos, and reports). When you use the App, we may collect:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Profile information:</strong> Name, email, position, height, weight, graduation year, team, nationality, GPA, and biography.</li>
              <li><strong className="text-foreground">Contact details:</strong> Phone number, agent name, agent email, and social media handles.</li>
              <li><strong className="text-foreground">Media:</strong> Profile photos, gallery images, highlight videos, and PDF performance reports you upload.</li>
              <li><strong className="text-foreground">Performance data:</strong> Season statistics and achievements.</li>
              <li><strong className="text-foreground">Access codes:</strong> The access code used to sign in to your dossier.</li>
            </ul>
            <p className="mt-2">
              App data is stored using Supabase, our secure cloud database provider. Access to dossier data is controlled through access codes and server-side permissions. The App does not use third-party advertising or tracking SDKs.
            </p>
            <p className="mt-2">
              You can delete your dossier at any time in the App by going to <strong className="text-foreground">Settings → Delete My Data</strong>, which permanently removes your dossier and deactivates your access code. You may also request deletion by email.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">6. Data Retention</h2>
            <p className="mt-2">
              We retain inquiry data only as long as necessary to respond to your request. Athlete profile data is retained for as long as the athlete profile is active on our platform. When you use the Delete My Data feature in the App, we remove your dossier content and deactivate your access code. You may request deletion of your data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Cookies</h2>
            <p className="mt-2">
              Our website may use basic cookies to improve your browsing experience. We do not use tracking or advertising cookies. You can disable cookies through your browser settings without affecting your ability to use the site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">8. Your Rights</h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent for use of your information at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">9. Security</h2>
            <p className="mt-2">
              We take reasonable technical measures to protect your information from unauthorized access. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of data sent to us online.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">10. Contact</h2>
            <p className="mt-2">
              For privacy-related requests or questions, contact Aplicaciones Patrimoniales Moreia S.L. (ONIX Media) at{" "}
              <a href="mailto:sergiogonzalez@onixmedia.agency" className="text-primary hover:underline">
                sergiogonzalez@onixmedia.agency
              </a>.
            </p>
          </div>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
