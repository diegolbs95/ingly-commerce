import { navigation } from "@/config/navigation";

import { NavigationItem } from "./NavigationItem";

export function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-12">
        {navigation.map((item) => (
          <NavigationItem
            key={item.href}
            item={item}
          />
        ))}
      </ul>
    </nav>
  );
}