"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

interface Menu {
  path?: string;
  label: string;
  hasChildren?: boolean;
  children?: Menu[];
}

const NAVIGATION_MENUS: Menu[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/umroh",
    label: "Umroh",
  },
  {
    label: "About",
    path: "/about",
  },
  // {
  //   label: "Contact",
  //   path: "/contact",
  // },
];

export function MainMenu() {
  const pathName = usePathname();

  const renderNavigationMenuList = (menus: Menu[], parentKey = "") => {
    return menus.map((menu, index) => {
      const key = `${parentKey}${menu.path || index}`;
      return (
        <NavigationMenuItem key={key}>
          {menu.hasChildren && menu.children ? (
            <>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                {menu.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>{renderNavigationMenuList(menu.children, `${key}-`)}</ul>
              </NavigationMenuContent>
            </>
          ) : (
            <Link
              href={menu.path ? menu.path : "/"}
              className={cn(navigationMenuTriggerStyle())}
              data-active={menu.path === pathName ? "true" : null}
            >
              {menu.label}
            </Link>
          )}
        </NavigationMenuItem>
      );
    });
  };

  return (
    <NavigationMenu className="ml-auto">
      <NavigationMenuList>
        {renderNavigationMenuList(NAVIGATION_MENUS)}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
