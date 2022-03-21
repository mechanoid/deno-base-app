import { dirname } from "./deps.ts";

export const __dirname = () => {
  dirname(import.meta.url);
};

console.log(__dirname());
