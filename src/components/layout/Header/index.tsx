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
        bg-background/95
        backdrop-blur-md
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