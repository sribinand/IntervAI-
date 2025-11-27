import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// Normalize safely
const normalizeTechName = (tech: string) => {
  if (!tech) return "unknown";

  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings] || "unknown";
};

// Check icon exists
const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};

// Main function
export const getTechLogos = async (techArray: string[] = []) => {
  if (!Array.isArray(techArray)) {
    console.warn("❗ getTechLogos received invalid array:", techArray);
    return [];
  }

  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);

    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech,
      url: (await checkIconExists(url)) ? url : "/tech.svg",
    }))
  );

  return results;
};

// FIXED: Correct cover path
export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`.replace("//", "/");
};
