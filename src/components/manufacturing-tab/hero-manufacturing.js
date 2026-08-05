export default function HeroManufacturing() {
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
        <source src="/videos/innovation.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <div className="max-w-[900px]">
          <h1 className="font-heading text-[42px] font-black uppercase leading-[0.9] tracking-[-2px] text-[#FDFFDE] sm:text-[58px] md:text-[72px] lg:text-[88px]">
            <span className="block text-[#FDFFDE]">CAPABILITY</span>

            <span className="block text-[#B2BD77]"></span>

            <span className="block">
              BUILT FOR <span className="text-[#F69520]">SCALE</span>
            </span>
          </h1>
          <p className="mt-8 max-w-[760px] text-justify text-[17px] leading-8 text-[#fffde6]/82 sm:text-[19px] lg:text-[20px]">
            Zeovus Food manufactures plant-based staples and functional foods
            across every major format on the market today, from atta and
            protein flour blends to high-protein pasta, spaghetti and
            fettuccine; from instant sachets and retort-packed ready-to-eat
            meals to gourmet hummus and wholesome soups, inside FSSAI-licensed,
            GMP and HACCP-certified, allergen-controlled facilities, with
            flexible MOQs, custom formulation R&D, and capacity that scales from
            first sample to full commercial and export-ready volume without ever
            changing partners.
          </p>
        </div>
      </div>
    </section>
  );
}
