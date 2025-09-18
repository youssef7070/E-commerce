// app/prerender.ts
import fetch from 'node-fetch';

export interface Product {
    slug: string;
    id: string;
    name: string;
}

export async function getPrerenderParams() {
    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
        const products = (await res.json()) as Product[];

        return products.map(p => ({
            route: `/details/${p.slug}/${p.id}`
        }));
    } catch (err) {
        console.error('Prerender fetch error:', err);
        return [];
    }
}
