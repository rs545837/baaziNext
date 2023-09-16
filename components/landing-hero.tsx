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
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best DFS Platform</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r bg-red-600">
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
      <div className="text-sm md:text-xl font-light text-zinc-400">
        MAKE A STORY. TAKE A CHANCE. JOIN AND WIN
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="best" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        PICK, WIN. IT'S THAT SIMPLE.    
      </div>
    </div>
  );
};