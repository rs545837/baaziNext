"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";
import { currentUser } from "@clerk/nextjs";

const font = Oswald({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-transparent p-4">
      <Link href="/" className="flex items-center">
        <div className="relative mr-4 h-10 w-20">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          B A A Z I
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
      <Link href="/faq">
          <Button variant="outline" className="rounded-full">
            <p className={cn("text-xl font-bold text-white", font.className)}>FAQs</p>
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard/" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            <p className={cn("text-xl font-bold text-white", font.className)}>Get Started</p>
          </Button>
        </Link>
        
      </div>
    </nav>
  )
}