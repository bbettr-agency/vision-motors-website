/**
 * Renders JSON-LD. Server component — no client JS cost.
 * One entity per block; never emit the same @type twice on a page.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
