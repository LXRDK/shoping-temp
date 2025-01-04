"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  HouseIcon,
  LucideProps,
  ShoppingBagIcon,
  User2Icon,
  UserCheck2Icon,
  WrenchIcon,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
type MenuItemProp = {
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  url: string;
};
const menuItems: MenuItemProp[] = [
  { label: "Home", icon: HouseIcon, url: "/" },
  { label: "Products", icon: ShoppingBagIcon, url: "/products" },
  { label: "Settings", icon: WrenchIcon, url: "/settings" },
];

export function NavMenu() {
  return (
    <div className=" flex  items-center justify-between">
      <div className="flex md:hidden">
        <Drawer autoFocus>
          <DrawerTrigger className={buttonVariants({ variant: "default" })}>
            Menu
          </DrawerTrigger>
          <DrawerContent className="bg-white h-1/2">
            <DrawerHeader>
              <DrawerTitle>Where do you want to go?</DrawerTitle>
              <DrawerDescription>This is Navigation</DrawerDescription>
            </DrawerHeader>
            <div className="h-full flex flex-row gap-2 ">
              <div className="w-1/2">
                {menuItems.map((items, index) => (
                  <div key={index}>
                    <Link
                      href={items.url}
                      className="flex gap-2  group items-center justify-start pl-3 font-bold hover:text-blue-500 transition-all duration-300 ease-in-out hover:bg-slate-100 drop-shadow-lg p-2 rounded-xl "
                    >
                      <items.icon className="group-hover:text-blue-500  transition-all duration-300 ease-in-out" />{" "}
                      {items.label}
                    </Link>
                    {/* <Separator orientation="horizontal" className="w-1/4" /> */}
                  </div>
                ))}
              </div>
              <div className="w-1/2">
                <SignedOut>
                  <Link
                    href="/sign-in"
                    className="flex gap-2  group items-center justify-start pl-3 font-bold hover:text-blue-500 transition-all duration-300 ease-in-out hover:bg-slate-100 drop-shadow-lg p-2 rounded-xl "
                  >
                    <UserCheck2Icon />
                    Signin
                  </Link>
                </SignedOut>
                <SignedIn>
                  <DrawerClose>
                    <Link
                      href="/user-profile"
                      className="flex gap-2  group items-center justify-start pl-3 font-bold hover:text-blue-500 transition-all duration-300 ease-in-out hover:bg-slate-100 drop-shadow-lg p-2 rounded-xl "
                    >
                      <User2Icon />
                      User Profile
                    </Link>
                  </DrawerClose>
                </SignedIn>
              </div>
            </div>
            <DrawerFooter className="flex">
              <DrawerClose className="bg-red-500 text-white font-bold p-2 text-lx hover:bg-red-800">
                <p>Cancel</p>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/new-items"
                      >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium whitespace-nowrap">
                          Explore New Items
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore newly added items
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
