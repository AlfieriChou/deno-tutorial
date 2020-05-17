import { globToRegExp } from "https://deno.land/std/path/mod.ts";

const t = globToRegExp("../test/*.json", {
  flags: "g",
  extended: true,
  globstar: true,
})

console.log('---->', t)
