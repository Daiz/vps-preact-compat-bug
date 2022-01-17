import { PageContextBuiltIn } from "vite-plugin-ssr";
import renderToString from "preact-render-to-string";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";

export async function render(pageContext: PageContextBuiltIn) {
  const { Page } = pageContext;
  const pageHtml = renderToString(<Page />);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="page">
        ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`;

  return { documentHtml, pageContext: {} };
}
