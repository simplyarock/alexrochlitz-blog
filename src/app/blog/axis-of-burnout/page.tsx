import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "The Axis of Burnout: How to Actually Calculate Your Stress Levels (and Stop Lying to Yourself About It)",
  description:
    "Burnout is cumulative. This framework helps you actually calculate your stress load and decide what to do about it.",
  openGraph: {
    images: ["/images/axis-of-burnout.png"],
  },
};

const tags = ["psychology", "therapy", "parenting", "tool"];

export default function AxisOfBurnoutPage() {
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-wide text-black/60">
          November 6, 2025
        </p>
        <h1 className="text-4xl font-semibold">
          The Axis of Burnout: How to Actually Calculate Your Stress Levels (and
          Stop Lying to Yourself About It)
        </h1>
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
        src="/images/axis-of-burnout.png"
        alt="Axis of burnout chart"
        width={1200}
        height={720}
        className="w-full rounded-3xl object-cover shadow-sm"
        priority
      />

      <a
        href="/downloads/the-axis-of-burnout-calculator.xlsx"
        className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white/70 px-5 py-2 text-sm font-semibold transition hover:bg-white"
        download
      >
        Download the Axis of Burnout Calculator
      </a>

      <div className="flex flex-col gap-5 text-lg text-black/90">
        <p>
          Burnout is a term that gets thrown around a lot these days. In fact
          it&apos;s on its way down the bell curve from its peak as a contribution
          to the millennial worker bee awakening against the oppressive
          corporate machine, to a term you can now find in the title of your
          annual mandated HR training module. But burnout is a very real thing
          that society is starting to pay attention to.
        </p>
        <p>
          What is it? Burnout is a state of chronic physical and emotional
          exhaustion, often resulting from prolonged stress, overwork, or
          unrelenting demands in both personal and professional environments. It
          can occur in various contexts - workplace, caregiving situations, or
          academic pressures. And this is how we typically think about burnout:
          in a vacuum, related to a particular environment or situation.
        </p>
        <p>
          &quot;I&apos;m burned out at work.&quot; &quot;Parenting is burning me out.&quot; &quot;I&apos;m
          burned out from taking care of my aging parents.&quot;
        </p>
        <p>
          Sure, all of that is true. But here&apos;s what nobody tells you: burnout
          isn&apos;t just about one thing. It&apos;s about everything, all at once,
          compounding like interest on your student loans.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">
          The Most Common Modern Day Examples of Burnout
        </h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            The most common example in my network of overworked and entitled
            middle-aged Americans is being burned out from parenting. Our middle
            class boomer parents worked hard to shield us from the horrors of
            being new parents, and as much as I like to claim our brave
            admission of how brutally difficult it is to be a parent (yes
            sharing an instagram meme is courageous) as societal progress, they
            had things like single income households (i.e. stay-at-home parents)
            and church communities to help shoulder the burden of keeping a
            minivan full of little monsters alive and fed.
          </p>
          <p>
            We millennials? We&apos;ve been working two post-college full-time jobs
            to save up for the down payment on a house that someone paid $50K
            for in 1992 (and is now minting a fortune on), all while raising
            kids in our nuclear family bubbles (more on this later) for 10
            years. It&apos;s fucking exhausting. I feel your pain, brother. But we
            love our kids, perhaps even more than our parents did as we continue
            on this path of societal self-awareness. So we soldier on, forcing
            socks onto feet while packing lunches on no sleep, feeling
            completely burned out about being a parent.
          </p>
          <p>
            Feeling burned out at work is the second most common example for my
            &quot;peers&quot;. For whatever fucked up reason (capitalism? freedom? the
            American Dream?), we are working more hours than our parents despite
            productivity (i.e. the amount of net profit that goes to the
            shareholders) increasing by 1-2% every year since the 1970s.
          </p>
          <p>
            And it&apos;s not just the hours - doing the same meaningless (your words
            not mine) tasks over and over again for years would make even the
            toughest monkey in the colony want to blow his brains out. But until
            the ghost of Bernie Sanders provides universal income to every man,
            woman, and child with a US birth certificate (don&apos;t hold your breath
            ... this technology is decades away and I don&apos;t think Bernie has
            enough time), you have to work. For important reasons like food,
            shelter, and perhaps more importantly, a reason to get out of bed in
            the morning if you weren&apos;t lucky enough to be: 1. Naturally
            enthusiastic about something you can earn money doing, AND 2. Raised
            in a place where anything besides hard labor and cold cash mattered
            (e.g. &quot;no son of mine is gonna sing in the musical!&quot;).
          </p>
          <p>
            Our parents - and severely underpaid high school guidance counselors
            (my dad was a high school guidance counselor, maybe he was paid
            fairly ... zing!) - told us to go to college or you&apos;ll end up like
            that loser shoveling asphalt in 100-degree heat we just passed on our
            way to McDonald&apos;s. But now that we have five-figure student loan
            debt, and that burnout from high school who started asphalt
            shoveling after graduation owns his own asphalt shoveling company,
            how can you blame us for working ourselves sick to create a
            PowerPoint presentation that MIGHT earn you a sweet 4.3% raise this
            year (but will 100% guaranteed be presented once and then thrown in
            the proverbial electronic garbage can)?
          </p>
          <p>
            We are taught that we&apos;re supposed to care about our work, and for
            most of us that means providing some insignificant amount of input
            into a conglomerate that ultimately sells toothpaste, or cloud-based
            ATM Receipt Analytics Dashboards, or something that adds even less
            value to society.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">
          The Uncomfortable Truth About Your Job
        </h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            When I was a young boy driven by deep-rooted insecurities I would
            only begin to discover many years later, it was really easy for me
            to get excited about the possibility that if I worked my ass off and
            kept my mouth shut while being treated like garbage, I MIGHT get to
            present my work to an important client. Their approval meant I had
            done a good job and therefore was fulfilling my destiny as an
            American man (good boy).
          </p>
          <p>
            Unfortunately, when my path to self-awareness reached levels of
            minimal self-reflection, it became a lot harder to get excited about
            the approval of a faceless corporate executive&apos;s atta-boy. I worked
            at 30+ big companies as a consultant, and one of the biggest
            companies in the world for 8 years, and I hate to break this to you
            but: even if you are incredibly talented AND willing to work 80
            hours a week until you&apos;re 65 or dead (whichever comes first), at a
            big corporation you will never have a high degree of control over:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>What you work on</li>
            <li>Your compensation</li>
            <li>Who you work for and with</li>
            <li>
              The amount of time you need to work at any given time or place
            </li>
            <li>Your long-term financial security</li>
          </ul>
          <p>...and it&apos;s only getting worse.</p>
          <p>
            Do you see where I&apos;m headed yet? This is your entire life. Your
            family&apos;s life, present and future. It&apos;s not meaningless - it means
            a lot. And it&apos;s human to take pride in what you do. You should, even
            if it&apos;s processing the monthly employee payroll audit analysis for a
            company that sells breakfast cereal to children with more sugar per
            serving than a birthday cake.
          </p>
          <p>
            But this is a lot to juggle, and the truth is that your role in
            auditing those payroll reports at the cereal company DOESN&apos;T MATTER.
            The world would probably be a better place without your deliciously
            fattening cereals, and there is a line of qualified payroll auditors
            with more student loan debt than you who could replace you in 3.5
            business days.
          </p>
          <p>
            You shouldn&apos;t be embarrassed about that. Making those audit reports
            puts food on your table. You get to eat as much Matt Rife co-branded
            Poopy-O&apos;s as your little heart can handle from 9-5 in an
            air-conditioned room in a $1,200 chair. It&apos;s not a bad deal, and if
            you can manage to avoid the rolling layoffs and constant AI
            fear-mongering, it&apos;s not a bad life. That faceless executive who
            doesn&apos;t give a shit about your annual cereal audit report? He or she
            is miserable, trust me. But the system is set up so you will work
            your ass off and deprioritize almost everything else in your life to
            get that pat on the back.
          </p>
          <p>
            You&apos;ve got a lot stacked against you here, and in an attempt to
            obtain our most basic human needs (food, shelter, meaning/purpose),
            it&apos;s really easy to burn yourself out at work.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">
          The Big Insight: Burnout is Cumulative
        </h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>But I want you to think about burnout in a more holistic life perspective.</p>
          <p>
            Yes, you can be burned out with work or with your kids, and
            addressing those individual causes of burnout is absolutely going to
            help you. Go on a 10-day vacation. Negotiate a weekly personal night
            away from the kids with your partner. You will feel better.
          </p>
          <p>
            But here&apos;s the thing: while you can be &quot;burned out&quot; from individual
            things like work or parenting, the effects - i.e., the &quot;feeling&quot; of
            being burned out - is a cumulative thing made up of ALL the
            stressors in your life, from as big as your job to as small as
            paying your water bill.
          </p>
          <p>
            Every worldly requirement, all your responsibilities - your job,
            your kids&apos; livelihood, your house, your bills, your parents, your
            friends, your dog, your lawn, your boss, making your bed, your
            health, your abnormal bowel movements, etc. - each one of these
            responsibilities is a potential stressor. (And when I say potential,
            what I mean is that your parents might not represent a stressor for
            you every single day, but you can damn well guarantee the number of
            days is not zero.)
          </p>
          <p>
            The sum of ALL of these individual stressors is what makes you feel
            &quot;burned out&quot; at the end of the day.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">The Ever-Increasing Load of Adult Life</h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            Thinking about your life (or mine) as an ever-increasing load of
            responsibilities as you grow up is a good way to visualize this:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              High school: My main responsibility was to show up to school at
              some point, go to sports practice, return home at some point, and
              try not to get kicked out or arrested.
            </li>
            <li>
              College: I had to show up for exams (which I always studied for
              all-nighter style, fueled by Adderall, coffee, and chewing tobacco,
              usually forgetting everything I learned after acing the test),
              press a button to have my student loan money deposited into my
              bank account, and try not to die from alcohol poisoning (easier
              said than done in late 2000s college society).
            </li>
            <li>
              Single man in my 20s: I had nothing but work to worry about (and I
              hate to burst your bubble/skip to the end, but your corporate job
              is a lot less stressful than you give it credit for). No wife, no
              kids, no money problems - just good old-fashioned ladder climbing
              and stuffing it down with brown (i.e. still blissfully ignoring
              all of my personal issues and rampantly untreated ADHD symptoms).
            </li>
            <li>
              Moving in with my ex-wife: That&apos;s when shit started to get real. I
              had another person I had to keep happy and compromise with. I had
              to start thinking about how my actions (or lack thereof) impacted
              other people. In other words, I had to start acting like a grownup
              for the first time in my life.
            </li>
            <li>
              First kid: I&apos;m going to skip the details on this one, but suffice
              to say the amount of responsibilities I had in my life sky-rocketed
              overnight.
            </li>
          </ul>
          <p>
            I often claim (in therapy or in one of my daily rambling monologues)
            that my &quot;happiest period&quot; was that time in my 20s when I had
            basically zero responsibilities beyond showing up to work. And you
            know what? It probably was. Not because my life was more fulfilling
            or meaningful, but because I had the mental and emotional capacity
            to actually enjoy it.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">
          The Axis of Burnout: A Simple Framework to Calculate Your Actual Stress Load
        </h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            So here&apos;s where we get practical. I&apos;ve created a simple framework
            to help you visualize and calculate whether you&apos;re actually over
            capacity - or if you&apos;re just being a little bitch about folding
            laundry (sorry this isn&apos;t targeted at anyone specifically).
          </p>
          <h3 className="text-2xl font-semibold">The Two Dimensions of Stress</h3>
          <p>Every responsibility in your life creates stress along two dimensions:</p>
          <div className="space-y-4 rounded-2xl border border-black/10 bg-white/60 p-5">
            <div>
              <p className="font-semibold">1. Personal Importance (Priority)</p>
              <p>
                How much you prioritize this thing relative to how critical it is
                to your life. This is YOUR assessment of importance, not
                society&apos;s or your mother&apos;s.
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Score 10: Something you must do or you&apos;ll die. If you have HIV
                  and need to take a pill cocktail every day to stay alive,
                  &quot;Health&quot; is a 10/10 Personal Importance.
                </li>
                <li>
                  Score 5: Important but not life-or-death. Your lawn needs
                  mowing, your boss wants that report, but you won&apos;t literally
                  die if it doesn&apos;t happen immediately.
                </li>
                <li>Score 1: Low priority. Nice to have, but optional.</li>
              </ul>
              <p>
                The level of Personal Importance you give a responsibility has a
                direct correlation to the amount of stress this thing creates.
                Your brain allocates &quot;worry capacity&quot; (cortisol, intrusive
                thoughts, that Sunday Scaries feeling) based on how important
                you&apos;ve decided something is.
              </p>
            </div>
            <div>
              <p className="font-semibold">2. Complexity (Mental Load)</p>
              <p>
                How much &quot;thought&quot; (aka mental processing capacity, planning,
                and thinking time) does this responsibility or task require?
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Score 10: Requires extensive planning, decision-making,
                  coordination, or learning. Examples: Planning a wedding,
                  managing a complex project at work, navigating your aging
                  parent&apos;s healthcare.
                </li>
                <li>
                  Score 5: Moderate complexity. You know what to do, but it
                  requires some thought and execution. Examples: Meal planning
                  for the week, organizing your home office.
                </li>
                <li>
                  Score 1: Simple and straightforward. Examples: Taking a pill,
                  brushing your teeth, paying a bill online.
                </li>
              </ul>
              <p>
                You might not care much about how green your lawn is, but it
                still needs to be mowed. Are you going to buy a mower or hire a
                lawn cutter? Do you want a push mower or a bad-boy zero-turn
                with multiple cup holders? The answer to all of these questions
                might be &quot;I don&apos;t give a flying fuck,&quot; however, your lawn isn&apos;t
                going to mow itself today or in 5.5 days when it rains.
              </p>
              <p>
                Taking a pill that keeps you alive, however, is as simple and
                straightforward as possible: open pill bottle, insert pill into
                mouth, swallow. Once you remember to perform this task, the
                complexity level is close to zero, which contributes
                significantly less stress to your overall load.
              </p>
            </div>
          </div>
          <p className="font-semibold">Your Total Stress Load Formula</p>
          <p>
            Here&apos;s the key insight: Your total stress for any given
            responsibility = Personal Importance + Complexity. This gives you a
            score between 2-20 for each responsibility. The higher the combined
            score, the more stress that responsibility creates.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>HIV medication: Importance = 10, Complexity = 1 -&gt; Total Stress = 11</li>
            <li>Lawn care (for someone who doesn&apos;t care): Importance = 3, Complexity = 5 -&gt; Total Stress = 8</li>
            <li>Parenting: Importance = 9, Complexity = 9 -&gt; Total Stress = 18 (maximum stress!)</li>
          </ul>
          <p>
            Notice how parenting, which rates high on both dimensions, creates a
            MASSIVE stress load even though it&apos;s just one item on your list?
          </p>

          <Image
            src="/images/axis-of-burnout.png"
            alt="Axis of burnout framework chart"
            width={1200}
            height={720}
            className="w-full rounded-3xl object-cover shadow-sm"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">The Critical Third Element: Your Stress Capacity</h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            Here&apos;s where it gets real: Everyone has a maximum stress capacity.
            Think of it like a battery or a gas tank. Some people naturally have
            more capacity (bigger tanks), some have less. Factors that affect
            your capacity:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Natural resilience: Some people are just wired to handle more stress</li>
            <li>How you were raised: Did your parents teach you coping mechanisms or just model avoidance?</li>
            <li>Mental health conditions: ADHD, anxiety, depression, etc. can significantly reduce your baseline capacity</li>
            <li>Physical health: Sleep, nutrition, exercise all affect your capacity</li>
            <li>Life circumstances: Going through a divorce, caring for aging parents, financial stress - these all eat into your available capacity</li>
          </ul>
          <p>
            Your Maximum Capacity is standardized at 100 points for everyone as
            a baseline. Personal factors like ADHD, being a single parent, or
            having health issues should be reflected in HOW YOU SCORE your
            individual responsibilities, not in adjusting this capacity number.
          </p>
          <p>
            If your Excess Capacity is negative, you are officially burned out.
            You are trying to operate with a deficit, and your body is screaming
            at you about it through anxiety, depression, irritability, physical
            symptoms, and that overwhelming feeling of &quot;I can&apos;t fucking do this
            anymore.&quot;
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">How to Use This Framework: The Burnout Worksheet</h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>Grab a piece of paper (or download this spreadsheet if you&apos;re feeling fancy) and do this exercise:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              List Your Top 10 Responsibilities. Group them into categories if it helps:
              Survival: Job, basic chores, health maintenance - Relationships: Partner, kids, parents, friends - Self: Hobbies, rest, personal development.
            </li>
            <li>
              Score Each Responsibility. For each one, assign scores (1-10) for:
              Personal Importance and Complexity. Then calculate: Total Stress = Importance + Complexity.
            </li>
            <li>Calculate Your Required Capacity. Add up all the Total Stress scores.</li>
            <li>Set Your Maximum Capacity. Your Maximum Capacity is 100 points.</li>
            <li>
              Calculate Your Excess Capacity = Maximum Capacity - Required Capacity.
              Positive number? You have room to breathe. At or near zero? You&apos;re maxed out. Negative number? You are burned out.
            </li>
          </ol>
          <p>
            Important: If you have ADHD, mental health challenges, or difficult
            life circumstances, you don&apos;t adjust this number. Instead, you
            account for those factors when scoring your individual
            responsibilities. For example:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>If you have ADHD, &quot;Chores&quot; might be Complexity = 8 instead of 6</li>
            <li>If you&apos;re a single parent, &quot;Parenting&quot; might be Importance = 10, Complexity = 10</li>
            <li>If you&apos;re managing chronic illness, &quot;Health&quot; scores higher on both dimensions</li>
          </ul>
          <p>
            Your personal challenges make responsibilities MORE stressful, not
            your capacity LESS. The math works out the same, but this framing
            helps you see exactly which responsibilities are hardest for YOU.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">My Burnout Calculation (As an Example)</h2>
        <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white/70">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-black/10 bg-white/80">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Responsibility</th>
                <th className="px-4 py-3">Importance</th>
                <th className="px-4 py-3">Complexity</th>
                <th className="px-4 py-3">Total Stress</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Survival", "Job", 8, 4, 12],
                ["Survival", "Chores", 6, 6, 12],
                ["Survival", "Health", 8, 8, 16],
                ["Self", "Hobbies", 6, 3, 9],
                ["Self", "Vacation/Rest", 5, 7, 12],
                ["Relationships", "Parents", 5, 10, 15],
                ["Relationships", "Partner", 8, 6, 14],
                ["Relationships", "Friends", 7, 7, 14],
                ["Relationships", "Parenting", 9, 9, 18],
              ].map((row) => (
                <tr key={row.join("-")} className="border-b border-black/5">
                  {row.map((cell, index) => (
                    <td key={`${row[1]}-${index}`} className="px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-3 text-lg text-black/90">
          <p>Alex&apos;s Total Required Capacity: 122 points</p>
          <p>My Maximum Capacity: 100</p>
          <p>My Excess Capacity: -22</p>
          <p>
            Why my capacity isn&apos;t higher: I don&apos;t adjust the 100 down for having
            ADHD or being divorced. Instead, I score my responsibilities higher
            because they&apos;re genuinely harder for me. For example, my &quot;Health&quot;
            scores 8 + 8 = 16 because ADHD makes routine health habits extremely
            complex to maintain.
          </p>
          <p>
            Conclusion: I am operating at a significant deficit. No wonder I
            feel burned the fuck out most days.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">What This Means (And What to Do About It)</h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            Here&apos;s the uncomfortable truth: You can&apos;t just &quot;manage your stress
            better&quot; if you&apos;re operating at a deficit. All those bullshit
            corporate wellness programs that tell you to &quot;practice self-care&quot;
            and &quot;set boundaries&quot;? They&apos;re not wrong, but they&apos;re incomplete.
            You can&apos;t yoga your way out of having more responsibilities than you
            have capacity to handle.
          </p>
          <p>You have three options:</p>
          <div className="space-y-4 rounded-2xl border border-black/10 bg-white/60 p-5">
            <div>
              <p className="font-semibold">Option 1: Increase Your Maximum Capacity</p>
              <p>
                This is the long-term play. Work on physical health (sleep,
                exercise, nutrition), mental health (therapy, medication if
                needed, developing coping skills), support systems (building a
                network of people who can help shoulder the load), and skills
                development (get better at the things that create complexity).
              </p>
              <p>This takes time - months or years - but it&apos;s the most sustainable path.</p>
            </div>
            <div>
              <p className="font-semibold">Option 2: Reduce Your Required Capacity</p>
              <p>
                This is the hard one because it requires letting go: lower your
                standards, delegate, say no, eliminate what you can completely
                remove from your plate. This feels like failure. It&apos;s not. It&apos;s
                survival.
              </p>
            </div>
            <div>
              <p className="font-semibold">Option 3: Suffer</p>
              <p>Don&apos;t do this one. This is where most of us live by default, and it ends in divorce, job loss, health crisis, or worse.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">The Critical Insight You&apos;re Missing</h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            Here&apos;s something that took me years of therapy to understand: The
            amount of time a responsibility takes is NOT the primary driver of
            stress.
          </p>
          <p>
            You might spend 8 hours a day at work, but if that work is
            straightforward and you don&apos;t care that much about it, it might not
            be your biggest stressor. Meanwhile, you might spend only 30 minutes
            a week calling your aging parent, but if that relationship is
            complex and emotionally fraught, those 30 minutes could be eating up
            more of your overall mental capacity than your entire workday.
          </p>
          <p>
            This is why people burn out on things that &quot;shouldn&apos;t&quot; be that hard.
            You&apos;re not weak. You&apos;re not lazy. You&apos;re just operating at a
            deficit, and your body is trying to tell you that.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">A Final Note on Personal Importance vs. Actual Importance</h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            One more critical insight: What matters to you personally is a
            personal choice ... to a point.
          </p>
          <p>
            I&apos;m not going to recommend you score some aspect of your physical
            health a 1, or leave it off your priority list completely. I think
            there is a basic level of health, relationships, and personal
            identity (i.e., your work, your hobbies) that require a minimum
            level of prioritization for every human being in order to be happy
            AND be able to show up for whatever else makes your list. If you&apos;re
            lazy and want some help in this area (or are so burned out at this
            point that you can&apos;t do much more that sit around watching TV all
            day) watch the documentary &quot;Stutz&quot; on Netflix (if you can&apos;t tell by
            now I really like Mr. Stutz) - it&apos;s about a famous Psychiatrist
            named Phil Stutz who over his long career ended up treating a lot of
            Hollywood people including Jonah Hill who loved him so much he made
            a pretty chill movie about him.
          </p>
          <p>
            Stutz has a concept called The Life Force Pyramid that if I may
            summarize states that no matter who you are, what you have going on
            in your life, and what happened to you to get you there, there are
            three things that every human can do to improve their overall state
            of well being, by focusing on your relationship with: 1) Your Body
            (sleep, movement, diet) 2) Your Relationships (Friends, Family,
            Community) 3) Your-self (Self-reflection ... which is hard so Stutz
            says just write down ANYTHING going through your head, and if that
            is too scary for you don&apos;t call it journaling call it &quot;Brain
            Exercise&quot; or something your bros won&apos;t bust you for ...).
          </p>
          <p>
            But everyone is different. The point is that we all have a maximum
            amount of capacity, and how each of us utilizes (or over- or
            under-utilizes) this capacity depends on: 1. How much personal
            importance or priority individual responsibilities have to us (we
            all have minimum responsibilities) 2. How complex or (over time)
            &quot;standardized&quot; our responsibilities are 3. Ultimately, how capable
            we are at managing everything.
          </p>
          <p>
            Some people are naturally more resilient or were raised to be. Some
            people have issues like severe ADHD that make the complexity of
            tasks/responsibilities much more difficult or intensive. Some people
            are naturally good at solving problems or being calm under pressure.
            We all have strengths and weaknesses that can apply to individual
            responsibilities, or to how we manage them all holistically.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Now Go Do the Work</h2>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            Stop reading and actually do the exercise. I&apos;m serious. Grab a piece
            of paper right now and: 1. List your top 10 responsibilities 2.
            Score them on Importance and Complexity 3. Calculate your Total
            Stress for each 4. Add them up (Required Capacity) 5. Honestly
            assess your Maximum Capacity 6. Calculate your Excess Capacity.
          </p>
          <p>
            If you&apos;re negative, stop lying to yourself about &quot;powering through&quot;
            and make a plan to either increase capacity or reduce requirements.
          </p>
          <p>
            If you&apos;re at zero, you&apos;re one crisis away from a breakdown. If
            you&apos;re positive, congratulations - use that capacity wisely before
            life fills it up for you.
          </p>
          <p>
            And if this helped you, share it with someone who needs to hear it.
            Because we&apos;re all out here trying to figure this shit out, and maybe
            if we stop pretending we have it all together, we can actually help
            each other survive.
          </p>
          <p>
            Want more brutally honest mental health content? Follow me for more
            posts where I turn therapy concepts into something you might
            actually use. Or don&apos;t. I&apos;m not your dad.
          </p>
        </div>
      </section>
    </article>
  );
}
