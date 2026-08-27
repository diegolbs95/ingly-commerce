import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="
        flex
        items-center
        transition-all
        duration-300
        hover:opacity-80
      "
    >
      <Image
        src="/logo/ij.png"
        alt="Ingly Jeans"
        width={42}
        height={50}
        priority
        className="h-11 w-auto object-contain"
      />
    </Link>
  );
}