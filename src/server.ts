import express from 'express';
import { join } from 'node:path';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import fetch from 'node-fetch';

// ----- تعريف مسارات prerender -----
interface Product {
  slug: string;
  id: string;
  name: string;
}

// دالة لتوليد المسارات الديناميكية
export async function getPrerenderParams() {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
    const products: Product[] = await res.json();

    // توليد مسارات لكل منتج
    return products.map(p => ({
      route: `/details/${p.slug}/${p.id}`
    }));
  } catch (err) {
    console.error('Prerender fetch error:', err);
    return [];
  }
}

// ----- إعداد Angular Universal -----
const browserDistFolder = join(import.meta.dirname, '../browser');
const angularApp = new AngularNodeAppEngine();

const app = express();

// ملفات الستاتيكية
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

// كل الطلبات الأخرى ترندر Angular
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then(response => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

// تشغيل السيرفر
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, error => {
    if (error) throw error;
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// request handler (لـ Angular CLI أو Firebase)
export const reqHandler = createNodeRequestHandler(app);
