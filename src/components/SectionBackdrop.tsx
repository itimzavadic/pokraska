import Image from "next/image";

type SectionBackdropProps = {
  src: string;
  alt?: string;
  /** overlay tone to keep section text readable and colors unified */
  tone?: "light" | "teal" | "indigo";
};

export function SectionBackdrop({
  src,
  alt = "",
  tone = "light",
}: SectionBackdropProps) {
  const overlay =
    tone === "teal"
      ? "bg-[linear-gradient(160deg,rgba(11,127,112,0.78)_0%,rgba(15,157,138,0.72)_45%,rgba(18,22,63,0.55)_100%)]"
      : tone === "indigo"
        ? "bg-[linear-gradient(160deg,rgba(18,22,63,0.88)_0%,rgba(26,31,92,0.82)_50%,rgba(15,157,138,0.35)_100%)]"
        : "bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(243,247,246,0.8)_40%,rgba(255,255,255,0.9)_100%)]";

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="scale-110 object-cover brightness-[0.8] contrast-[0.92] saturate-[0.45] blur-[7px]"
        priority={false}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--teal)_14%,transparent)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--indigo)_16%,transparent)] mix-blend-multiply opacity-60" />
    </div>
  );
}
