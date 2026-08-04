"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";

const topics = [
  "All",
  "Ingredient Spotlight",
  "Formulation & Nutrition Insights",
  "Regulatory & Compliance",
  "Industry & Trade News",
];

const articles = [
  {
    id: 1,
    title: "Why Origin Still Matters When a Supply Chain Gets Longer",
    excerpt:
      "How ingredient origin influences flavour, consistency, traceability and long-term product quality.",
    category: "Ingredient Spotlight",
    readTime: "6 min read",
    image: "/images/blog/origin-matters.webp",
    slug: "why-origin-still-matters",
  },
  {
    id: 2,
    title: "How Functional Staples Move From Concept to Shelf",
    excerpt:
      "A closer look at formulation, validation and production decisions behind nutrition-led everyday foods.",
    category: "Formulation & Nutrition Insights",
    readTime: "8 min read",
    image: "/images/blog/functional-staples.webp",
    slug: "functional-staples-concept-to-shelf",
  },
  {
    id: 3,
    title: "Understanding Food Labels Across Export Markets",
    excerpt:
      "Why nutritional claims, ingredient declarations and compliance requirements must be considered early.",
    category: "Regulatory & Compliance",
    readTime: "7 min read",
    image: "/images/blog/food-labelling.webp",
    slug: "food-labels-export-markets",
  },
  {
    id: 4,
    title: "What Global Buyers Now Expect From Food Manufacturers",
    excerpt:
      "Traceability, flexible production and verified quality are becoming standard expectations across markets.",
    category: "Industry & Trade News",
    readTime: "5 min read",
    image: "/images/blog/global-buyers.webp",
    slug: "global-buyer-expectations",
  },
  {
    id: 5,
    title: "Protein Isolates: Performance Beyond the Nutrition Panel",
    excerpt:
      "Protein content matters, but texture, taste, solubility and process behaviour decide whether a formula works.",
    category: "Formulation & Nutrition Insights",
    readTime: "9 min read",
    image: "/images/blog/protein-isolates.webp",
    slug: "protein-isolate-performance",
  },
  {
    id: 6,
    title: "Why Batch Traceability Has Become a Retail Requirement",
    excerpt:
      "Modern buyers increasingly expect visibility from raw-material source through production and shipment.",
    category: "Regulatory & Compliance",
    readTime: "6 min read",
    image: "/images/blog/batch-traceability.webp",
    slug: "batch-traceability-retail",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function KnowledgeHub() {
  const [activeTopic, setActiveTopic] = useState("All");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = useMemo(() => {
    if (activeTopic === "All") {
      return articles;
    }

    return articles.filter((article) => article.category === activeTopic);
  }, [activeTopic]);

  const handleSubscribe = (event) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setEmailError("Please enter your email address.");
      setSubscribed(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      setEmailError("Please enter a valid email address.");
      setSubscribed(false);
      return;
    }

    setEmailError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="bg-[#f7f4ed]">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:px-14 lg:pb-20 lg:pt-40">
        <div className="pointer-events-none absolute left-[-120px] top-[-80px] h-[360px] w-[360px] rounded-full bg-[#789444]/10 blur-[125px]" />

        <div className="pointer-events-none absolute right-[-100px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#c35531]/[0.07] blur-[120px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-[1380px]"
        >
          <h1 className="mt-5 max-w-[950px] font-heading text-[48px] font-black uppercase leading-[0.9] tracking-[-0.035em] text-[#294526] sm:text-[66px] lg:text-[88px]">
            The Knowledge Hub.
          </h1>

          <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-[#34422e]/72 sm:text-[19px]">
            Nutrition science, sourcing insight, and industry updates.
          </p>
        </motion.div>
      </section>

      {/* Topic tabs and articles */}
      <section className="px-5 pb-20 sm:px-8 lg:px-14 lg:pb-28">
        <div className="mx-auto max-w-[1380px]">
          {/* Topic tabs */}
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none">
            {topics.map((topic) => {
              const active = activeTopic === topic;

              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setActiveTopic(topic)}
                  className={`shrink-0 rounded-full border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition duration-300 sm:text-[11px] ${
                    active
                      ? "border-[#294526] bg-[#294526] text-[#fff9df]"
                      : "border-[#294526]/15 bg-[#fffdf6] text-[#294526] hover:border-[#789444] hover:text-[#789444]"
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>

          {/* Article grid */}
          <motion.div
            key={activeTopic}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3"
          >
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group overflow-hidden rounded-[28px] border border-[#294526]/10 bg-[#fffdf7] shadow-[0_18px_48px_rgba(39,51,33,0.07)]"
              >
                <Link href={`/blogs/${article.slug}`}>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                    <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                      {article.readTime}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="inline-flex rounded-full bg-[#789444]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#687637]">
                      {article.category}
                    </span>

                    <h2 className="mt-5 font-heading text-[27px] font-bold uppercase leading-[1.02] tracking-[-0.015em] text-[#294526] sm:text-[30px]">
                      {article.title}
                    </h2>

                    <p className="mt-4 text-[14px] leading-7 text-[#34422e]/68 sm:text-[15px]">
                      {article.excerpt}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-[#294526]/10 pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c35531]">
                        Read Article
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#294526]/15 text-[#294526] transition duration-300 group-hover:bg-[#294526] group-hover:text-[#fff9df]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="m13 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-5 pb-20 sm:px-8 lg:px-14 lg:pb-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 36,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto overflow-hidden rounded-[34px] bg-[#294526] px-6 py-12 text-[#fff9df] shadow-[0_28px_70px_rgba(41,69,38,0.16)] sm:px-10 sm:py-16 lg:grid lg:max-w-[1380px] lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#789444]/20 blur-[90px]" />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b27a]">
              Newsletter
            </p>

            <h2 className="mt-5 font-heading text-[40px] font-bold uppercase leading-[0.94] tracking-[-0.025em] sm:text-[54px]">
              Stay Ahead Of The Market.
            </h2>

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#fff9df]/70 sm:text-[17px]">
              Formulation trends, ingredient innovation, and compliance updates
              — for the brands who manufacture with us.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            noValidate
            className="relative mt-9 lg:mt-0"
          >
            <label
              htmlFor="newsletter-email"
              className="mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#fff9df]/70"
            >
              Email address
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (emailError) {
                    setEmailError("");
                  }

                  if (subscribed) {
                    setSubscribed(false);
                  }
                }}
                placeholder="you@company.com"
                aria-invalid={Boolean(emailError)}
                aria-describedby={
                  emailError ? "newsletter-email-error" : undefined
                }
                className={`h-[54px] min-w-0 flex-1 rounded-full border bg-[#fffdf7] px-5 text-[15px] text-[#294526] outline-none transition placeholder:text-[#294526]/40 ${
                  emailError
                    ? "border-[#f1a080] ring-4 ring-[#c35531]/15"
                    : "border-transparent focus:ring-4 focus:ring-[#fff9df]/15"
                }`}
              />

              <button
                type="submit"
                className="h-[54px] shrink-0 rounded-full bg-[#c35531] px-7 font-heading text-[14px] font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#dd623c]"
              >
                Subscribe
              </button>
            </div>

            {emailError && (
              <p
                id="newsletter-email-error"
                className="mt-2 pl-3 text-[12px] font-medium text-[#ffd0bf]"
              >
                {emailError}
              </p>
            )}

            {subscribed && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                role="status"
                className="mt-3 pl-3 text-[13px] font-medium text-[#d8e7b5]"
              >
                Thank you. You&apos;re now subscribed to the Zeovus Knowledge
                Hub.
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>
    </main>
  );
}
