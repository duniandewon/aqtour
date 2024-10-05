import * as React from "react";

import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/cn";

export interface NavigationMenu extends React.HTMLAttributes<HTMLElement> {}

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenu>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    />
  )
);
NavigationMenu.displayName = "NavigationMenu";

export interface NavigationMenuList
  extends React.OlHTMLAttributes<HTMLUListElement> {}
export const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  NavigationMenuList
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

export interface NavigationMenuItem
  extends React.LiHTMLAttributes<HTMLLIElement> {}

export const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItem
>(({ className, children, ...props }, ref) => (
  <li ref={ref} className={cn("relative group", className)} {...props}>
    {children}
  </li>
));
NavigationMenuItem.displayName = "NavigationMenuItem";

export const navigationMenuTriggerStyle = cva(
  "group text-muted w-full inline-flex items-center rounded-md px-4 py-2 text-2xl font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[active]:text-primary-foreground data-[state=open]:bg-primary"
);

export interface NavigationMenuTrigger
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  NavigationMenuTrigger
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </button>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export interface NavigationMenuContent
  extends React.HTMLAttributes<HTMLDivElement> {}

export const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  NavigationMenuContent
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "left-0 top-full w-full hidden group-hover:block absolute",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";
