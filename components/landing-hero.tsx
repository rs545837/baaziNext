"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";

const font = Oswald({ weight: '600', subsets: ['latin'] });

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best DFS Platform</h1>
        <div className="bg-red-600 bg-gradient-to-r bg-clip-text text-transparent">
          <TypewriterComponent
            options={{
              strings: [
                "WELCOME TO BAAZI.",
                "WELCOME TO BAAZI.",
                "WELCOME TO BAAZI.",
                "WELCOME TO BAAZI."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light text-zinc-400 md:text-xl">
        MAKE A STORY. TAKE A CHANCE. JOIN AND WIN
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="best" className="rounded-full p-4 font-semibold md:p-6 md:text-lg">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="text-xs font-normal text-zinc-400 md:text-sm">
        PICK, WIN. IT'S THAT SIMPLE.    
      </div>
    </div>
  );
};