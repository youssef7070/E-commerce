import express from 'express';
import { join } from 'node:path';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';

// 📌 مجلد الـ dist/browser
const browserDistFolder = join(import.meta.dirname, '../browser');

// 📌 Angular Universal SSR Engine
const angularApp = new AngularNodeAppEngine();

const app = express();

// -------- Static Files --------
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// -------- Handle Angular Rendering --------
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then(response =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

// -------- Run Server --------
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, error => {
    if (error) {
      throw error;
    }
    console.log(`🚀 Node Express server listening on http://localhost:${port}`);
  });
}

// -------- Request Handler (لـ Angular CLI أو Firebase) --------
export const reqHandler = createNodeRequestHandler(app);
