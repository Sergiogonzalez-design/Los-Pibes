import CompanyLogo from "@/components/CompanyLogo";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Onix Media.",
};

export default function PrivacyPolicyPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/en"
              className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Back to home"
            >
              ←
            </Link>
            <CompanyLogo priority />
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-3xl px-4 pt-36 pb-16 sm:px-6 sm:pt-40 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="font-body mt-2 text-sm text-secondary-foreground">
          Effective date: January 1, 2025
        </p>

        <div className="font-body mt-10 space-y-8 text-base leading-relaxed text-secondary-foreground">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-2">
              Onix Media ("we," "our," or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you provide when using our website and services.
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
            <h2 className="font-heading text-xl font-semibold text-foreground">5. Data Retention</h2>
            <p className="mt-2">
              We retain inquiry data only as long as necessary to respond to your request. Athlete profile data is retained for as long as the athlete profile is active on our platform. You may request deletion of your data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">6. Cookies</h2>
            <p className="mt-2">
              Our website may use basic cookies to improve your browsing experience. We do not use tracking or advertising cookies. You can disable cookies through your browser settings without affecting your ability to use the site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Your Rights</h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent for use of your information at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">8. Security</h2>
            <p className="mt-2">
              We take reasonable technical measures to protect your information from unauthorized access. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of data sent to us online.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">9. Contact</h2>
            <p className="mt-2">
              For privacy-related requests or questions, contact us at{" "}
              <a href="mailto:contact@onixmedia.agency" className="text-primary hover:underline">
                contact@onixmedia.agency
              </a>.
            </p>
          </div>
        </div>
      </section>

      <LosPibesFooterEN />
    </div>
  );
}
