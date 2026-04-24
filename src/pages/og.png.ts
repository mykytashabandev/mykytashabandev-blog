import type { APIRoute } from 'astro';
import { generateOgImage } from '../utils/ogImage';
import { AUTHOR, SITE_TITLE } from '../consts';

export const GET: APIRoute = async () => {
  const png = await generateOgImage(
    AUTHOR.title,
    `${SITE_TITLE} — ${AUTHOR.name}`,
  );
  return new Response(png.buffer as ArrayBuffer, {
    headers: { 'Content-Type': 'image/png' },
  });
};
