
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
    'index.csr.html': {size: 12659, hash: 'e2fe0ea414273a232a176832d8dcc25d7d70999504b704ec0c2c4f22b48b88eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2468, hash: '5566b2d8fcdd9a2c480e176954b78b55244b768cd56fc4796aa37f959c5c0d7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6DDIUFHC.css': {size: 189875, hash: 'n2zJ1ob6I4o', text: () => import('./assets-chunks/styles-6DDIUFHC_css.mjs').then(m => m.default)}
  },
};
