"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link className="flex items-center space-x-2" href="/">
              <Image
                alt={siteConfig.name}
                loading="lazy"
                width={40}
                height={40}
                decoding="async"
                className="rounded-full"
                style={{ color: "transparent" }}
                src="/352802554_265082836205188_481631601392673827_n (1).jpg"
              />
              <span className="font-semibold text-lg text-primary">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            menuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-lg border border-border/60 bg-background/95 p-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

