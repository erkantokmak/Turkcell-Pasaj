const url = 'http://localhost:3001'

export const fetchAllProducts = async () => {
    const response = await fetch(`${url}/products`)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}
export const fetchProductsByCategory = async (slug: string[], page: number = 1, limit: number = 12) => {
    const categoryUrl = `products?category=${slug[0]}&page=${page}&limit=${limit}`;
    const subCategoryUrl = slug[1] ? `products?subCategory=${slug[1]}&page=${page}&limit=${limit}` : categoryUrl;

    const response = await fetch(`${url}/${subCategoryUrl}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const fetchProductById = async (id: string) =>  {
    const response = await fetch(`${url}/products/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}