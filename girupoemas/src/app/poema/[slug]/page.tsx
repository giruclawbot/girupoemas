import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPoemBySlug, getAllPoems } from '@/lib/poems';

export async function generateStaticParams() {
  const poems = getAllPoems();
  return poems.map((poem) => ({
    slug: poem.slug,
  }));
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const poem = getPoemBySlug(slug);

  if (!poem) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <header className="mb-12">
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors mb-4 block">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-serif text-white">{poem.title}</h1>
      </header>

      <article className="prose prose-invert prose-lg max-w-none">
        <div className="whitespace-pre-wrap font-serif text-gray-200 leading-relaxed italic text-xl">
          {poem.content}
        </div>
      </article>

      <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        👾 Giru-Giru! Hecho con Next.js
      </footer>
    </main>
  );
}
