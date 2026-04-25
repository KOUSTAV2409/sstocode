import Link from 'next/link';

const GITHUB = 'https://github.com/KOUSTAV2409/NexusUI';

export default function MarketingFooter() {
  return (
    <footer className="w-full border-t border-ghost-border bg-void">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 py-10 md:flex-row md:justify-between md:px-12 md:py-16">
        <Link href="/" className="text-lg font-black text-white font-sans tracking-tight hover:text-primary-accent transition-colors">
          NexusUI
        </Link>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-muted hover:text-white transition-colors font-sans font-bold text-[10px] uppercase tracking-widest"
          >
            GitHub
          </a>
          <a
            href="https://x.com/iamk_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-muted hover:text-white transition-colors font-sans font-bold text-[10px] uppercase tracking-widest"
          >
            Twitter
          </a>
          <Link href="/docs" className="text-on-surface-muted hover:text-white transition-colors font-sans font-bold text-[10px] uppercase tracking-widest">
            Docs
          </Link>
        </nav>
        <p className="max-w-full text-center font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted break-words md:text-right">
          © {new Date().getFullYear()} NexusUI · open source design-to-code
        </p>
      </div>
    </footer>
  );
}
