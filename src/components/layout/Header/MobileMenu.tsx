"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigation } from "@/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="
          rounded-md
          p-2
          transition-colors
          hover:bg-muted
        "
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          <div
            className="
              absolute
              right-0
              top-full mt-2
              z-50
              w-64
              rounded-xl
              border
              bg-white
              shadow-xl
            "
          >
            <nav className="py-2">
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                        block
                        px-6
                        py-4
                        text-sm
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        transition-colors
                        hover:bg-muted
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}