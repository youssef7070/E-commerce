// prerender.config.ts

interface PrerenderConfig {
    routes: Array<{
        path: string;
        getPrerenderParams?: () => Promise<Record<string, string>[]>;
    }>;
}

interface Product {
    slug?: string;
    id?: string | number;
}

export const config: PrerenderConfig = {
    routes: [
        // 👇 Static Routes عشان يمنع الـ error
        { path: '' }, // الصفحة الرئيسية
        { path: 'home' },
        { path: 'products' },
        { path: 'cart' },
        { path: 'login' },
        { path: 'register' },

        // 👇 Dynamic Route
        {
            path: 'details/:slug/:id',
            async getPrerenderParams() {
                try {
                    console.log("🚀 Fetching products...");
                    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
                    console.log("🔗 API Status:", res.status);

                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }

                    const data = (await res.json()) as { data: Product[] };
                    const products = data?.data || [];

                    console.log("✅ Products count:", products.length);

                    return products
                        .filter((p) => p?.slug && p?.id)
                        .map((p) => ({
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
