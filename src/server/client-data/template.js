import { ChunkExtractor } from "@loadable/server";
import path from "path";
const statsFile = path.resolve('./public/loadable-stats.json');
const template = (title = "", initialState = {}, content) => {
    let scripts = "";
    const extractor = new ChunkExtractor({ statsFile, entrypoints: ["client"] });
    const scriptTags = extractor.getScriptTags();
    const styleTags = extractor.getStyleTags();
    if (content) {
        scripts = `<script>window.__STATE__ = ${JSON.stringify(initialState)}</script>
                    <script src="client.js"></script>`
    } else {
        scripts = ` <script src="bundle.js"></script> `;
    }
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>${title}</title>
                    ${styleTags}
                </head>
                <body>
                    <div id="app">${content}</div>
                    ${scriptTags}
                </body>
                </html>`;
    return page;
};

export default template;
