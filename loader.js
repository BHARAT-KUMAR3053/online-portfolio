export default function myImageLoader({ src, width, quality }) {
  if (
    src.startsWith("https://images.pexels.com") ||
    src.startsWith("https://dce0qyjkutl4h.cloudfront.net") ||
    src.startsWith("https://www.slideteam.net")
  )
    return src;
  return `https://nandambharat.online/${src}?w=${width}&q=${quality || 75}`;
}
