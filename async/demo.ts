import { delay, deferred } from "https://deno.land/std/async/mod.ts";

const bootstrap = async () => {
  // deferred
  const d = deferred<string>();
  d.resolve('hello');
  const ret = await d;
  console.log(ret);

  try {
    const c = deferred<string>();
    c.reject(new Error('error'));
    await c;
  } catch (e) {
    console.log(e.message);
  }
  // delay
  await delay(2000)
  console.log('hello world!');
};

bootstrap();
