"use client"
import { useState, useEffect } from "react";
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { usePathname } from "next/navigation"


export function SiteHeader() {
      const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname, header)
        const scrollYPos:any = window.addEventListener("scroll", () => {
            window.scrollY > 56 ? setHeader(true) : setHeader(false);
        });

        // remove event
        return () => window.removeEventListener("scroll", scrollYPos);
    });
  return (
    <header className={` ${!header && pathname === "/statistic" ? "bg-gradient-to-br from-cyan-500 to-sky-600 ": "bg-background"}  sticky top-0 z-40 w-full border-b transition-colors duration-200`}>
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} isCustom={!header && pathname === "/statistic" ? true : false } />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
