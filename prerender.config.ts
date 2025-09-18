// Define PrerenderConfig type locally since it's not exported from '@angular/ssr'
interface PrerenderConfig {
  routes: Array<{
    path: string;
    getPrerenderParams?: () => Promise<Record<string, string>[]>;
  }>;
}

interface Product {
  slug: string;
  id: string | number;
}

export const config: PrerenderConfig = {
  routes: [
    {
      path: 'details/:slug/:id',
      async getPrerenderParams() {
        try {
          const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const data = (await res.json()) as { data: Product[] };
          const products = data.data || [];

          // 👇 هنا نرجع Record<string,string>[] مباشرة
          return products.map((p: Product) => ({
            slug: String(p.slug),
            id: String(p.id),
          }));
        } catch (err) {
          console.error('❌ Prerender fetch error:', err);
          return [];
        }
      },
    },
  ],
};
