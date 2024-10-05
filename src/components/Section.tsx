import { cn } from "@/utils/cn";
import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
}
export function Section({ children, title, className }: Readonly<Props>) {
  return (
    <section className={cn("space-y-10 px-10 py-12", className)}>
      <h2 className="text-center text-4xl font-bold font-serif uppercase">{title}</h2>
      {children}
    </section>
  );
}
