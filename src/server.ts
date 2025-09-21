import express, { Request, Response, NextFunction } from 'express';
import { join } from 'path';

// Angular Universal server
import bootstrap from './main.server';

const app = express();

const browserDistFolder = join(__dirname, '../browser');

// ✅ Serve static files
app.use(express.static(browserDistFolder, {
  maxAge: '1y'
}));

// ✅ Universal engine
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  bootstrap().then((appServerModuleNgFactory) => {
    // Import the renderModuleFactory from @angular/platform-server
    const { renderModuleFactory } = require('@angular/platform-server');
    const indexHtml = require('fs').readFileSync(join(browserDistFolder, 'index.html'), 'utf8');
    renderModuleFactory(appServerModuleNgFactory, {
      document: indexHtml,
      url: req.url
    }).then((html: string) => {
      res.status(200).send(html);
    }).catch(next);
  }).catch(next);
});

// ✅ Start the server
const port = process.env['PORT'] || 4000;
app.listen(port, (error?: any) => {
  if (error) {
    console.error('❌ Error starting server:', error);
  } else {
    console.log(`✅ Node Express server listening on http://localhost:${port}`);
  }
});
