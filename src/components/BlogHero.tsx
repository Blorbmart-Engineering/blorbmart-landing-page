type BlogHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function BlogHero({ eyebrow, title, description }: BlogHeroProps) {
  return (
    <section className="px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.22),_transparent_30%),linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fafc_100%)] px-6 py-16 shadow-[0_28px_70px_rgba(148,163,184,0.22)] sm:px-10">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            {eyebrow}
          </span>
          <h1 className="font-['Sora'] text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </div>
    </section>
  )
}
