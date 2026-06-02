"use client";

import { useState } from "react";
import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";

const initialState: InquiryState = { status: "idle" };

const productOptions = [
  { value: "highlight-video", label: "Video de Highlights" },
  { value: "performance-report", label: "Informe de Rendimiento" },
  { value: "website", label: "Sitio Web" },
  { value: "full-pack", label: "Pack Completo" },
  { value: "not-sure", label: "No estoy seguro" },
];

export default function InquiryFormES() {
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
          ¡Mensaje recibido!
        </p>
        <p className="font-body mt-2 text-secondary-foreground">
          Te responderemos en 24–48 horas.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre completo"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Correo *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@ejemplo.com"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sport" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Deporte
          </label>
          <input
            id="sport"
            name="sport"
            type="text"
            placeholder="ej. Fútbol, Baloncesto"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="country" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            País
          </label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="ej. Argentina, España"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="age" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Edad *
          </label>
          <input
            id="age"
            name="age"
            type="number"
            required
            min="10"
            max="50"
            placeholder="ej. 22"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="ej. +34 600 000 000"
            className="font-body rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
          ¿Qué te interesa? *
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
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Cuéntanos sobre ti y lo que estás buscando..."
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
        {pending ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
