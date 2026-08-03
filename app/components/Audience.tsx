import Image from "next/image";
import Reveal from "./Reveal";
import { audience } from "../content";

export default function Audience() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="section-eyebrow text-brand-dark mb-4">Para quem é</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-heading text-3xl md:text-[2.6rem] font-semibold leading-tight text-ink text-balance">
                {audience.title}
              </h2>
            </Reveal>

            <div className="mt-10 space-y-4">
              {audience.items.map((item, i) => (
                <Reveal key={item} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-all hover:border-brand hover:shadow-md">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/20 font-heading font-semibold text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1.5 text-sm leading-relaxed text-ink">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -right-6 -bottom-6 h-full w-full rounded-[2.5rem] bg-brand/60" />
              <span className="pointer-events-none absolute -left-8 -bottom-8 hidden h-24 w-24 rounded-full border-2 border-dashed border-ink/15 md:block" />
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_rgba(15,42,28,0.25)] justify-self-center">
                <Image
                  src="/images/aerial-tractor-field.jpg"
                  alt="Trator em propriedade rural durante colheita"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-soft/50 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
