import Image from "next/image";

interface ProductImageCardProps {
  image: string;
  name: string;
}

export function ProductImageCard({
  image,
  name,
}: Readonly<ProductImageCardProps>) {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}