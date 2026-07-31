import Link from "next/link";

import type { NavigationItem as NavigationItemType } from "@/types/navigation";

interface NavigationItemProps {
  item: NavigationItemType;
}

export function NavigationItem({
  item,
}: Readonly<NavigationItemProps>) {
  return (
    <li>
        <Link
          href={item.href}
          className="
relative
inline-flex
text-sm
font-medium
uppercase
tracking-[0.18em]
text-foreground
transition-all
duration-300
hover:text-black
after:absolute
after:-bottom-2
after:left-1/2
after:h-[2px]
after:w-0
after:-translate-x-1/2
after:bg-black
after:transition-all
after:duration-300
hover:after:w-full
"
        >
          {item.label}
        </Link>
    </li>
  );
}