import Link from 'next/link';

const GITHUB = 'https://github.com/KOUSTAV2409/sstocode';

export default function MarketingFooter() {
  return (
    <footer className="w-full border-t border-white/5 bg-obsidian-nav">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 py-10 md:flex-row md:justify-between md:px-12 md:py-16">
        <Link href="/" className="text-lg font-black text-obsidian-on font-headline hover:text-obsidian-gold transition-colors">
          sstocode
        </Link>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-obsidian-on/60 hover:text-obsidian-gold transition-colors font-sans text-xs uppercase tracking-widest"
          >
            GitHub
          </a>
          <a
            href="https://x.com/iamk_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-obsidian-on/60 hover:text-obsidian-gold transition-colors font-sans text-xs uppercase tracking-widest"
          >
            Twitter
          </a>
          <Link href="/docs" className="text-obsidian-on/60 hover:text-obsidian-gold transition-colors font-sans text-xs uppercase tracking-widest">
            Docs
          </Link>
          <Link href="/roadmap" className="text-obsidian-on/60 hover:text-obsidian-gold transition-colors font-sans text-xs uppercase tracking-widest">
            Roadmap
          </Link>
          <Link href="/pricing" className="text-obsidian-on/60 hover:text-obsidian-gold transition-colors font-sans text-xs uppercase tracking-widest">
            Pricing
          </Link>
          <Link href="/contributing" className="text-obsidian-on/60 hover:text-obsidian-gold transition-colors font-sans text-xs uppercase tracking-widest">
            Contributing
          </Link>
          <Link href="/auth" className="text-obsidian-on/60 hover:text-obsidian-gold transition-colors font-sans text-xs uppercase tracking-widest">
            Sign in
          </Link>
        </nav>
        <p className="max-w-full text-center font-sans text-xs uppercase tracking-widest text-obsidian-on/40 break-words md:text-right">
          © {new Date().getFullYear()} sstocode · open source design-to-code
        </p>
      </div>
    </footer>
  );
}
