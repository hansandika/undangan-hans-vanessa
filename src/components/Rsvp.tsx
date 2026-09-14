import { useState, type FormEvent } from 'react'
import type { Attendance } from '../data/wedding'
import { useGuestbook } from '../hooks/useGuestbook'
import { useI18n } from '../i18n/LocaleContext'
import { dateLocale } from '../i18n/locale'
import { HappinessDivider, SectionKicker } from './Ornaments'
import { Reveal } from './Reveal'

const attendanceTone: Record<Attendance, string> = {
  hadir: 'bg-cinnabar/10 text-cinnabar',
  'tidak-hadir': 'bg-ink/8 text-ink-soft',
  ragu: 'bg-gold/20 text-gold-deep',
}

export function Rsvp() {
  const { locale, t } = useI18n()
  const { entries, addEntry, ready } = useGuestbook()
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('hadir')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [justSent, setJustSent] = useState(false)

  const attendanceOptions: { value: Attendance; label: string }[] = [
    { value: 'hadir', label: t.rsvp.hadir },
    { value: 'tidak-hadir', label: t.rsvp.tidakHadir },
    { value: 'ragu', label: t.rsvp.ragu },
  ]

  const attendanceLabel: Record<Attendance, string> = {
    hadir: t.rsvp.hadir,
    'tidak-hadir': t.rsvp.tidakHadir,
    ragu: t.rsvp.ragu,
  }

  function formatWhen(iso: string) {
    return new Intl.DateTimeFormat(dateLocale(locale), {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(iso))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedMessage = message.trim()
    if (!trimmedName) {
      setError(t.rsvp.errorName)
      return
    }
    if (!trimmedMessage) {
      setError(t.rsvp.errorMessage)
      return
    }
    addEntry({ name: trimmedName, attendance, message: trimmedMessage })
    setName('')
    setAttendance('hadir')
    setMessage('')
    setError('')
    setJustSent(true)
    window.setTimeout(() => setJustSent(false), 3500)
  }

  const compact = locale === 'zh' ? 'tracking-[0.12em]' : 'uppercase tracking-[0.18em]'

  return (
    <section id="rsvp" className="px-5 py-12">
      <Reveal>
        <SectionKicker>{t.rsvp.kicker}</SectionKicker>
        <h2 className="mt-2 text-center font-display text-4xl text-ink sm:text-5xl">{t.rsvp.title}</h2>
        <HappinessDivider className="mt-4" />
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-ink-soft">
          {t.rsvp.intro}
        </p>
      </Reveal>

      <Reveal delayMs={80} className="mx-auto mt-8 max-w-lg">
        <form
          onSubmit={onSubmit}
          className="rounded-[1.75rem] border border-gold/35 bg-paper px-5 py-7 shadow-sm sm:px-8"
        >
          <label className={`block text-xs text-ink-soft ${compact}`}>
            {t.rsvp.name}
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand bg-ivory px-4 py-3 text-base tracking-normal text-ink outline-none ring-gold/40 focus:ring-2"
              placeholder={t.rsvp.namePlaceholder}
              autoComplete="name"
            />
          </label>

          <fieldset className="mt-5">
            <legend className={`text-xs text-ink-soft ${compact}`}>{t.rsvp.attendance}</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {attendanceOptions.map((option) => (
                <label
                  key={option.value}
                  className={`cursor-pointer rounded-2xl border px-2 py-3 text-center text-xs font-medium transition ${
                    attendance === option.value
                      ? 'border-cinnabar bg-cinnabar/10 text-cinnabar'
                      : 'border-sand bg-ivory text-ink-soft'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={attendance === option.value}
                    onChange={() => setAttendance(option.value)}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className={`mt-5 block text-xs text-ink-soft ${compact}`}>
            {t.rsvp.message}
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={4}
              className="mt-2 w-full resize-none rounded-2xl border border-sand bg-ivory px-4 py-3 text-base tracking-normal text-ink outline-none ring-gold/40 focus:ring-2"
              placeholder={t.rsvp.messagePlaceholder}
            />
          </label>

          {error ? <p className="mt-3 text-sm text-cinnabar">{error}</p> : null}
          {justSent ? <p className="mt-3 text-sm text-cinnabar-deep">{t.rsvp.success}</p> : null}

          <button
            type="submit"
            className={`btn-cinnabar mt-6 w-full rounded-full py-3.5 text-xs font-medium ${
              locale === 'zh' ? 'tracking-[0.18em]' : 'uppercase tracking-[0.24em]'
            }`}
          >
            {t.rsvp.submit}
          </button>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-ink-soft/80">{t.rsvp.demo}</p>
        </form>
      </Reveal>

      <Reveal delayMs={120} className="mx-auto mt-8 max-w-lg">
        <h3 className="text-center font-display text-2xl text-ink">{t.rsvp.book}</h3>
        {!ready ? (
          <p className="mt-4 text-center text-sm text-ink-soft">{t.rsvp.loading}</p>
        ) : entries.length === 0 ? (
          <p className="mt-4 rounded-[1.5rem] border border-dashed border-gold/40 bg-paper/60 px-5 py-8 text-center text-sm text-ink-soft">
            {t.rsvp.empty}
          </p>
        ) : (
          <ul className="guestbook-scroll mt-4 max-h-[28rem] space-y-3 overflow-y-auto pr-1">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="rounded-[1.4rem] border border-gold/25 bg-paper px-5 py-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-xl text-ink">{entry.name}</p>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] ${
                      locale === 'zh' ? 'tracking-[0.08em]' : 'uppercase tracking-[0.14em]'
                    } ${attendanceTone[entry.attendance]}`}
                  >
                    {attendanceLabel[entry.attendance]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{entry.message}</p>
                <p className="mt-2 text-[11px] text-ink-soft/70">{formatWhen(entry.createdAt)}</p>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </section>
  )
}
