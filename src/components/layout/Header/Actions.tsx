import { MobileMenu } from "./MobileMenu";
import { CartButton } from "./CartButton";

export function Actions() {
  return (
    <div className="flex items-center gap-3">
      <MobileMenu />
      <CartButton />
    </div>
  );
}