import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // صفحات ثابتة هتتعمل Prerender
  {
    path: '', // الصفحة الرئيسية
    renderMode: RenderMode.Prerender
  },
  {
    path: 'home',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cart',
    renderMode: RenderMode.Prerender
  },

  // صفحات ديناميكية لازم Server Rendering
  {
    path: 'details/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'details/:slug/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'checkout/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'allorders',
    renderMode: RenderMode.Server
  },

  // أي صفحة مش متعرفة
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
