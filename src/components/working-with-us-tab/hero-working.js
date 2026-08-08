export default function HeroWorking() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-14 lg:pb-14 lg:pt-36">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-working.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/35" /> */}

      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/10" /> */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      {/* Content */}
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <div className="max-w-[980px]">  

          {/* Headline */}
          <h1 className="max-w-[920px] font-heading text-[42px] font-black uppercase leading-[1.02] tracking-[-0.02em] text-[#fffde6] sm:text-[58px] md:text-[72px] lg:text-[88px]">
           Bring the Brief.
            <br />
            <span className="text-[#f89b21]">We'll Bring the Batch.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
