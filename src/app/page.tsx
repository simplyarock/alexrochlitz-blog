import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Hi I&apos;m Alex, I&apos;m a divorced father of two running an
          &quot;AI Startup&quot;, and I&apos;d like to be your unlicensed
          therapist (please).
        </h1>
        <div className="flex flex-col gap-5 text-lg text-black/90">
          <p>
            Most of my life I&apos;ve spent struggling to understand what was
            wrong with me, and chasing the love and acceptance I could never
            give myself. My severe (and largely un-diagnosed) ADHD didn&apos;t
            make things easier, but the majority of my issues came from good old
            fashioned generational trauma and Christianity just like you.
            Through some grit, shameless ambition, and a lot of luck, I created
            a life for myself that on paper most white suburban dads would trade
            their sexless marriages for (which ironically I soon did), and I
            tried all the best drugs. But by age 31 (shortly after my son was
            born) I was ready to check myself into a psych ward, I felt
            completely hopeless and paralyzed by my constant anxiety and deep
            depression. Through my son&apos;s love I found the strength to begin
            therapy.
          </p>
          <p>
            Nearly 7 years later therapy and the pursuit of mental health have
            become my life&apos;s passion, through it everything I do and who I
            am has changed. Had my entire identity not been smashed to bits, I
            would probably still be trying to hide my pain and misery by
            constantly reflecting on how fucked up the world and everyone else
            around me was. Like a drunk finally facing 3-5 after crashing his
            car through someone&apos;s living room window, it felt like a life
            or death court (or ex-wife) ordered requirement at first. So I
            showed up, every week sometimes twice out of desperation. And though
            it wasn&apos;t easy, this pursuit of happiness and self-awareness
            has been the most painful and frustrating thing I&apos;ve ever done,
            the small incremental progress started to shake out a level of
            dedication and aptitude I didn&apos;t know I was capable of. I&apos;ve
            seen 7 different therapists and psychiatrists, including 2 couples
            councilors and two in Ireland (if you want to count them, just
            kidding they&apos;re a lovely people), but I&apos;ve been with Rita
            for almost 4 years now. She would probably tell you that my
            sometimes obsessive research and practice outside of our weekly
            sessions deserve most of the credit for the (in our humble opinion)
            immense progress I&apos;ve made, but I would be nowhere without her
            and so many other people I&apos;ve been fortunate to learn from over
            the years (especially the assholes who showed me how not to live,
            and there have been a lot).
          </p>
          <p>
            Today I am so grateful for the life I have, I&apos;ve reached the
            cliche stage of proud reflection on everything I have overcome and
            all work I put in, most days I&apos;m truly happy. I still go to
            therapy every week and though less frequent continue to have major
            breakthroughs, for now there is still work to be done. Increasingly
            though, that work is less about my problems and more about my
            opportunities. For example, though I had reluctantly come to terms
            with the idea I would be an upper middle class corporate goon for
            the rest of my life (poor baby), it was through Rita&apos;s support
            and encouragement I finally decided to pursue my dream of writing.
          </p>
          <p>
            What I have to offer you is not a clinically researched solution to
            your problems, I&apos;m a guy from Detroit with a fucked up sense of
            humor who outsources jobs to India for a living. I&apos;m here to
            make complicated therapy and psychology concepts relatable and
            actionable through my tragic life lessons and until now unrealized
            literary genius (and I&apos;ll be damned if I don&apos;t make someone
            piss their pants laughing in the process). I&apos;m not a
            professional research scientist, but I do have a neurotic Adderall
            fueled Wikipedia addiction and a knack for relating Freudian
            concepts to e.g. the time in 3rd grade I shit my pants in my Uncle&apos;s
            suburban after eating too much Geno&apos;s East Pizza and the ensuing
            psychological trauma. Don&apos;t be fooled, I&apos;m also here for
            purely selfish reasons, writing makes me feel good, and the idea
            that anyone might take 5 minutes to read something I have to say
            makes me feel good too. The idea that what I have to say will
            actually help people feels more ambitious, but I&apos;ve learned to
            stop listening to the voice that says my ideas are crazy (maybe
            that was just my ex-wife, BOOM! I&apos;m kidding she&apos;s great). I
            still struggle to manage anxiety and depression, my incessant ADHD
            symptoms, and my ever evolving post-divorce identity (thankfully
            I&apos;m through my dating polyamorous married women phase, but I can
            almost guarantee something just as random and exciting is on the
            horizon). But I&apos;m in it for the long-haul, and I hope you are
            too.
          </p>
          <p>Peace and love,</p>
          <p>Alex</p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {[
          { src: "/images/dead.jpg", alt: "Alex standing with a playful pose" },
          { src: "/images/plane.jpg", alt: "Alex on a small plane runway" },
          { src: "/images/dunk.png", alt: "Alex mid-air dunk moment" },
          {
            src: "/images/guitar-boy.jpg",
            alt: "Alex holding a guitar and smiling",
          },
        ].map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="h-full w-full rounded-2xl object-cover shadow-sm"
          />
        ))}
      </section>
    </div>
  );
}
