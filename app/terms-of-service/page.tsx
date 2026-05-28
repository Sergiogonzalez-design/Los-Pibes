import CompanyLogo from "@/components/CompanyLogo";
import LosPibesFooter from "@/components/LosPibesFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Onix Media.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/"
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
          Terms of Service
        </h1>
        <p className="font-body mt-2 text-sm text-secondary-foreground">
          Effective date: January 1, 2025
        </p>

        <div className="font-body mt-10 space-y-8 text-base leading-relaxed text-secondary-foreground">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using the Onix Media website and services (collectively, the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">2. Description of Service</h2>
            <p className="mt-2">
              Onix Media provides digital media services for athletes, including but not limited to: custom athlete profile websites, highlight video production and hosting, and performance report creation. Our services are directed at soccer players competing in North America, South America, and internationally.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">3. User Responsibilities</h2>
            <p className="mt-2">
              You agree to provide accurate and truthful information when submitting inquiries or using our services. You are responsible for ensuring that any content, images, or media you provide to Onix Media for use in your profile is lawfully obtained and does not infringe on the rights of any third party.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">4. Intellectual Property</h2>
            <p className="mt-2">
              All content on this website, including text, graphics, logos, and design, is the property of Onix Media and is protected by applicable intellectual property laws. Athlete-specific content (stats, images, bio) remains the property of the respective athlete, licensed to Onix Media for display purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">5. Use of Images</h2>
            <p className="mt-2">
              Images displayed on this website are used with the consent of the athletes represented. Images sourced from educational institutions or public sports records are used in accordance with fair use and editorial standards. If you believe an image has been used in error, please contact us at contact@onixmedia.agency.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p className="mt-2">
              Onix Media provides its services "as is" and makes no warranties, expressed or implied. We are not liable for any indirect, incidental, or consequential damages arising from your use of our Service, including but not limited to loss of recruiting opportunities, data loss, or errors in athlete statistics.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Modifications to Terms</h2>
            <p className="mt-2">
              Onix Media reserves the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the Service after changes constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">8. Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the laws of the United States. Any disputes arising from these terms or the use of our services shall be resolved through good-faith negotiation or, if necessary, binding arbitration.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">9. Contact</h2>
            <p className="mt-2">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:contact@onixmedia.agency" className="text-primary hover:underline">
                contact@onixmedia.agency
              </a>.
            </p>
          </div>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
