import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Página não encontrada
      </h1>
      <p className="mt-4 text-slate-600">
        O link pode estar errado ou a página foi movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Voltar para a home
      </Link>
    </div>
  );
}

