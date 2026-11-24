import Link from "next/link";
import { site } from "@/lib/content";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <p className="label text-teal-hot">Ошибка 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-indigo sm:text-5xl">
        Страница не найдена
      </h1>
      <p className="lead mt-5 max-w-md text-indigo/75">
        Такой страницы нет на сайте «{site.companyName}». Возможно, ссылка устарела
        или адрес введён с ошибкой.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          На главную
        </Link>
        <a href={`tel:${site.phoneTel}`} className="btn-ghost-light !text-indigo border border-indigo/20">
          Позвонить
        </a>
      </div>
    </main>
  );
}
