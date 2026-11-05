"use client";

import { FormEvent, useState } from "react";
import { Toast } from "./Toast";

type LeadCaptureFormProps = {
  variant?: "plate" | "ink";
  submitLabel?: string;
  compact?: boolean;
};

export function LeadCaptureForm({
  variant = "plate",
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

  const onInk = variant === "ink";
  const fieldClass = onInk
    ? "w-full border-2 border-plate-ink/40 bg-ink px-4 py-3 text-plate-ink placeholder:text-plate-ink/50"
    : "w-full border-2 border-ink bg-paper px-4 py-3 text-ink placeholder:text-muted";
  const checkLabelClass = onInk ? "text-plate-ink/85" : "text-ink-2";
  const hintClass = onInk ? "text-plate-ink/60" : "text-muted";
  const errorClass = onInk ? "text-accent" : "text-accent-deep";

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
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
            required
          />
          <span>
            Согласен(на) на обработку персональных данных для связи по заявке
          </span>
        </label>
        {error && (
          <p className={`text-sm font-medium ${errorClass}`} role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="btn-primary w-full" disabled={!consent}>
          {submitLabel}
        </button>
        <p className={`text-xs ${hintClass}`}>
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
