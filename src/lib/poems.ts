import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PoemMetadata {
  title: string;
  slug: string;
  date: string;
}

export function getAllPoems(): PoemMetadata[] {
  const fileNames = fs.readdirSync(contentDirectory);
  const poems = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || slug.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
        date: data.date || '1970-01-01',
      };
    });

  // Sort by date (newest first)
  return poems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPoemBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title || slug.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    date: data.date || '1970-01-01',
    content,
  };
}
