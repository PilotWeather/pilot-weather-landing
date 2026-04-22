export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-200 backdrop-blur-sm">
          Pilot Weather
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          Aviation weather,
          <span className="block bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            simplified for pilots.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          METAR, TAF, SIGMET, NOTAM and pilot tools — all in one clean, fast and focused experience.
        </p>

        <div className="mt-8 inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 shadow-2xl shadow-sky-950/40 backdrop-blur-md sm:text-base">
          Coming Soon
        </div>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md">
            <p className="text-sm text-sky-300">01</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Fast Briefing</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Check critical weather data quickly with a clean, cockpit-friendly interface.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md">
            <p className="text-sm text-sky-300">02</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Pilot Toolbox</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Essential calculations and operational tools designed around real pilot workflow.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md">
            <p className="text-sm text-sky-300">03</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Premium Experience</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Modern visuals, smooth performance and a focused design language built for aviation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}