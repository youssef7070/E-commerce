
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/features/brands/brands.component.ts": [
    "chunk-SEUT6DYC.js"
  ],
  "src/app/features/categories/categories.component.ts": [
    "chunk-CPPULL4D.js",
    "chunk-MWFBZXKR.js"
  ],
  "src/app/features/details/details.component.ts": [
    "chunk-2YIZHGMX.js"
  ],
  "src/app/features/checkout/checkout.component.ts": [
    "chunk-7OSMMKHY.js",
    "chunk-WJHGVGB3.js",
    "chunk-4OH2CZKK.js"
  ],
  "src/app/features/allorders/allorders.component.ts": [
    "chunk-FOZC46L4.js"
  ],
  "node_modules/flowbite/lib/esm/index.js": [
    "chunk-XCQAQCAC.js"
  ],
  "src/app/core/auth/login/login.component.ts": [
    "chunk-PC3R4OJ6.js",
    "chunk-WJHGVGB3.js",
    "chunk-4OH2CZKK.js"
  ],
  "src/app/core/auth/register/register.component.ts": [
    "chunk-J7OJWDVB.js",
    "chunk-WJHGVGB3.js",
    "chunk-4OH2CZKK.js"
  ],
  "src/app/core/auth/forget-password/forget-password.component.ts": [
    "chunk-OW2CRNVI.js",
    "chunk-WJHGVGB3.js",
    "chunk-4OH2CZKK.js"
  ],
  "src/app/features/home/home.component.ts": [
    "chunk-BX7LBLBB.js",
    "chunk-MWFBZXKR.js",
    "chunk-7X3G2L4J.js"
  ],
  "src/app/features/cart/cart.component.ts": [
    "chunk-4LLAMFWU.js"
  ],
  "src/app/features/products/products.component.ts": [
    "chunk-G5KQ7PGQ.js",
    "chunk-4OH2CZKK.js",
    "chunk-7X3G2L4J.js"
  ]
},
  assets: {
    'index.csr.html': {size: 12659, hash: '5b0e3895f566f6640031ee435e476cf116a881e39c0a40f6ca65418751a3ae97', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2468, hash: 'bb8f3265c7cdbd2765f1a1209a4588a660ce00652e24a7d21c9f767bf4563155', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-62IOTI77.css': {size: 192149, hash: '3EUDE291h90', text: () => import('./assets-chunks/styles-62IOTI77_css.mjs').then(m => m.default)}
  },
};
