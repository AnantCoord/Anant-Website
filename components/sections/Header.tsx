"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, ChevronRight, Satellite } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const subsystems = [
  { name: "EPS", fullName: "Electrical Power System", href: "/subsystems/eps" },
  { name: "OBC", fullName: "On-Board Computer", href: "/subsystems/obc" },
  { name: "TTC", fullName: "Telemetry & Tracking", href: "/subsystems/ttc" },
  { name: "ADCS", fullName: "Attitude Determination", href: "/subsystems/adcs" },
  { name: "STS", fullName: "Structural System", href: "/subsystems/sts" },
  { name: "Payload", fullName: "Mission Payload", href: "/subsystems/payload" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Recruitments", href: "/recruitments" },
  { name: "Team", href: "/team" },
  { name: "Publications", href: "/publications" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  // Show solid background when scrolled
  const showSolidBackground = scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        showSolidBackground
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-background/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center gap-3 group"
            aria-label="Team Anant Home"
          >
            <div className="relative">
              <Image
                src="/assets/logos/anant-logo.png"
                alt="Team Anant Logo"
                width={44}
                height={44}
                className="relative h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-foreground tracking-tight">
                Team Anant
              </span>
              <span className="block text-[10px] text-muted-foreground uppercase tracking-widest">
                BITS Pilani
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Regular nav links */}
                {navLinks.slice(0, 2).map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-all duration-200",
                          "hover:bg-accent/80 hover:text-accent-foreground",
                          "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                          isActive(link.href) && (link.href === "/" ? pathname === "/" : true)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Subsystems dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={(e) => e.preventDefault()}
                    className={cn(
                      "h-9 rounded-full px-4 text-sm font-medium",
                      "bg-transparent hover:bg-accent/80 data-[state=open]:bg-accent/80",
                      isActive("/subsystems")
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    Subsystems
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[480px] p-4">
                      <div className="mb-3 flex items-center gap-2 px-2">
                        <Satellite className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          Satellite Subsystems
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {subsystems.map((subsystem) => (
                          <Link
                            key={subsystem.name}
                            href={subsystem.href}
                            className={cn(
                              "group flex items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-200",
                              "hover:bg-accent/80",
                              pathname === subsystem.href && "bg-primary/10"
                            )}
                          >
                            <div className="flex-1 min-w-0">
                              <span
                                className={cn(
                                  "font-medium text-sm",
                                  pathname === subsystem.href
                                    ? "text-primary"
                                    : "text-foreground group-hover:text-primary"
                                )}
                              >
                                {subsystem.name}
                              </span>
                              <span className="text-xs text-muted-foreground block">
                                {subsystem.fullName}
                              </span>
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Remaining nav links */}
                {navLinks.slice(2).map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.name === "Recruitments" ? (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "relative inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-all duration-200",
                            "bg-[var(--accent-teal)] text-[var(--accent-teal-foreground)] hover:bg-[var(--accent-teal)]/90",
                            "shadow-md shadow-[var(--accent-teal)]/25 hover:shadow-lg hover:shadow-[var(--accent-teal)]/30",
                            "animate-pulse-subtle"
                          )}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    ) : (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-all duration-200",
                            "hover:bg-accent/80 hover:text-accent-foreground",
                            "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                            isActive(link.href)
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-border/50">
              <Button asChild size="sm" className="rounded-full px-5 h-9">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent/80"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-l border-border/50 bg-background/95 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              {/* Mobile Logo */}
              <div className="flex items-center gap-3 mb-8 mt-2">
                <Image
                  src="/assets/logos/anant-logo.png"
                  alt="Team Anant Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <span className="font-semibold text-foreground">Team Anant</span>
                  <span className="block text-[10px] text-muted-foreground uppercase tracking-widest">
                    BITS Pilani
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-all duration-200",
                      link.name === "Recruitments"
                        ? "bg-[var(--accent-teal)] text-[var(--accent-teal-foreground)] shadow-md shadow-[var(--accent-teal)]/25"
                        : cn(
                            "hover:bg-accent/80",
                            isActive(link.href) && (link.href === "/" ? pathname === "/" : true)
                              ? "bg-primary/10 text-primary"
                              : "text-foreground"
                          )
                    )}
                  >
                    {link.name}
                    <ChevronRight className={cn("h-4 w-4", link.name === "Recruitments" ? "text-[var(--accent-teal-foreground)]/70" : "text-muted-foreground")} />
                  </Link>
                ))}
              </div>

              <Separator className="my-6" />

              {/* Subsystems */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-3">
                  <Satellite className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Subsystems
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {subsystems.map((subsystem) => (
                    <Link
                      key={subsystem.name}
                      href={subsystem.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-2 transition-all duration-200",
                        "hover:bg-accent/80",
                        pathname === subsystem.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      <span className="text-sm font-medium">{subsystem.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Mobile CTA */}
              <Button asChild className="w-full rounded-lg">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

export default Header;
