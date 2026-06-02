"use client";

import { useState } from "react";
import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";

const initialState: InquiryState = { status: "idle" };

const productOptions = [
  { value: "highlight-video", label: "Highlight Video" },
  { value: "performance-report", label: "Performance Report" },
  { value: "website", label: "Website" },
  { value: "full-pack", label: "Full Pack" },
  { value: "not-sure", label: "Not sure yet" },
];

export default function InquiryForm() {
  const [state, action, pending] = useActionState(submitInquiry, initialState);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const toggle = (v: string) =>
    setSelectedProducts((prev) =>
      prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]
    );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
        <p className="font-heading text-xl font-semibold text-foreground">
          Message received!
        </p>
        <p className="font-body mt-2 text-secondary-foreground">
          We'll get back to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sport" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Sport
          </label>
          <input
            id="sport"
            name="sport"
            type="text"
            placeholder="e.g. Soccer, Basketball"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="country" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="e.g. Argentina, USA"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="age" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Age *
          </label>
          <input
            id="age"
            name="age"
            type="number"
            required
            min="10"
            max="50"
            placeholder="e.g. 22"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +1 555 000 0000"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
          What are you interested in? *
        </label>
        <div className="flex flex-wrap gap-2">
          {productOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              className={`font-body rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                selectedProducts.includes(opt.value)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 bg-black/30 text-secondary-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="products" value={selectedProducts.join(",")} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about yourself and what you're looking for..."
          className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none resize-none"
        />
      </div>

      {state.status === "error" && (
        <p className="font-body text-sm text-red-400">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="font-body inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
