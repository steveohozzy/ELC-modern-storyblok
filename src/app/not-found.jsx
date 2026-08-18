import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#0a2514] via-[#0d2f1a] to-[#071a0f] px-4 py-16 text-white md:px-8">
      
      {/* Big glowing background orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-[450px] w-[450px] rounded-full bg-emerald-400/40 blur-[110px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-green-300/30 blur-[120px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/20 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* LEFT — Message */}
        <div className="text-center lg:text-left">

          {/* Fun status pill */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-emerald-300 shadow-lg backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Uh-oh! Something&apos;s missing
          </span>

          {/* Huge 404 */}
          <h1 className="mt-6 font-heading text-[7rem] font-black leading-[0.8] tracking-tight sm:text-[9rem] lg:text-[11rem]">
            <span className="text-white">4</span>
            <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-teal-200 bg-clip-text text-transparent">
              0
            </span>
            <span className="text-white">4</span>
          </h1>

          {/* Fun heading */}
          <h2 className="mt-8 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Oops! This page has wandered off to play. 🧸
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-100/75">
            We looked everywhere — under the sofa, behind the toy box and
            even in the dressing-up basket — but we can&apos;t find it!
          </p>

          <p className="mt-3 text-base font-medium text-emerald-200/60">
            Don&apos;t worry, there are plenty more adventures waiting.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/"
              className="
                rounded-2xl
                border
                border-emerald-300/40
                bg-gradient-to-r
                from-emerald-500
                to-emerald-400
                px-8
                py-4
                text-sm
                font-black
                text-[#071a0f]
                shadow-xl
                shadow-emerald-950/60
                transition-all
                duration-200
                hover:-translate-y-1
                hover:from-emerald-400
                hover:to-emerald-300
              "
            >
              🏠 Take me home
            </Link>

            <Link
              href="/blog"
              className="
                rounded-2xl
                border
                border-white/15
                bg-white/10
                px-8
                py-4
                text-sm
                font-bold
                text-white
                backdrop-blur-xl
                transition-all
                duration-200
                hover:-translate-y-1
                hover:bg-white/15
              "
            >
              ✨ Find an adventure
            </Link>
          </div>
        </div>

        {/* RIGHT — Lost toy */}
        <div className="relative flex justify-center">

          {/* Floating decorative shapes */}
          <div className="absolute -left-2 top-8 h-16 w-16 rotate-12 rounded-2xl bg-yellow-300 shadow-xl shadow-yellow-500/20 sm:left-4">
            <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-white/40" />
          </div>

          <div className="absolute right-0 top-16 h-12 w-12 -rotate-12 rounded-full bg-pink-400 shadow-xl shadow-pink-500/20 sm:right-8">
            <div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-white/40" />
          </div>

          <div className="absolute bottom-8 left-8 h-10 w-10 rotate-45 rounded-xl bg-orange-400 shadow-xl shadow-orange-500/20" />

          {/* Main glass toy-box panel */}
          <div className="relative aspect-square w-full max-w-[460px] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">

            {/* Inner panel */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#071a0f]/50">

              {/* Glow behind toy */}
              <div className="absolute h-64 w-64 rounded-full bg-emerald-400/30 blur-[90px]" />

              {/* Toy box floor */}
              <div className="absolute bottom-10 h-8 w-64 rounded-full bg-black/30 blur-md" />

              {/* Building blocks */}
              <div className="absolute bottom-20 left-16 h-24 w-24 rotate-[-8deg] rounded-3xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-2xl">
                <div className="absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 rounded-full bg-white/30" />
              </div>

              <div className="absolute bottom-20 right-16 h-20 w-20 rotate-[8deg] rounded-3xl bg-gradient-to-br from-yellow-300 to-orange-400 shadow-2xl">
                <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-white/40" />
              </div>

              {/* Lost teddy-ish face */}
              <div className="relative z-10 h-44 w-44 rounded-[45%] bg-gradient-to-br from-amber-200 via-orange-300 to-orange-400 shadow-[0_25px_60px_rgba(0,0,0,.35)]">

                {/* Ears */}
                <div className="absolute -left-8 top-5 h-16 w-16 rounded-full bg-orange-300" />
                <div className="absolute -right-8 top-5 h-16 w-16 rounded-full bg-orange-300" />

                {/* Face */}
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-amber-200">

                  {/* Eyes */}
                  <div className="absolute left-8 top-10 h-4 w-4 rounded-full bg-[#071a0f]" />
                  <div className="absolute right-8 top-10 h-4 w-4 rounded-full bg-[#071a0f]" />

                  {/* Nose */}
                  <div className="absolute left-1/2 top-16 h-5 w-7 -translate-x-1/2 rounded-full bg-[#7c3f20]" />

                  {/* Smile */}
                  <div className="absolute left-1/2 top-[5.5rem] h-3 w-7 -translate-x-1/2 rounded-b-full border-b-2 border-[#7c3f20]" />
                </div>
              </div>

              {/* Floating question mark */}
              <div className="absolute right-12 top-10 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-white/10 text-3xl font-black text-emerald-300 shadow-lg backdrop-blur-xl">
                ?
              </div>

              {/* Sparkles */}
              <span className="absolute left-10 top-24 text-2xl text-yellow-300">
                ✦
              </span>

              <span className="absolute bottom-28 right-8 text-xl text-emerald-300">
                ✦
              </span>

              {/* Gloss */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating caption */}
          <div className="absolute -bottom-6 -left-2 hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-900/90 via-[#0a2514]/90 to-emerald-950/90 px-6 py-4 shadow-2xl backdrop-blur-2xl sm:block">
            <p className="font-heading text-lg font-black text-white">
              Lost toy detected!
            </p>
            <p className="mt-0.5 text-xs font-semibold text-emerald-300">
              Don&apos;t worry, we&apos;ll find our way home.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}