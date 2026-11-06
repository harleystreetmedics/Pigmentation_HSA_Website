// Abstract gold line art used instead of stock or patient photography (docs/decisions.md #10).
export function FollicleArt({ className = "" }: { className?: string }) {
  const strands = Array.from({ length: 13 }, (_, i) => i);
  return (
    <svg viewBox="0 0 480 560" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fa-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e5c558" stopOpacity="0.95" />
          <stop offset="1" stopColor="#aa8c2c" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="fa-glow" cx="0.5" cy="0.62" r="0.6">
          <stop offset="0" stopColor="#d4af37" stopOpacity="0.22" />
          <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="560" fill="url(#fa-glow)" />
      {/* scalp layers */}
      <path d="M0 380 C120 350 360 350 480 380" fill="none" stroke="#d4af37" strokeOpacity="0.55" strokeWidth="1.5" />
      <path d="M0 420 C120 392 360 392 480 420" fill="none" stroke="#d4af37" strokeOpacity="0.25" strokeWidth="1" />
      <path d="M0 470 C120 446 360 446 480 470" fill="none" stroke="#d4af37" strokeOpacity="0.15" strokeWidth="1" />
      {strands.map((i) => {
        const x = 40 + i * 33;
        const sway = (i % 2 ? 1 : -1) * (14 + (i % 4) * 6);
        const top = 60 + ((i * 37) % 90);
        const baseY = 372 - Math.abs(6 - i) * 1.2;
        return (
          <g key={i}>
            <path
              d={`M${x} ${baseY} C ${x + sway * 0.3} ${baseY - 120}, ${x + sway} ${top + 80}, ${x + sway * 0.6} ${top}`}
              fill="none"
              stroke="url(#fa-gold)"
              strokeWidth={i % 3 === 0 ? 2.2 : 1.4}
              strokeLinecap="round"
            />
            <path d={`M${x} ${baseY} L${x} ${baseY + 52}`} stroke="#d4af37" strokeOpacity="0.45" strokeWidth="1.2" />
            <ellipse cx={x} cy={baseY + 58} rx="5" ry="8" fill="none" stroke="#d4af37" strokeOpacity="0.6" strokeWidth="1.2" />
          </g>
        );
      })}
    </svg>
  );
}
