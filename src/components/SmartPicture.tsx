type SmartPictureProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

/** Serves AVIF → WebP → original raster for static export. */
export function SmartPicture({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority = false,
  fill = false,
  width,
  height,
}: SmartPictureProps) {
  const base = src.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  const extMatch = src.match(/\.(jpe?g|png)$/i)?.[0]?.toLowerCase();
  const fallback = `${base}${extMatch === ".png" ? ".png" : ".jpg"}`;

  return (
    <picture
      className={
        fill
          ? `absolute inset-0 block h-full w-full ${className || ""}`
          : className
      }
    >
      <source srcSet={`${base}.avif`} type="image/avif" sizes={sizes} />
      <source srcSet={`${base}.webp`} type="image/webp" sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={fallback}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        className={
          fill
            ? `absolute inset-0 h-full w-full ${imgClassName || "object-cover"}`
            : imgClassName
        }
      />
    </picture>
  );
}
