import { globToRegExp } from "https://deno.land/std/path/mod.ts";

const t = globToRegExp("../testJson/*.json", {
  flags: "g",
  extended: true,
  globstar: true,
})

console.log('---->', t)
