import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatSongDuration(durationMs: number): string {
  // Convert milliseconds to seconds
  const totalSeconds = Math.floor(durationMs / 1000);
  
  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  // Pad with leading zeros for consistent formatting
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  return `${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
console.log(formatSongDuration(229866)); // Output: "03:49"