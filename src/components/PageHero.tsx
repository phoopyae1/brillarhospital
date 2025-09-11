export default function PageHero({ src, title, subtitle }:{ src:string; title:string; subtitle?:string; }){
  return (
    <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex flex-col justify-end pb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow">{title}</h1>
        {subtitle ? <p className="text-white/95 text-base md:text-lg">{subtitle}</p> : null}
      </div>
    </section>
  );
}
