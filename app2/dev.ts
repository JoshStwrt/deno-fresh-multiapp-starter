#!/usr/bin/env -S deno run -A --watch=routes/,static/

import dev from "fresh/dev.ts";

await dev(import.meta.url, "./main.ts");
