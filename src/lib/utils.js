import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function splitStrtoInt(rangeString, splitChar) {
  // Split the string into two parts
  const [start, end] = rangeString.split(splitChar);

  // Convert the parts into numbers
  const startNumber = parseInt(start);
  const endNumber = parseInt(end);

  // Generate the array containing the numbers between start and end
  const resultArray = [];
  for (let i = startNumber; i <= endNumber; i++) {
    resultArray.push(i);
  }
  return resultArray;
}
