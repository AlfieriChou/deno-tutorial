import { walkSync } from "https://deno.land/std/fs/mod.ts";
import { readFileStrSync } from "https://deno.land/std/fs/mod.ts";

for (const fileInfo of walkSync("./test")) {
  console.log('fileInfo', fileInfo);
  console.log('fileContent', readFileStrSync(fileInfo.path));
}
