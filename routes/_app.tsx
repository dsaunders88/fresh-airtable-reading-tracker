import { Head } from "$fresh/runtime.ts";
import { SITE_DESCRIPTION, SITE_NAME } from "../utils/constants.ts";
import { PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
// import init, { transform } from "https://esm.run/lightningcss-wasm";

// await init();

// let { code, map } = transform({
//   cssModules: true,
//   filename: "global.css",
//   code: new TextEncoder().encode(".myclass { color: red; background: green }"),
//   minify: true,
// });

// console.log(new TextDecoder().decode(code));

export default function App({ Component }: PageProps) {
  return (
    <html lang="en-US">
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <script src="/scripts/themeCheck.js"></script>
        <link href="/favicon.jpg" rel="icon" type="image/jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/eip5xut.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/reasonable-colors@0.4.0/reasonable-colors.css"
        ></link>
        <link rel="stylesheet" href="/global.css" />
        <link rel="stylesheet" href="/styles/book.css" />
        <script
          src="https://unpkg.com/htmx.org@1.9.9"
          integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/4a025e1321.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
