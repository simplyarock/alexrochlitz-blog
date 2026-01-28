import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'How to be "happy"',
  description:
    "A blunt, practical tool for defining your values and building a life that actually fits them.",
  openGraph: {
    images: ["/images/how-to-be-happy-funny.png"],
  },
};

const tags = ["happiness", "therapy", "psychology", "process", "tool"];

export default function HowToBeHappyPage() {
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-wide text-black/60">
          April 24, 2025
        </p>
        <h1 className="text-4xl font-semibold">How to be &quot;happy&quot;</h1>
        <div className="flex flex-wrap gap-2 text-sm text-black/70">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <Image
        src="/images/how-to-be-happy-funny.png"
        alt="How to be happy featured illustration"
        width={1200}
        height={720}
        className="w-full rounded-3xl object-cover shadow-sm"
        priority
      />

      <div className="flex flex-col gap-5 text-lg text-black/90">
        <p>
          How we end up spending our life, especially that pesky 9-5, usually has
          little to nothing to do with our unique strengths and capabilities and
          everything to do with opportunity and survival just like it did 10,000
          years ago. It certainly has almost nothing to do with what will make
          you happy and fulfilled in most cases. Before you throw the book away,
          this is not meant to be a woe is me moment of sad reflection on your
          wasted years. This is a TOOL that will not only help you achieve your
          dreams, it will help you make smarter decisions every single hour of
          every single day for the rest of your life… sound too good to be true?
          Sorry, buster, most of these therapy tools and solutions I&apos;ll give
          you are that simple. It&apos;s one of the problems the field of psychology
          and therapy treatment has had with their marketing strategy over the
          years, all this hokey stuff about gratitude, journals and butthole
          sunning… it sounds like total bullshit to a person who grew up in a
          place where we&apos;re led to believe that the only solution to our
          problems is through a pill or a scalpel (or a pizza, or some money, but
          we&apos;re talking about medical problems here).
        </p>
        <p>
          I felt exactly the same way when this was first presented to me, not
          just the tools but some of the basic concepts of psychological well
          being. Before I started therapy, I had painfully come to the
          conclusion on my own that my goal in life should be to be happy, not
          to be rich or successful or not to die alone. But I had no idea what
          being happy meant much less how you go about achieving it, and that
          scared the shit out of me. My first therapist in San Francisco was a
          double Harvard graduated psychiatrist, and even she couldn&apos;t explain
          this basic idea of what being happy meant in a way I could understand.
          Think about it…really think about it, what is the first thing that
          comes to mind when you ask yourself what being happy means. Is your
          answer being with your kids or friends? Sipping espresso in a Paris
          Cafe? A bottle of high octane liquor? Sure those things are great in
          the moment, but how do you stay happy during the other 90% of your
          waking hours? How do you find joy while you plug away at spreadsheets
          in the dark, or clean your dog&apos;s puke pile off the new carpet, or
          while you&apos;re sitting in traffic fighting the urge to throw your
          cellphone at your screaming kid&apos;s face.
        </p>
        <p>
          The answer is that happiness is not a thing, it&apos;s a process; a process
          that you must (actively if you&apos;re reading this book) perform every
          day. Achieving happiness, or fulfillment, or whatever you want to call
          living a good life requires: Step One: define what is truly important
          to you, your &quot;values&quot; and Step Two: work and suffer every day to
          achieve or live up to these values.
        </p>
        <p>
          Sound excruciatingly simple? Let me explain…in order to be happy you
          must have a life filled with the things that make you happy. Forget
          about how you get there for now and think about what your life would
          look like in an ideal scenario from an outcome standpoint at a high
          level. For me I might start with:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            I want my kids to be as happy, fulfilled, and supported as possible
          </li>
          <li>I want to be healthy and fit</li>
          <li>
            I want a career that fulfills me and allows me to pay my mortgage
          </li>
          <li>I want to make time to pursue my passions like music &amp; writing</li>
          <li>
            I want an active social life and the type of fulfilling
            relationships (romantic and otherwise) that you see on sitcoms (you
            know where people actually care about each other…)
          </li>
        </ol>
        <p>
          By starting with the &quot;ideal state outcome&quot; vs. a lower level action
          or object (e.g. I&apos;m hoping that you choose &quot;feel true self worth /
          self confidence&quot; as opposed to &quot;own a ferrari&quot;) you will avoid doing a
          shitty job with step 1 by focusing on the more existential qualities
          of the life you want vs. some &quot;thing&quot; (person, place or object) that
          you think will make you happy. And if you really want to skip to the
          end I&apos;ll give you a hint, the answer to what makes a healthy person
          happy will never be something they can hold in their hands. I like to
          envision this step as pointing myself in the right direction, whereas
          step two is launching the missile (I am a missile whose purpose in
          life is to destroy goals in a good way in this analogy).
        </p>
        <p>
          So I&apos;ve made my list now so what? It looks as hokey and idealistic as
          a flower embroidered gratitude journal. Step two takes my sugar dusted
          &quot;life goals&quot; and turns them into more tangible goals and behaviors.
          All that&apos;s required is asking myself &quot;what will I do that is in my
          power to achieve this goal&quot;. For example:
        </p>
        <div className="space-y-4 rounded-2xl border border-black/10 bg-white/60 p-5">
          <div>
            <p className="font-semibold">
              1. I want my kids to be happy and fulfilled and supported as
              possible
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>I can read 2 parenting books this year and implement 1 idea from each</li>
              <li>
                I can work to create a schedule and structure for our home life
                that will teach them responsibility
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">2. I want to be healthy and fit</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>I will continue to crossfit 5x a week</li>
              <li>
                I will use chat gpt to create a high level diet plan and start
                with getting enough protein, then once I&apos;ve done that get
                enough veggies, etc.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">
              3. I want a career that fulfills me and allows me to pay my mortgage
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                I will take writing classes at night and work on my book while
                being grateful for my day job as a corporate axe man
              </li>
              <li>
                I will reach out to Adriane (former co-worker) about a potential
                role at Waymo (a more exciting and fulfilling corporate pursuit
                for me)
              </li>
            </ul>
          </div>
        </div>
        <p>
          And so on and so forth… I am not downplaying how laughable the
          prospect of &quot;going to crossfit 5x a week&quot; or &quot;taking writing classes
          at night&quot; might sound to most people. I&apos;ve spent 6 long years fixing
          my broken self and creating the space to achieve big goals. Your Step
          2 for &quot;I want to be healthy and fit&quot; might be &quot;go for a walk twice a
          week&quot; and that&apos;s fucking perfect. What you will discover is it
          doesn&apos;t matter if your goal is to get out of bed in the morning or
          cure cancer, you will get the same chemical dopamine impact (i.e.
          &quot;happiness&quot;) by simply setting a goal and following through.
        </p>
        <p>
          If you&apos;ve been bedridden for 5 years you better believe you&apos;re going
          to be as happy as that nerd who finally cracks the cancer code when
          you drag your ass out of bed for 5 days in a row.
        </p>
      </div>

      <Image
        src="/images/sad.png"
        alt="Sad illustration"
        width={1000}
        height={600}
        className="w-full rounded-3xl object-cover shadow-sm"
      />

      <div className="flex flex-col gap-5 text-lg text-black/90">
        <p>
          My therapy idol Phil Stutz calls this concept &quot;the string of pearls&quot;
          which is a beautiful articulation of a Buddhist philosophy with a hard
          ass Brooklyn twist. It is our life&apos;s purpose to string pearls on our
          necklace until we die. Each pearl is a single &quot;task&quot; we must do to
          exist, and every task from pitching your shitmobile to a potential
          investor to taking your morning shit is just a pearl the same as the
          last. Once you string a pearl, you move on to the next one without
          looking back because ironically every pearl has a little piece of shit
          in it, which is Stutz&apos;s beautiful way of saying that &quot;nothing you do
          will ever be perfect, so accept your pearl will have a little shit on
          it and move on&quot;.
        </p>
      </div>
    </article>
  );
}
