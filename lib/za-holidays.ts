// ─────────────────────────────────────────────────────────────────────────────
//  SOUTH AFRICAN CLOSED DAYS
//
//  The workshops are open Mon–Fri only (07:30–17:00) and closed on weekends and
//  public holidays. A native <input type="date"> cannot grey out specific days,
//  so we validate the chosen date instead — in the booking form (instant
//  feedback) AND on the server (authoritative). Both import this one helper so
//  the two can never drift.
//
//  Public holidays follow the SA Public Holidays Act:
//   • fixed-date holidays,
//   • the two Easter-derived holidays (Good Friday, Family Day), and
//   • the "Monday in lieu" when a holiday falls on a Sunday.
//  One-off proclaimed holidays (e.g. election days) cannot be predicted and are
//  not included; the workshop confirms every requested date regardless.
// ─────────────────────────────────────────────────────────────────────────────

/** Gregorian Easter Sunday (Meeus/Jones/Butcher algorithm). Month is 1-based. */
function easterSunday(year: number): { month: number; day: number } {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

const isoOf = (dt: Date) => dt.toISOString().slice(0, 10);

const holidaysByYear = new Map<number, Set<string>>();

/** ISO (YYYY-MM-DD) set of SA public holidays for a calendar year. */
function getHolidaySet(year: number): Set<string> {
  const cached = holidaysByYear.get(year);
  if (cached) return cached;

  const set = new Set<string>();

  // Fixed-date public holidays (month is 1-based).
  const fixed: [number, number][] = [
    [1, 1], // New Year's Day
    [3, 21], // Human Rights Day
    [4, 27], // Freedom Day
    [5, 1], // Workers' Day
    [6, 16], // Youth Day
    [8, 9], // National Women's Day
    [9, 24], // Heritage Day
    [12, 16], // Day of Reconciliation
    [12, 25], // Christmas Day
    [12, 26], // Day of Goodwill
  ];

  const bases: Date[] = fixed.map(([m, d]) => new Date(Date.UTC(year, m - 1, d)));

  // Easter-derived: Good Friday (Easter − 2) and Family Day (Easter + 1).
  const e = easterSunday(year);
  const easter = new Date(Date.UTC(year, e.month - 1, e.day));
  const goodFriday = new Date(easter);
  goodFriday.setUTCDate(easter.getUTCDate() - 2);
  const familyDay = new Date(easter);
  familyDay.setUTCDate(easter.getUTCDate() + 1);
  bases.push(goodFriday, familyDay);

  for (const dt of bases) {
    set.add(isoOf(dt));
    // Sunday → the following Monday is a public holiday too.
    if (dt.getUTCDay() === 0) {
      const monday = new Date(dt);
      monday.setUTCDate(dt.getUTCDate() + 1);
      set.add(isoOf(monday));
    }
  }

  holidaysByYear.set(year, set);
  return set;
}

export type ClosedReason = "weekend" | "holiday";

export type ClosedDay = { closed: boolean; reason?: ClosedReason };

/**
 * Is the workshop closed on this date? Accepts an ISO date string
 * (YYYY-MM-DD, as produced by <input type="date">). Anything else, or an empty
 * value, is treated as "not closed" — the field is optional and unknown formats
 * are left for the workshop to confirm rather than silently rejected.
 */
export function isClosedDay(dateStr: string | null | undefined): ClosedDay {
  if (!dateStr) return { closed: false };
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!match) return { closed: false };

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const dt = new Date(Date.UTC(year, month - 1, day));

  const weekday = dt.getUTCDay();
  if (weekday === 0 || weekday === 6) return { closed: true, reason: "weekend" };
  if (getHolidaySet(year).has(dateStr)) return { closed: true, reason: "holiday" };
  return { closed: false };
}

/** Customer-facing reason a date can't be used. */
export function closedDayMessage(reason: ClosedReason): string {
  return reason === "holiday"
    ? "We're closed on public holidays — please choose a weekday."
    : "We're closed on weekends — please choose a weekday (Mon–Fri).";
}
