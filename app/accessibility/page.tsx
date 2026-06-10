import LosPibesNavbar from "@/components/LosPibesNavbar";
import LosPibesFooter from "@/components/LosPibesFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility statement for Onix Media.",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar backHref="/" />

      <section className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Accessibility
        </h1>
        <p className="font-body mt-2 text-sm text-secondary-foreground">
          Effective date: January 1, 2025
        </p>

        <div className="font-body mt-10 space-y-8 text-base leading-relaxed text-secondary-foreground">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Our Commitment</h2>
            <p className="mt-2">
              Onix Media is committed to making our website accessible to all users, including people with disabilities. We strive to ensure that our digital content meets recognized accessibility standards and provides a positive experience for everyone.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Standards We Follow</h2>
            <p className="mt-2">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with a wide range of disabilities.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Accessibility Features</h2>
            <p className="mt-2">Our website is built with the following accessibility practices in mind:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Semantic HTML structure for screen reader compatibility.</li>
              <li>Sufficient color contrast between text and backgrounds.</li>
              <li>Keyboard navigation support throughout the site.</li>
              <li>Descriptive alt text for meaningful images.</li>
              <li>Responsive design that adapts to different screen sizes and zoom levels.</li>
              <li>No auto-playing audio or video without user control.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Known Limitations</h2>
            <p className="mt-2">
              While we work continuously to improve accessibility, some third-party content embedded on our site — such as YouTube videos and PDF documents — may not fully meet accessibility standards. We are working to address these limitations over time.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Assistive Technology</h2>
            <p className="mt-2">
              Our website is designed to be compatible with common assistive technologies, including screen readers such as NVDA, JAWS, and VoiceOver, as well as keyboard-only navigation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Feedback and Contact</h2>
            <p className="mt-2">
              We welcome feedback on the accessibility of our website. If you encounter any barriers or have difficulty accessing any content, please contact us and we will make every effort to provide the information in an alternative format or resolve the issue promptly.
            </p>
            <p className="mt-2">
              Contact us at{" "}
              <a href="mailto:contact@onixmedia.agency" className="text-primary hover:underline">
                contact@onixmedia.agency
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Ongoing Improvements</h2>
            <p className="mt-2">
              Accessibility is an ongoing effort. We regularly review our website and update our practices as standards evolve. This statement will be updated to reflect any significant changes to our accessibility practices.
            </p>
          </div>
        </div>
      </section>

      <LosPibesFooter />
    </div>
  );
}
