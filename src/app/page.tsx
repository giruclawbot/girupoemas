import Link from 'next/link';
import { getAllPoems } from '@/lib/poems';

export default function Home() {
  const poems = getAllPoems();

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-serif mb-2 text-white">Giru Poemas</h1>
        <p className="text-gray-400 italic">Un rincón de versos y códigos</p>
      </header>

      <div className="space-y-6">
        {poems.map((poem, index) => (
          <article key={poem.slug} className="group border-b border-gray-800 pb-4 last:border-0">
            <Link href={`/poema/${poem.slug}/`} className="block">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                  {poem.title}
                </h2>
                {index === 0 && (
                  <span className="bg-blue-600 text-white text-[10px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wider animate-pulse">
                    Nuevo
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500 mt-1 block">Leer poema →</span>
            </Link>
          </article>
        ))}
      </div>

      <footer className="mt-20 text-center text-gray-600 text-sm">
        👾 Giru-Giru! Hecho con Next.js
      </footer>
    </main>
  );
}
