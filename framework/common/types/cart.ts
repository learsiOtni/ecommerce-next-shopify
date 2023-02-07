import { ProductOption, ProductVariant } from "./product"

interface Discount {
    value: number
}

export interface LineItem {
    id: string
    variantId: string
    productId: string
    name: string
    path: string
    quantity: number
    discounts: Discount[]
    options?: ProductOption[]
    variant: Partial<ProductVariant>
}

export interface Cart {
    id: string
    createdAt: string
    completedAt: string
    currency: {
        code: string
    }
    taxesIncluded: boolean
    lineItemsSubtotalPrice: number
    totalPrice: number
    lineItems: any[]
    discounts: Discount[]
}

// id: checkout.id,
//         createdAt: checkout.createdAt,
//         currency: {
//             code: checkout.totalPriceV2.currencyCode
//         },
//         taxesIncluded: checkout.taxesIncluded,
//         lineItemsSubtotalPrice: +checkout.subtotalPriceV2.amount,
//         totalPrice: checkout.totalPriceV2.amount,
//         lineItems: checkout.lineItems.edges.map(lineItemEdge => lineItemEdge.node),
//         discounts: []


//cmd + k + c, cmd + / to uncomment