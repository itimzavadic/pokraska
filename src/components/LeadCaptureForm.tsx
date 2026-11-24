"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { Toast } from "./Toast";

type LeadCaptureFormProps = {
  variant?: "teal" | "indigo";
  submitLabel?: string;
  compact?: boolean;
};

async function sendViaPhp(payload: {
  name: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch("/send.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) return false;
    const result = (await response.json().catch(() => null)) as
      | { ok?: boolean }
      | null;
    return Boolean(result?.ok);
  } catch {
    return false;
  } finally {
    window.clearTimeout(timeout);
  }
}

function openMailto(payload: {
  name: string;
  phone: string;
  message: string;
}) {
  const subject = encodeURIComponent(`Заявка с сайта «${site.companyName}»`);
  const body = encodeURIComponent(
    `Имя: ${payload.name}\nТелефон: ${payload.phone}\nСообщение: ${payload.message}\n`,
  );
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function LeadCaptureForm({
  variant = "teal",
  submitLabel = "Отправить заявку",
  compact = false,
}: LeadCaptureFormProps) {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(
    "Заявка отправлена. Мы свяжемся с вами.",
  );
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim() || "—";

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
    setPending(true);

    const payload = { name, phone, message };
    const delivered = await sendViaPhp(payload);

    if (!delivered) {
      openMailto(payload);
      setToastMessage(
        "Откроется почта — нажмите «Отправить» в письме. Или позвоните нам.",
      );
    } else {
      setToastMessage("Заявка отправлена. Мы свяжемся с вами.");
    }

    form.reset();
    setConsent(false);
    setPending(false);
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
              placeholder="Ваше имя"
              className={fieldClass}
              required
              disabled={pending}
            />
          </label>
          <label className="block">
            <span className="sr-only">Телефон</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              defaultValue="+375"
              placeholder="+375 (__) ___-__-__"
              className={fieldClass}
              required
              disabled={pending}
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
              disabled={pending}
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
            disabled={pending}
          />
          <span>
            Согласен(на) на{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
            >
              обработку персональных данных
            </a>
          </span>
        </label>
        {error && (
          <p className="text-sm font-medium text-white/95" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          className={buttonClass}
          disabled={!consent || pending}
        >
          {pending ? "Отправка…" : submitLabel}
        </button>
      </form>
      <Toast
        open={toastOpen}
        message={toastMessage}
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}
