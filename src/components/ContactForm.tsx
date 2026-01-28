"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgrbwyl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form
      className="flex max-w-2xl flex-col gap-4 rounded-3xl border border-black/10 bg-white/70 p-6 text-lg text-black/90"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-2 text-base">
        Name
        <input
          name="name"
          required
          className="rounded-xl border border-black/10 bg-white px-4 py-2 text-base"
          placeholder="Your name"
        />
      </label>
      <label className="flex flex-col gap-2 text-base">
        Email
        <input
          type="email"
          name="email"
          required
          className="rounded-xl border border-black/10 bg-white px-4 py-2 text-base"
          placeholder="you@email.com"
        />
      </label>
      <label className="flex flex-col gap-2 text-base">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-xl border border-black/10 bg-white px-4 py-2 text-base"
          placeholder="Write the thing. Hit send."
        />
      </label>
      <button
        type="submit"
        className="w-fit rounded-full border border-black/10 bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-black/80"
      >
        Send message
      </button>
      {status === "success" ? (
        <p className="text-sm text-black/70">
          Message sent. I&apos;ll read it between therapy homework and cold brew.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-black/70">
          Something broke. Try again or hit me on social.
        </p>
      ) : null}
    </form>
  );
}
