export function Marquee() {
  const text = "NO MORE BORING CONTENT • ";
  const repeated = text.repeat(8);

  return (
    <section className="-rotate-1 overflow-hidden bg-accent-green py-4 md:py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="font-heading text-2xl uppercase tracking-wide text-bg md:text-4xl">
          {repeated}
        </span>
        <span className="font-heading text-2xl uppercase tracking-wide text-bg md:text-4xl">
          {repeated}
        </span>
      </div>
    </section>
  );
}
