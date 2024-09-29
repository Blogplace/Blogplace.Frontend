"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/media/logo.svg";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/auth";
import { LogInIcon, LogOutIcon, UserIcon, UserPlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    url: "/",
    label: "Strona główna",
  },
  {
    url: "/1",
    label: "Lorem ipsum",
  },
  {
    url: "/2",
    label: "Dolor sit amet",
  },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 bg-secondary-foreground px-4 shadow">
      <div className="mx-auto flex max-w-6xl items-center py-4">
        <div className="flex">
          <Link href="/">
            <Image src={logo} alt="Logo" className="max-h-12" />
          </Link>
        </div>
        <div className="ml-8 flex">
          <ul className="flex gap-6 text-sm text-white/75">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className={cn(
                    "after:[''] relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-white after:transition-all after:hover:w-full",
                    pathname === link.url ? "text-white" : "text-white/75",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-end gap-4">
          {user ? (
            <>
              <Button variant="secondary" onClick={logout}>
                Wyloguj <LogOutIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild>
                <Link href="/user/profile">
                  Profil <UserIcon strokeWidth={2.5} className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" asChild>
                <Link href="/auth/register">
                  Rejestracja <UserPlusIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/auth/login">
                  Logowanie <LogInIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
