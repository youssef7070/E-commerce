export interface Cart {
    _id: string;
    cartOwner: string;           // user id or reference
    products: ProductElement[];  // list of products inside cart
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    totalCartPrice: number;      // total price of all items
    totalItems?: number;         // optional: number of all items in cart
    couponApplied?: boolean;     // optional: whether a coupon is applied
    discount?: number;           // optional: discount value
}

export interface ProductElement {
    count: number;               // how many units of this product in the cart
    _id: string;
    product: ProductProduct;     // the actual product info
    price: number;               // unit price
    totalPrice?: number;         // optional: price * count
}

export interface ProductProduct {
    _id: string;
    title: string;
    slug?: string;               // optional: SEO-friendly title
    description?: string;
    quantity: number;            // available stock
    price?: number;              // base price
    priceAfterDiscount?: number; // if a discount is applied
    imageCover: string;          // main image
    images?: string[];           // additional images
    sold?: number;               // number of sales
    category: Brand;             // main category
    subcategory: Brand[];        // list of subcategories
    brand: Brand;                // product brand
    ratingsAverage: number;      // avg rating (e.g. 4.5)
    ratingsQuantity?: number;    // total number of ratings
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Brand {
    _id: string;
    name: string;
    slug?: string;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
