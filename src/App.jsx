import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Flower2, Gift, Mail, Star, Music2, ArrowRight } from "lucide-react";

// Personalize these first.
const DETAILS = {
  herName: "Kae",
  yourName: "Luca",
  subtitle: "A small little gift I've made just for you.",
  importantDate: "March 22nd, 2026",
  songTitle: "Until I found you",
};

const reasons = [
  "You make ordinary days feel softer.",
  "You make me feel at home.",
  "Your laugh is infectious. I love hearing it. Even if you're laughing at my dumb jokes.",
  "You match my energy better than anyone else.",
  "I love how sweet, kind, and caring you are to me.",
  "You make me feel worthy of your love.",
];

const memories = [
  {
    title: "A favorite memory",
    body: "My favorite memory about us is when we spent the whole weekend staying up late and spending an insane amount of time with each other. We would play first descendant, talk about anything and everything, and ultimately grow closer and closer. It's the moment I knew that I wanted you to be mine. The time flew by so quick even if we were spending 14+ hours with each other, it never felt like it because I was with you.",
  },
  {
    title: "Something I admire about you",
    body: "You don't take shit from anyone, even me when I'm being dumb. You also never try to be anyone or anything you're not, you always stay true to yourself and I love that.",
  },
  {
    title: "Things I never want you to doubt",
    body: "I never want you to doubt our relationship. I never want you to think you're not good enough for me or that either of us would be better off with someone else. I never want you to feel like you aren't heard or understood. I never want you to doubt how much you mean to me. I never want you to doubt how much I love and appreciate you. I never want you to doubt you're mine.",
  },
];

const promises = [
  "I promise to listen more carefully, and make sure you feel heard and understood.",
  "I promise to choose patience and understanding above everything.",
  "I promise to keep showing up, not just saying the right words.",
  "I promise to remember that love is something we protect together.",
];

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 7,
        size: 12 + Math.random() * 18,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-40px] text-rose-300/40"
          style={{ left: heart.left, fontSize: heart.size }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{ y: "-110vh", opacity: [0, 0.8, 0], rotate: 360 }}
          transition={{
            repeat: Infinity,
            delay: heart.delay,
            duration: heart.duration,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

function SectionHeader({ icon: Icon, eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-medium text-rose-600 shadow-sm backdrop-blur">
        <Icon className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-stone-600">{children}</p>}
    </div>
  );
}

function LoveLetterModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-rose-100 bg-white p-6 shadow-2xl md:p-9"
            initial={{ scale: 0.92, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-400">A letter for you</p>
                <h3 className="mt-2 text-3xl font-bold text-stone-900">Dear {DETAILS.herName},</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
              >
                Close
              </button>
            </div>

            <div className="space-y-5 text-lg leading-8 text-stone-700">
              <p>
                I know things have been hard lately, and I don’t want to pretend that one website magically fixes everything. But I made this because I wanted you to have something you could open and feel, even for a second, how much you mean to me.
              </p>
              <p>
                You are not just someone I love when things are easy. You are someone I care about enough to slow down for, listen to, learn from, and keep choosing with intention.
              </p>
              <p>
                I’m grateful for your heart, your presence, your patience, your laugh, and all the little pieces of you that make my world better. I don’t want you to wonder whether you matter to me. You do. More than I probably show sometimes.
              </p>
              <p>
                I want us to be able to heal, communicate better, and find our way back to each other gently. I’m here, I’m trying, and I love you.
              </p>
              <p className="pt-2 font-semibold text-stone-900">Always,</p>
              <p className="text-2xl font-bold text-rose-500">{DETAILS.yourName}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GirlfriendWebsite() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [secretVisible, setSecretVisible] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#ffe4ec,transparent_35%),linear-gradient(135deg,#fff7ed_0%,#fff1f2_45%,#fdf2f8_100%)] text-stone-900">
      <FloatingHearts />

      <section className="relative px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-medium text-rose-600 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Made with love, patience, and hope
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-7xl">
              For {DETAILS.herName}, my sweet and amazing girlfriend.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
              {DETAILS.subtitle} I made this because you deserve to feel loved, appreciated, and chosen. Especially while we’re finding our way through a hard time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setLetterOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-6 py-4 font-bold text-white shadow-lg shadow-rose-300/40 transition hover:-translate-y-0.5 hover:bg-rose-600"
              >
                Open your letter
                <Mail className="h-5 w-5 transition group-hover:rotate-6" />
              </button>
              <a
                href="#reasons"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-white/70 px-6 py-4 font-bold text-rose-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                See why I love you
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-rose-300/50 blur-2xl" />
            <div className="absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-pink-300/50 blur-2xl" />

            <div className="relative rounded-[2.5rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-rose-200/50 backdrop-blur">
              <div className="rounded-[2rem] bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-300" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-300" />
                  </div>
                  <Heart className="h-6 w-6 fill-rose-400 text-rose-400" />
                </div>

                <div className="mt-10 rounded-[2rem] bg-white/80 p-6 text-center shadow-inner">
                  <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-rose-200 to-pink-300 text-5xl shadow-lg">
                    💌
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Little reminder</p>
                  <p className="mt-3 text-3xl font-black text-stone-900">You are loved.</p>
                  <p className="mt-4 text-stone-600">
                    Not just on perfect days. Not just when everything is easy. Always.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {["Loved", "Chosen", "Enough"].map((word) => (
                    <div key={word} className="rounded-2xl bg-white/70 px-3 py-4 text-sm font-bold text-rose-500 shadow-sm">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="reasons" className="relative px-6 py-16 md:px-10">
        <SectionHeader icon={Heart} eyebrow="A few reasons" title="Things I love about you">
          I could make this list super long, but here are a few.
        </SectionHeader>

        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              className="rounded-[1.75rem] border border-white/80 bg-white/75 p-6 shadow-lg shadow-rose-100/60 backdrop-blur"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                <Heart className="h-5 w-5 fill-rose-400" />
              </div>
              <p className="text-lg font-semibold leading-7 text-stone-800">{reason}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <SectionHeader icon={Flower2} eyebrow="Our story" title="Little pieces of us">
          These are some things we have shared together so far, and things I never want you to doubt about us.
        </SectionHeader>

        <div className="mx-auto max-w-4xl space-y-5">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
              className="grid gap-4 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-lg shadow-rose-100/60 backdrop-blur md:grid-cols-[120px_1fr] md:p-7"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-200 to-pink-200 text-3xl shadow-sm">
                {index === 0 ? "🧠" : index === 1 ? "🌷" : "✨"}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900">{memory.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{memory.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-rose-100 bg-white/75 p-6 shadow-2xl shadow-rose-100/70 backdrop-blur md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-500">
                <Gift className="h-4 w-4" />
                What I want to give you
              </div>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">My endless love and effort.</h2>
              <p className="mt-5 leading-8 text-stone-600">
                I know love is more than a little website. It’s how I treat you, how I listen, how I repair, and how I show up after the difficult moments. These are promises I want to keep building on.
              </p>
            </div>

            <div className="grid gap-3">
              {promises.map((promise, index) => (
                <motion.div
                  key={promise}
                  className="flex items-start gap-4 rounded-3xl bg-gradient-to-r from-rose-50 to-pink-50 p-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-sm">
                    <Star className="h-4 w-4 fill-rose-400" />
                  </div>
                  <p className="text-lg font-semibold leading-7 text-stone-800">{promise}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-[2.5rem] border border-white/80 bg-white/75 p-8 shadow-xl shadow-rose-100/70 backdrop-blur md:p-12">
            <Music2 className="mx-auto h-10 w-10 text-rose-400" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">A song for us</p>
            <h2 className="mt-3 text-3xl font-black text-stone-900 md:text-5xl">{DETAILS.songTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-600">
              Until I found you, I didn't think it was possible for me to love and care about someone so much in such a short amount of time. I never thought I could find love as deep and strong as I did with you.
            </p>
            <a
              href="https://open.spotify.com/track/0T5iIrXA4p5GsubkhuBIKV?si=043b20b1e65b4416"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-stone-800"
            >
              Listen here
              <Music2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-10 md:px-10">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-pink-500 p-1 shadow-2xl shadow-rose-200">
          <div className="rounded-[2.35rem] bg-white/95 p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">One more thing</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
              I love you, {DETAILS.herName}.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Through the good days and the hard ones, you still mean so much to me. I don’t ever want to take you for granted. I want to keep learning how to love you better.
            </p>

            <button
              onClick={() => setSecretVisible((current) => !current)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-6 py-4 font-bold text-white shadow-lg shadow-rose-300/40 transition hover:-translate-y-0.5 hover:bg-rose-600"
            >
              Tap for a tiny secret
              <Heart className="h-5 w-5 fill-white" />
            </button>

            <AnimatePresence>
              {secretVisible && (
                <motion.div
                  className="mx-auto mt-6 max-w-xl rounded-3xl bg-rose-50 p-6 text-rose-700"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                >
                  <p className="text-xl font-bold">You are mine forever 💗</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <footer className="border-t border-rose-100 bg-white/50 px-6 py-8 text-center text-sm text-stone-500 backdrop-blur">
        Made by {DETAILS.yourName} for {DETAILS.herName} · {DETAILS.importantDate}
      </footer>

      <LoveLetterModal open={letterOpen} onClose={() => setLetterOpen(false)} />
    </main>
  );
}
