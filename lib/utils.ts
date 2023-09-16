import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case "xs":
      return "X-Small"
    case "s":
      return "Less"
    case "m":
      return "Medium"
    case "l":
      return "More"
    case "xl":
      return "X-Large"
    case "one-size":
      return "One Size"
  }
}
