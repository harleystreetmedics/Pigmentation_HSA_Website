// Inline stroke icons (no icon font, no external requests).
const PATHS: Record<string, string> = {
  phone:
    "M3 5.5C3 4.1 4.1 3 5.5 3h1.7c.6 0 1.1.4 1.3 1l1 3.3c.1.5 0 1-.4 1.4L7.6 10a12 12 0 0 0 6.4 6.4l1.3-1.5c.4-.4.9-.5 1.4-.4l3.3 1c.6.2 1 .7 1 1.3v1.7c0 1.4-1.1 2.5-2.5 2.5C10.6 21 3 13.4 3 5.5Z",
  mail: "M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm0 .5 9 6 9-6",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4.5l3 1.5",
  check: "m5 12.5 4.5 4.5L19 7.5",
  x: "M6 6l12 12M18 6 6 18",
  arrow: "M5 12h14m-5-5 5 5-5 5",
  external: "M14 4h6v6m0-6-9 9M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10",
  chevron: "m6 9 6 6 6-6",
  chevronRight: "m9 6 6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-10v5m0-8h.01",
  alert: "M12 3 2 20h20L12 3Zm0 6v5m0 3h.01",
  drop: "M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z",
  needle: "m14 4 6 6m-3-3-9.5 9.5-3 1 1-3L15 5m-5.5 5.5 3 3M4 20l1.5-1.5",
  light: "M9 18h6m-5 3h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z",
  cell: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm9 3-4-4",
  shield: "M12 3 4.5 6v6c0 4.6 3.2 7.9 7.5 9 4.3-1.1 7.5-4.4 7.5-9V6L12 3Zm-3 9 2 2 4-4",
  calendar: "M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-11ZM4 10h16M8 4v4m8-4v4",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c.8-3.4 3.7-5.5 7-5.5s6.2 2.1 7 5.5",
  users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9c.6-3 3-4.8 6-4.8s5.4 1.8 6 4.8m1-15.8a3.5 3.5 0 0 1 0 6.6m2 3.4c1.6.6 2.7 1.9 3 3.8",
  star: "m12 3 2.7 5.6 6.1.8-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.8L12 3Z",
  sparkle: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6",
  scalp: "M5 14c0-5 3.1-9 7-9s7 4 7 9M5 14c2-1 3.5-1 5 0s3 1 5 0 3-1 4 0M8 5.8 9 9m7-3.2L15 9m-3-4v4",
  whatsapp:
    "M4 20l1.2-3.8A8.5 8.5 0 1 1 8 19l-4 1Zm5-11.5c0 3.6 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-2.3-1.7-2.7-2.7l.8-1-1-2L9 8.5Z",
};

export type IconName = keyof typeof PATHS;

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d={PATHS[name]} />
    </svg>
  );
}
