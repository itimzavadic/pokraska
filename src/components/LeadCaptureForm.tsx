"use client";

import { FormEvent, useState } from "react";
import { Toast } from "./Toast";

type LeadCaptureFormProps = {
  variant?: "teal" | "indigo";
  submitLabel?: string;
  compact?: boolean;
};

export function LeadCaptureForm({
  variant = "teal",
  submitLabel = "Отправить заявку",
  compact = false,
}: LeadCaptureFormProps) {
  const [toastOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (name.length < 2) {
      setError("Укажите имя");
      return;
    }
    if (phone.replace(/\D/g, "").length < 9) {
      setError("Укажите корректный телефон");
      return;
    }
    if (!consent) {
      setError("Нужно согласие на обработку персональных данных");
      return;
    }

    setError("");
    form.reset();
    setConsent(false);
    setToastOpen(true);
  }

  const fieldClass =
    variant === "teal"
      ? "w-full rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-white placeholder:text-white/60"
      : "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-teal-soft";

  const buttonClass =
    variant === "teal"
      ? "w-full rounded-xl bg-white px-4 py-3 font-semibold text-indigo transition hover:bg-muted disabled:opacity-50"
      : "w-full rounded-xl bg-teal px-4 py-3 font-semibold text-white transition hover:bg-teal-hot disabled:opacity-50";

  const checkLabelClass =
    variant === "teal" ? "text-white/85" : "text-white/80";

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-3" noValidate>
        <div className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
          <label className="block">
            <span className="sr-only">Имя</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Контактное лицо"
              className={fieldClass}
              required
            />
          </label>
          <label className="block">
            <span className="sr-only">Телефон</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+375 (__) ___-__-__"
              className={fieldClass}
              required
            />
          </label>
        </div>
        {!compact && (
          <label className="block">
            <span className="sr-only">Комментарий</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Организация, тип объекта, площадь, сроки"
              className={`${fieldClass} resize-y`}
            />
          </label>
        )}
        <label className={`flex items-start gap-3 text-sm ${checkLabelClass}`}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-teal"
            required
          />
          <span>
            Согласен(на) на обработку персональных данных для связи по заявке
          </span>
        </label>
        {error && (
          <p className="text-sm font-medium text-white/95" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className={buttonClass} disabled={!consent}>
          {submitLabel}
        </button>
        <p
          className={`text-xs ${variant === "teal" ? "text-white/75" : "text-white/70"}`}
        >
          Демо-форма: заявка не отправляется на сервер.
        </p>
      </form>
      <Toast
        open={toastOpen}
        message="Заявка принята (демо)"
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}
