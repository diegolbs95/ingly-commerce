import { Container } from "../Container";

import { Actions } from "./Actions";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-border/60
        bg-white/95
        backdrop-blur-md
        shadow-[0_1px_8px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
      "
    >
      <Container>
        <div
          className="
    relative
    flex
    items-center
    justify-between
    py-5
  "
        >
          <Logo />

          <Navigation />

          <Actions />
        </div>
      </Container>
    </header>
  );
}