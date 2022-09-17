import type { Options } from "fresh/plugins/twind.ts";
import { css } from "twind/css#css_directive";

export default {
  preflight: (preflight) => {
    return css(
      preflight,
      {
        body: {
          backgroundColor: "moccasin",
        },
      },
    );
  },
  selfURL: import.meta.url,
} as Options;
