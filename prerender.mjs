import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const appHtml = render();

    const indexHtmlPath = path.resolve(__dirname, 'dist/index.html');
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
    const updatedHtml = indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    fs.writeFileSync(indexHtmlPath, updatedHtml, 'utf-8');
    console.log(`Pre-rendered dist/index.html successfully (${appHtml.length} chars injected).`);
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
