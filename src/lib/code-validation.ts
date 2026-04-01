/**
 * Heuristics to detect AI-truncated or syntactically incomplete React/TSX output
 * before it breaks Sandpack / Monaco.
 */

const INCOMPLETE_LINE_PATTERNS = [
  /className\s*=\s*"[^"]*$/,
  /className\s*=\s*'[^']*$/,
];

/** Last non-empty line looks cut off mid-string or mid-token */
export function looksLikeTruncatedCode(code: string): boolean {
  const trimmed = code.trim();
  if (trimmed.length < 20) return true;

  const lines = trimmed.split('\n');
  const last = lines[lines.length - 1]?.trim() ?? '';

  for (const re of INCOMPLETE_LINE_PATTERNS) {
    if (re.test(last)) return true;
  }

  // Ends mid-identifier (e.g. "font-", "bg-gradient-")
  if (/[a-z0-9]-$/i.test(last)) return true;

  // Started component but no export (truncated before end)
  if (
    /const\s+\w+\s*=\s*\(\s*\)\s*=>\s*\{/.test(trimmed) &&
    !/export\s+default/.test(trimmed)
  ) {
    return true;
  }

  return false;
}

export function shouldRetryGeneration(
  code: string,
  finishReason: string | undefined
): boolean {
  if (finishReason === 'MAX_TOKENS') return true;
  return looksLikeTruncatedCode(code);
}
