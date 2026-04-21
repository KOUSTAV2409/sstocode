import Link from 'next/link';

/**
 * Temporary full-page notice while architecture / product is revamping.
 * Rendered from the home route only until the next release plan.
 */
export default function SiteRevampNotice() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-8 py-20 sm:px-10 md:max-w-2xl md:px-12">
        <div className="border-b border-neutral-200/90 pb-10">
          <p className="mb-4 font-label text-[10px] uppercase tracking-[0.4em] text-neutral-400">Maintenance</p>
          <h1 className="font-headline text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-neutral-950 sm:text-3xl md:text-[2rem]">
            We&apos;re revamping our architecture
          </h1>
          <p className="mt-8 text-[15px] leading-relaxed text-neutral-600 sm:text-base">
            The full experience is temporarily unavailable while we rebuild. We&apos;ll be back with something sharper —
            thank you for your patience.
          </p>
          <p className="mt-12 font-label text-[11px] uppercase tracking-[0.3em] text-neutral-400">Coming soon</p>
        </div>

        <div className="pt-12">
          <p className="font-label text-[10px] uppercase tracking-[0.35em] text-neutral-400">Contact</p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-10">
            <Link
              href="https://iamk.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex text-[15px] font-medium text-neutral-950 transition-colors hover:text-neutral-600"
            >
              <span className="border-b border-neutral-900/30 pb-0.5 transition-[border-color] group-hover:border-neutral-900/60">
                iamk.xyz
              </span>
            </Link>
            <a
              href="mailto:koustavganguly24@gmail.com"
              className="group inline-flex text-[15px] font-medium text-neutral-950 transition-colors hover:text-neutral-600"
            >
              <span className="border-b border-neutral-900/30 pb-0.5 transition-[border-color] group-hover:border-neutral-900/60">
                koustavganguly24@gmail.com
              </span>
            </a>
          </div>
          <p className="mt-10 text-xs leading-relaxed text-neutral-400">Visit the site or write directly — we read every message.</p>
        </div>
      </div>
    </div>
  );
}
