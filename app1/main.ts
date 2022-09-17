/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="dom.iterable" />

import { start } from "fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindConfig from "~/twind.config.ts";
import twindPlugin from "fresh/plugins/twind.ts";

await start(manifest, {
  plugins: [
    twindPlugin(twindConfig),
  ],
  port: 3000,
});
