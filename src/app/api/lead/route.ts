import { NextResponse } from "next/server";
import { site } from "@/lib/content";

type LeadPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Некорректные данные формы" },
      { status: 400 },
    );
  }

  const name = String(payload.name || "").trim();
  const phone = String(payload.phone || "").trim();
  const message = String(payload.message || "").trim();

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Укажите имя" },
      { status: 400 },
    );
  }

  if (phone.replace(/\D/g, "").length < 9) {
    return NextResponse.json(
      { ok: false, error: "Укажите корректный телефон" },
      { status: 400 },
    );
  }

  const to = process.env.LEAD_EMAIL?.trim() || site.email;

  const response = await fetch(`https://formsubmit.co/ajax/${to}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      message: message || "—",
      _subject: `Заявка с сайта «${site.companyName}»`,
      _template: "table",
      _captcha: "false",
      _replyto: to,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Lead email failed:", response.status, details);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Не удалось отправить заявку. Позвоните или напишите на почту напрямую.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
