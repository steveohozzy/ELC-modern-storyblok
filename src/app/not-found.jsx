"use client";

import Link from "next/link";
import { useState } from "react";

export default function NotFound() {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlaying = () => {
    setIsPlaying(true);
  };

  return (
    <main className="relative flex min-h-screen items-start justify-center overflow-hidden bg-gradient-to-b from-[#0a2514] via-[#0d2f1a] to-[#071a0f] px-4 py-8 text-white md:items-center md:px-8 md:py-10">

      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-emerald-400/30 blur-[120px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-lime-300/20 blur-[110px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-teal-400/15 blur-[120px]"
        aria-hidden
      />

      {/* Floating background shapes */}
      <div
        className="pointer-events-none absolute left-[8%] top-[20%] size-8 rotate-12 rounded-xl bg-pink-400/30 animate-[float_5s_ease-in-out_infinite]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute right-[10%] top-[18%] size-7 rounded-full bg-yellow-300/40 animate-[float_4s_ease-in-out_infinite_1s]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute bottom-[20%] right-[15%] size-8 rotate-45 rounded-xl bg-sky-400/25 animate-[float_6s_ease-in-out_infinite_2s]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
          Uh-oh! Something went missing
        </div>

        {/* 404 */}
        <h1 className="font-heading text-[5.5rem] font-black leading-[0.75] tracking-tight sm:text-[7rem] lg:text-[8rem]">
          <span>4</span>

          <span className="bg-gradient-to-r from-emerald-300 via-lime-300 to-teal-200 bg-clip-text text-transparent">
            0
          </span>

          <span>4</span>
        </h1>

        {/* Message */}
        <h2 className="mx-auto mt-4 max-w-2xl font-heading text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
          Oh no! The toys have{" "}
          <span className="text-emerald-300">escaped!</span> 🧸
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-emerald-100/70 sm:text-base">
          We came looking for this page, but the toys have jumped out of the
          toy box and gone exploring.
        </p>


        {/* =========================================================
            INTERACTIVE TOY SCENE
        ========================================================= */}

        <div className="relative mx-auto mt-3 h-[215px] w-full max-w-[560px] sm:mt-5 sm:h-[270px]">

          {/* Central glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-[70px]"
            aria-hidden
          />


          {/* =====================================================
              STAR
          ===================================================== */}

          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label="Make the toys play"
            className={`absolute left-[12%] top-[5%] z-20 text-3xl transition-transform duration-300 hover:scale-125 ${
              isPlaying
                ? "animate-spin"
                : "animate-[float_3s_ease-in-out_infinite]"
            }`}
          >
            ⭐
          </button>


          {/* =====================================================
              BLUE BLOCK
          ===================================================== */}

          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label="Play with the blue block"
            className={`absolute right-[13%] top-[10%] z-20 size-12 rotate-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-3 hover:rotate-[-8deg] sm:size-14 ${
              isPlaying
                ? "animate-[float_2s_ease-in-out_infinite]"
                : ""
            }`}
          >
            <span className="absolute left-1/2 top-2 size-2.5 -translate-x-1/2 rounded-full bg-white/30" />
          </button>


          {/* =====================================================
              PINK BLOCK
          ===================================================== */}

          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label="Play with the pink block"
            className={`absolute bottom-[62px] left-[13%] z-20 size-14 -rotate-6 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg shadow-pink-500/20 transition-transform duration-300 hover:-translate-y-3 hover:rotate-6 sm:size-16 ${
              isPlaying
                ? "animate-[toyBounce_1.8s_ease-in-out_infinite]"
                : ""
            }`}
          >
            <span className="absolute left-1/2 top-2.5 size-3 -translate-x-1/2 rounded-full bg-white/30" />
          </button>


          {/* =====================================================
              YELLOW BLOCK
          ===================================================== */}

          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label="Play with the yellow block"
            className={`absolute bottom-[55px] right-[13%] z-20 size-12 rotate-6 rounded-xl bg-gradient-to-br from-yellow-300 to-orange-400 shadow-lg shadow-orange-500/20 transition-transform duration-300 hover:-translate-y-3 hover:rotate-[-8deg] sm:size-14 ${
              isPlaying
                ? "animate-[float_2.5s_ease-in-out_infinite_0.5s]"
                : ""
            }`}
          >
            <span className="absolute left-1/2 top-2 size-2.5 -translate-x-1/2 rounded-full bg-white/40" />
          </button>


          {/* =====================================================
              TEDDY
          ===================================================== */}

          <button
  type="button"
  onClick={() => setIsPlaying((playing) => !playing)}
  aria-label={isPlaying ? "Stop the toys" : "Play with the toys"}
  className={`absolute left-[calc(50%+50px)] top-[25px] z-30 -translate-x-1/2 transition-transform duration-300 hover:scale-110 ${
    isPlaying
      ? "animate-[teddyDance_1s_ease-in-out_infinite]"
      : "animate-[teddyFloat_4s_ease-in-out_infinite]"
  }`}
>
  {/* Ears */}
  <div className="absolute -left-3 top-2 size-9 rounded-full bg-amber-300 sm:-left-4 sm:size-11" />

  <div className="absolute -right-3 top-2 size-9 rounded-full bg-amber-300 sm:-right-4 sm:size-11" />

  {/* Head */}
  <div className="relative size-[90px] rounded-[42%] bg-gradient-to-br from-amber-200 via-orange-300 to-orange-400 shadow-xl shadow-black/20 sm:size-[115px]">

    {/* Face */}
    <div className="absolute left-1/2 top-1/2 size-[65px] -translate-x-1/2 -translate-y-1/2 rounded-[42%] bg-amber-200 sm:size-[82px]">

      {/* Eyes */}
      <div className="absolute left-[16px] top-[21px] size-2 rounded-full bg-[#17351f] sm:left-[21px] sm:top-[27px] sm:size-2.5" />

      <div className="absolute right-[16px] top-[21px] size-2 rounded-full bg-[#17351f] sm:right-[21px] sm:top-[27px] sm:size-2.5" />

      {/* Eye highlights */}
      <div className="absolute left-[18px] top-[22px] size-0.5 rounded-full bg-white sm:left-[23px] sm:top-[28px]" />

      <div className="absolute right-[18px] top-[22px] size-0.5 rounded-full bg-white sm:right-[23px] sm:top-[28px]" />

      {/* Nose */}
      <div className="absolute left-1/2 top-[34px] h-3 w-4 -translate-x-1/2 rounded-full bg-[#7c3f20] sm:top-[43px] sm:h-4 sm:w-5" />

      {/* Smile */}
      <div className="absolute left-1/2 top-[46px] h-2 w-5 -translate-x-1/2 rounded-b-full border-b-2 border-[#7c3f20] sm:top-[57px]" />

    </div>
  </div>

  {/* Speech bubble */}
  <div className="absolute -right-16 -top-4 rounded-xl rounded-bl-sm bg-white px-2.5 py-1.5 text-[10px] font-black text-[#17351f] shadow-lg sm:-right-20">
    {isPlaying ? "Let's play! 🎉" : "Oops! 👀"}
  </div>
</button>


          {/* =====================================================
              TOY TRAIL
          ===================================================== */}

          <div
            className={`absolute bottom-[78px] left-1/2 z-10 flex -translate-x-1/2 gap-2 transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-70"
            }`}
          >
            <span className="size-2 rounded-full bg-yellow-300/70 animate-[sparkle_1.8s_ease-in-out_infinite]" />

            <span className="size-1.5 rounded-full bg-pink-300/70 animate-[sparkle_1.8s_ease-in-out_infinite_0.3s]" />

            <span className="size-2 rounded-full bg-sky-300/70 animate-[sparkle_1.8s_ease-in-out_infinite_0.6s]" />
          </div>


          {/* =====================================================
              SPARKLES
          ===================================================== */}

          <span className="absolute left-[28%] top-[35%] text-lg text-yellow-300 animate-[sparkle_2s_ease-in-out_infinite]">
            ✦
          </span>

          <span className="absolute right-[28%] top-[42%] text-base text-emerald-300 animate-[sparkle_2s_ease-in-out_infinite_0.7s]">
            ✦
          </span>


          {/* =====================================================
              TOY BOX
          ===================================================== */}

          <div
            className={`absolute bottom-0 left-1/2 w-[70%] max-w-[360px] -translate-x-1/2 transition-transform duration-500 ${
              isPlaying ? "rotate-[-1deg]" : "rotate-[1deg]"
            }`}
          >

            {/* Box glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-emerald-400/10 blur-xl" />


            {/* Back lip */}
            <div className="relative h-8 rounded-t-2xl border border-white/10 bg-gradient-to-b from-emerald-600 to-emerald-800" />


            {/* Main box */}
            <div className="relative h-20 rounded-b-[1.5rem] border border-white/10 bg-gradient-to-b from-emerald-800 to-emerald-950 shadow-[0_20px_50px_rgba(0,0,0,.4)] sm:h-24">

              {/* Box label */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">

                <p className="font-heading text-sm font-black">
                  OOPS! 404
                </p>

                <p className="mt-0.5 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                  One toy went missing
                </p>

              </div>

            </div>
          </div>

        </div>


        {/* =========================================================
            INTERACTION PROMPT
        ========================================================= */}

        <p className="mt-2 text-xs font-bold text-emerald-200/50">
          Psst... try clicking the toys 👀
        </p>


        {/* =========================================================
            ACTIONS
        ========================================================= */}

        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="
              rounded-2xl
              bg-gradient-to-r
              from-emerald-500
              to-emerald-400
              px-7
              py-3.5
              text-sm
              font-black
              text-[#071a0f]
              shadow-xl
              shadow-emerald-950/50
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.02]
              hover:shadow-2xl
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
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/15
            "
          >
            ✨ Find an adventure
          </Link>

        </div>

      </div>


      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style jsx>{`

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-10px) rotate(4deg);
          }
        }


        @keyframes teddyFloat {
          0%,
          100% {
            transform: translateX(-50%) translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateX(-50%) translateY(-7px) rotate(2deg);
          }
        }


        @keyframes teddyDance {
          0%,
          100% {
            transform: translateX(-50%) rotate(-4deg);
          }

          25% {
            transform: translateX(-50%) rotate(5deg) translateY(-4px);
          }

          50% {
            transform: translateX(-50%) rotate(-5deg);
          }

          75% {
            transform: translateX(-50%) rotate(5deg) translateY(-4px);
          }
        }


        @keyframes toyBounce {
          0%,
          100% {
            transform: translateY(0) rotate(-6deg);
          }

          50% {
            transform: translateY(-14px) rotate(5deg);
          }
        }


        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.7) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.2) rotate(20deg);
          }
        }

      `}</style>

    </main>
  );
}