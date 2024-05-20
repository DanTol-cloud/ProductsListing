import {ProductInterface} from "@types";

const productService = {
    getProducts: async (): Promise<ProductInterface[] | undefined> => {
        try {
            const response = await fetch('product.json',{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            return await response.clone().json() as Promise<ProductInterface[]>;
        } catch (error) {
            console.error("getProducts request Error", error);
        }
        return
    },
    getProductById: async (id: string): Promise<ProductInterface | undefined> => {
        const products: ProductInterface[] | undefined = await productService.getProducts()
        return products?.find((product: ProductInterface) => product.id === id)
    }
}

export default productService
