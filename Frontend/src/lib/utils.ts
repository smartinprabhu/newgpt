import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatWithPrecision(value: number | string | null | undefined, precision: number = 2): string {
  // Handle null, undefined, or empty string
  if (value === null || value === undefined || value === '') {
    return '0';
  }

  // Convert to number if string
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  // Handle NaN
  if (isNaN(numValue)) {
    return '0';
  }

  // Format with specified precision
  return numValue.toFixed(precision);
}