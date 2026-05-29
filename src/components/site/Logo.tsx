import { Link } from "@tanstack/react-router";
import { Shield, Bug } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background transition-transform group-hover:scale-105">
        <Shield className="h-5 w-5" strokeWidth={1.75} />
        <Bug className="absolute h-3 w-3" strokeWidth={2.25} />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${light ? "text-background" : "text-foreground"}`}
      >
        {SITE.name}
      </span>
    </Link>
  );
}
