import { CartItem } from "@/types/cart"
import { Question } from "@/types/product"

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

export const fetchProductById = async (id: string) => {
    const response = await fetch(`${url}/products/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export const submitQuestion = async (productId: string, questionData: Question) => {
    const response = await fetch(`http://localhost:3001/products/${productId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({questions: questionData}),
    });

    if (!response.ok) {
        throw new Error('Failed to submit question');
    }

    return response.json();
};

export const getAllCampaigns = async () => {
    const response = await fetch(`${url}/campaigns`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export const addUserToDB = async (user: any) => {
    const response = await fetch(`${url}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error('Failed to add user');
    }
}

export const updateUserBasket = async ({uid, cart}: {uid: string, cart: CartItem[]}) => {
    const res = await fetch(`${url}/users/${uid}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: cart }),
    });

    if (!res.ok) {
        throw new Error("An error occurred while updating the cart");
    }

    return res.json();
};


export const fetchCartById = async (id: string) => {
    const response = await fetch(`${url}/users/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json()
    return data.cart
}