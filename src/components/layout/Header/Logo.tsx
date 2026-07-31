import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="
        text-2xl
        font-extrabold
        tracking-[0.40em]
        uppercase
        transition-all
        duration-300
        hover:opacity-80
      "
    >
      INGLY
    </Link>
  );
}