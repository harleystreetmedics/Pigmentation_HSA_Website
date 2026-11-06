// Abstract brand artwork used instead of stock or patient photography (docs/decisions.md #16).
// Gold contour lines suggest the layers of the skin; the six swatches represent a wide range of
// skin tones, so every visitor is represented without using photos of people.

const TONES = ["#f6dcc8", "#e8bf9c", "#c99269", "#a26a43", "#6f4429", "#3b2417"];

export function SkinToneArt({ className = "", swatches = true }: { className?: string; swatches?: boolean }) {
  return (
    <svg viewBox="0 0 480 560" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="sta-glow" cx="0.55" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#d4af37" stopOpacity="0.2" />
          <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sta-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e5c558" stopOpacity="0.9" />
          <stop offset="1" stopColor="#aa8c2c" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="480" height="560" fill="url(#sta-glow)" />
      {/* layered contour lines (epidermis, dermis) */}
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d={`M-20 ${150 + i * 34} C 110 ${110 + i * 36}, 250 ${200 + i * 30}, 500 ${130 + i * 35}`}
          fill="none"
          stroke="url(#sta-gold)"
          strokeOpacity={1 - i * 0.09}
          strokeWidth={i === 0 ? 2 : 1.1}
        />
      ))}
      {/* scattered pigment particles, fading out */}
      {Array.from({ length: 28 }, (_, i) => {
        const x = 40 + ((i * 67) % 400);
        const y = 170 + ((i * 41) % 200);
        return <circle key={i} cx={x} cy={y} r={1.5 + (i % 4)} fill="#d4af37" fillOpacity={0.12 + (i % 5) * 0.08} />;
      })}
      {swatches &&
        TONES.map((c, i) => (
          <g key={c}>
            <circle cx={70 + i * 68} cy={470} r={26} fill={c} />
            <circle cx={70 + i * 68} cy={470} r={30} fill="none" stroke="#d4af37" strokeOpacity="0.5" />
          </g>
        ))}
    </svg>
  );
}
