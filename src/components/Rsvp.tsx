import { useEffect, useState, type FormEvent } from "react";
import { useLocale } from "../context/LocaleContext";
import {
  loadGuestbook,
  submitRsvp,
  type Attendance,
  type GuestbookEntry,
} from "../lib/guestbook";
import { SectionHeading } from "./Ornaments";

const ATTENDANCE: Attendance[] = ["yes", "no", "maybe"];

export function Rsvp() {
  const { t, guestName } = useLocale();
  const [name, setName] = useState(guestName);
  const [attending, setAttending] = useState<Attendance>("yes");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [error, setError] = useState("");
  const [justSent, setJustSent] = useState(false);

  useEffect(() => {
    setEntries(loadGuestbook());
  }, []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      setError(t.rsvp.nameRequired);
      return;
    }
    setError("");
    const saved = await submitRsvp({
      name: name.trim(),
      attending,
      guests,
      message: message.trim(),
    });
    setEntries((prev) => [saved, ...prev]);
    setMessage("");
    setJustSent(true);
    window.setTimeout(() => setJustSent(false), 3200);
  };

  const labelFor = (value: Attendance) => {
    if (value === "yes") return t.rsvp.yes;
    if (value === "no") return t.rsvp.no;
    return t.rsvp.maybe;
  };

  return (
    <section className="fade-up px-6 py-12">
      <SectionHeading title={t.rsvp.title} />
      <p className="mb-6 text-center text-sm leading-relaxed text-ink-soft">
        {t.rsvp.subtitle}
      </p>

      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl border border-gold/30 bg-ivory/80 p-4"
      >
        <label className="block text-sm">
          <span className="text-ink-soft">{t.rsvp.name}</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-lg border border-gold/30 bg-ivory px-3 py-2 outline-none focus:border-cinnabar"
          />
        </label>

        <fieldset>
          <legend className="text-sm text-ink-soft">{t.rsvp.attending}</legend>
          <div className="mt-2 grid grid-cols-1 gap-2">
            {ATTENDANCE.map((value) => (
              <label
                key={value}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                  attending === value
                    ? "border-cinnabar bg-cinnabar/10 text-cinnabar-deep"
                    : "border-gold/25"
                }`}
              >
                <input
                  type="radio"
                  name="attending"
                  checked={attending === value}
                  onChange={() => setAttending(value)}
                />
                {labelFor(value)}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm">
          <span className="text-ink-soft">{t.rsvp.guests}</span>
          <input
            type="number"
            min={1}
            max={20}
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value) || 1)}
            className="mt-1 w-full rounded-lg border border-gold/30 bg-ivory px-3 py-2 outline-none focus:border-cinnabar"
          />
        </label>

        <label className="block text-sm">
          <span className="text-ink-soft">{t.rsvp.message}</span>
          <textarea
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-1 w-full rounded-lg border border-gold/30 bg-ivory px-3 py-2 outline-none focus:border-cinnabar"
          />
        </label>

        {error && <p className="text-sm text-cinnabar">{error}</p>}
        {justSent && <p className="text-sm text-cinnabar-deep">{t.rsvp.success}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-cinnabar py-2.5 font-display text-lg text-ivory"
        >
          {t.rsvp.submit}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="mb-3 text-center font-display text-xl text-cinnabar-deep">
          {t.rsvp.wishes}
        </h3>
        {entries.length === 0 ? (
          <p className="text-center text-sm text-ink-soft">{t.rsvp.empty}</p>
        ) : (
          <ul className="space-y-3">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="rounded-xl border border-gold/20 bg-ivory-deep/40 px-4 py-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-lg text-cinnabar-deep">
                    {entry.name}
                  </p>
                  <span className="text-[11px] tracking-wide text-gold">
                    {labelFor(entry.attending)}
                  </span>
                </div>
                {entry.message && (
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {entry.message}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
