"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { Toast } from "./Toast";

type LeadCaptureFormProps = {
  variant?: "teal" | "indigo";
  submitLabel?: string;
  compact?: boolean;
};

type SendResult =
  | { ok: true }
  | { ok: false; kind: "activation" | "error"; message?: string };

async function sendViaPhp(payload: {
  name: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 3500);

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

async function sendViaFormSubmit(payload: {
  name: string;
  phone: string;
  message: string;
}): Promise<SendResult> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          message: payload.message,
          _subject: `Заявка с сайта «${site.companyName}»`,
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
        signal: controller.signal,
      },
    );

    const data = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    const success = data?.success === true || data?.success === "true";
    if (success) return { ok: true };

    const message = data?.message || "";
    if (/activat/i.test(message)) {
      return { ok: false, kind: "activation", message };
    }

    return { ok: false, kind: "error", message };
  } catch {
    return { ok: false, kind: "error" };
  } finally {
    window.clearTimeout(timeout);
  }
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

    // 1) Local PHP on hoster (no third-party), if uploaded
    if (await sendViaPhp(payload)) {
      form.reset();
      setConsent(false);
      setToastMessage("Заявка отправлена. Мы свяжемся с вами.");
      setToastOpen(true);
      setPending(false);
      return;
    }

    // 2) FormSubmit — automatic email after one-time activation
    const result = await sendViaFormSubmit(payload);
    setPending(false);

    if (result.ok) {
      form.reset();
      setConsent(false);
      setToastMessage("Заявка отправлена. Мы свяжемся с вами.");
      setToastOpen(true);
      return;
    }

    if (result.kind === "activation") {
      form.reset();
      setConsent(false);
      setToastMessage(
        `Проверьте ${site.email}: откройте письмо FormSubmit и нажмите Activate Form. Это один раз — дальше заявки будут приходить сами.`,
      );
      setToastOpen(true);
      return;
    }

    setError(
      `Не удалось отправить. Позвоните ${site.phone} или напишите на ${site.email}`,
    );
  }

  const fieldClass =
    variant === "teal"
      ? "w-full rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-white placeholder:text-white/60"
      : "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-teal-soft";

  const buttonClass =
    variant === "teal"
      ? "w-full rounded-full bg-white px-4 py-3 font-semibold text-indigo transition hover:bg-muted disabled:opacity-50"
      : "w-full rounded-full bg-teal px-4 py-3 font-semibold text-white transition hover:bg-teal-hot disabled:opacity-50";

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
