
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 12648, hash: 'a3149eec1141a34a01343b83f73a4ad8b4500fe451af2ac83d807913bdb9e4cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2457, hash: '6132f64d59efd695392e520059942bbe6fef9cb9080824fc120ad9a025176c19', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-S27KXIZW.css': {size: 192157, hash: 'iekpXA6cgao', text: () => import('./assets-chunks/styles-S27KXIZW_css.mjs').then(m => m.default)}
  },
};
