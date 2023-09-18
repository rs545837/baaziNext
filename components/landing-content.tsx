"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Oswald } from "next/font/google";

const font = Oswald({ weight: '600', subsets: ['latin'] });

const testimonials = [
  {
    name: "STEP 1",
    avatar: "J",
    title: "STEP 1",
    description: "Choose Three or More Players",
  },
  {
    name: "STEP 2",
    avatar: "A",
    title: "STEP 2",
    description: "Pick MORE or LESS on their projected stats",
  },
  {
    name: "STEP 3",
    avatar: "M",
    title: "STEP 3",
    description: "Expore our inplay options for more fun, which are going to be released soon.",
  },
  {
    name: "STEP 4",
    avatar: "M",
    title: "STEP 4",
    description: "Wait for the game to end and see if you won!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">HOW TO PLAY</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="border-none bg-[#192339] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}