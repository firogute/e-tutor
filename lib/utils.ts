import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomColors = () => {
  const bgColors: string[] = [
    "#FFEEE8",
    "#EBEBFF",
    "#E1F7E3",
    "#EBEBFF",
    "#FFF0F0",
  ];
  const textColors: string[] = [
    "#993D20",
    "#342F98",
    "#15711F",
    "#342F98",
    "#882929",
  ];

  const rand = Math.trunc(Math.random() * bgColors.length);

  return {
    bgColor: bgColors[rand],
    textColor: textColors[rand],
  };
};

export function formatNumber(num: number): string {
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
}
