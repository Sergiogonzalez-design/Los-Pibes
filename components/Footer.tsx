export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black/40 py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold text-foreground">
            Sergio Gonzalez Fernandez
          </p>
          <p className="mt-2 font-body text-sm text-secondary-foreground">
            Midfielder · #6 · NCAA Division I
          </p>
        </div>
        <div className="font-body text-sm text-secondary-foreground">
          <p className="font-semibold text-foreground">Contact</p>
          <p className="mt-2">
            Replace with your email or recruiting contact.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-2 inline-block text-primary hover:underline"
          >
            hello@example.com
          </a>
        </div>
        <div className="flex flex-wrap gap-4 font-body text-sm">
          <a
            href="https://ionagaels.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/7622"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            Iona
          </a>
          <a
            href="https://gomason.com/sports/mens-soccer/roster/sergio-gonzalez-fernandez/9251"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary"
          >
            George Mason
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-4 text-center font-body text-xs text-zinc-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Sergio Gonzalez. All rights reserved.
      </p>
    </footer>
  );
}
