import Link from "next/link";

export default function PopularTags() {
  return (
    <div>
      <p className="mb-2 font-semibold uppercase">Popularne tagi</p>
      <div className="flex flex-wrap gap-2">
        {[...Array.from(Array(12).keys())].map((tag, index) => (
          <Link
            key={index}
            href={`/tags/${tag}`}
            className="rounded-lg border border-gray-500/10 bg-gray-500/5 px-2 py-1.5 text-xs transition-colors hover:bg-gray-500/15"
          >
            Lorem ipsum #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
