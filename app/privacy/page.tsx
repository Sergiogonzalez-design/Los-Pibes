// Onix Media — Privacy Policy page (Next.js App Router).
// Serves at https://onixmedia.agency/privacy

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ONIX Media",
  description: "Privacy Policy for the ONIX Media player app and onixmedia.agency.",
};

const styles = `
.onix-privacy {
  --bg: #0b0b0d;
  --card: #141417;
  --text: #ececf1;
  --muted: #a1a1aa;
  --gold: #c9a24b;
  --border: #26262b;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.65;
  min-height: 100vh;
}
.onix-privacy * { box-sizing: border-box; }
.onix-privacy .wrap { max-width: 760px; margin: 0 auto; padding: 48px 22px 96px; }
.onix-privacy header { border-bottom: 1px solid var(--border); padding-bottom: 24px; margin-bottom: 32px; }
.onix-privacy .brand { color: var(--gold); font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; font-size: 14px; }
.onix-privacy h1 { font-size: 30px; margin: 12px 0 6px; }
.onix-privacy .updated { color: var(--muted); font-size: 14px; }
.onix-privacy h2 { font-size: 20px; margin: 36px 0 10px; color: #fff; }
.onix-privacy p, .onix-privacy li { color: var(--text); font-size: 16px; }
.onix-privacy a { color: var(--gold); }
.onix-privacy ul { padding-left: 20px; }
.onix-privacy li { margin-bottom: 6px; }
.onix-privacy .muted { color: var(--muted); }
.onix-privacy .card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 18px 20px; margin-top: 16px; }
.onix-privacy footer { margin-top: 56px; padding-top: 22px; border-top: 1px solid var(--border); color: var(--muted); font-size: 14px; }
`;

export default function PrivacyPage() {
  return (
    <div className="onix-privacy">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="wrap">
        <header>
          <div className="brand">ONIX Media</div>
          <h1>Privacy Policy</h1>
          <div className="updated">Last updated: 12 June 2026</div>
        </header>

        <p>
          This Privacy Policy explains how{" "}
          <strong>Aplicaciones Patrimoniales Moreia S.L.</strong>, operating as{" "}
          <strong>ONIX Media</strong> (&quot;ONIX Media&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;), collects, uses, and protects personal information when you use the
          ONIX Media mobile application (the &quot;App&quot;) and our website at{" "}
          <a href="https://onixmedia.agency">onixmedia.agency</a> (together, the
          &quot;Services&quot;).
        </p>
        <p className="muted">
          ONIX Media is based in Spain. By using the Services, you agree to the practices
          described in this policy.
        </p>

        <h2>1. Information we collect</h2>
        <p>
          The App is used to build and share athlete player profiles (&quot;dossiers&quot;).
          Depending on how you use it, we may collect:
        </p>
        <ul>
          <li>
            <strong>Profile information:</strong> full name, email address, playing position,
            height, weight, graduation year, current team, nationality, GPA, and biography.
          </li>
          <li>
            <strong>Contact details:</strong> phone number, agent name, agent email, and Instagram
            handle.
          </li>
          <li>
            <strong>Media:</strong> profile photos, gallery images, highlight and additional
            videos, and PDF performance reports that you upload.
          </li>
          <li>
            <strong>Performance data:</strong> season statistics (matches, goals, assists,
            minutes, etc.) and achievements.
          </li>
          <li>
            <strong>Access codes:</strong> the access code used to sign in to your dossier.
          </li>
        </ul>
        <p>
          We do not collect payment information, and we do not use third-party advertising or
          tracking SDKs.
        </p>

        <h2>2. How we use your information</h2>
        <ul>
          <li>To create, display, and manage your player dossier.</li>
          <li>
            To let you and people you share your dossier link with view your profile, statistics,
            media, and reports.
          </li>
          <li>To operate, maintain, and improve the Services.</li>
          <li>To respond to your requests and provide support.</li>
        </ul>

        <h2>3. How your information is stored</h2>
        <p>
          Your data is stored using <strong>Supabase</strong>, our backend and database provider,
          which hosts data on secure cloud infrastructure. Supabase processes data on our behalf as
          a service provider. Access to dossier data is controlled through access codes and
          server-side permissions.
        </p>

        <h2>4. Sharing of information</h2>
        <p>We do not sell your personal information. We share data only:</p>
        <ul>
          <li>
            With service providers (such as Supabase) that host and operate the Services on our
            behalf.
          </li>
          <li>
            With people you choose to share your dossier link or exported PDF with.
          </li>
          <li>
            When required by law, or to protect the rights, safety, and security of ONIX Media and
            its users.
          </li>
        </ul>

        <h2>5. Your rights and choices</h2>
        <p>
          You can access and edit your dossier information at any time inside the App. You may also
          request that we correct or delete your information.
        </p>
        <div className="card">
          <strong>Delete your data</strong>
          <p style={{ margin: "8px 0 0" }}>
            In the App, go to <strong>Settings → Delete My Data</strong> to permanently delete
            your dossier and deactivate your access code. You can also email us at{" "}
            <a href="mailto:sergiogonzalez@onixmedia.agency">sergiogonzalez@onixmedia.agency</a>{" "}
            to request deletion.
          </p>
        </div>
        <p className="muted" style={{ marginTop: 16 }}>
          If you are located in the EU/EEA, you have rights under the GDPR, including the rights to
          access, rectify, erase, restrict, and port your data, and to object to processing. To
          exercise these rights, contact us using the details below.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We keep your information for as long as your dossier is active or as needed to provide
          the Services. When you delete your data, we remove your dossier content and deactivate
          your access code.
        </p>

        <h2>7. Children&apos;s privacy</h2>
        <p>
          The App may be used by youth athletes. Where a user is a minor, their profile should be
          created and managed with the consent and involvement of a parent, guardian, or authorized
          representative. If you believe a minor&apos;s data has been provided without proper
          consent, contact us and we will remove it.
        </p>

        <h2>8. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your information.
          However, no method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
          above reflects the most recent changes. Continued use of the Services after changes means
          you accept the updated policy.
        </p>

        <h2>10. Contact us</h2>
        <p>If you have questions about this Privacy Policy or your data, contact:</p>
        <p>
          <strong>Aplicaciones Patrimoniales Moreia S.L.</strong> (ONIX Media)
          <br />
          Email:{" "}
          <a href="mailto:sergiogonzalez@onixmedia.agency">sergiogonzalez@onixmedia.agency</a>
          <br />
          Website: <a href="https://onixmedia.agency">onixmedia.agency</a>
        </p>

        <footer>
          © 2026 Aplicaciones Patrimoniales Moreia S.L. (ONIX Media). All rights reserved.
        </footer>
      </div>
    </div>
  );
}
