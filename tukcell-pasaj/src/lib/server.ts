const url = 'http://localhost:3001'

export const fetchAllProducts = async () => {
    const response = await fetch(`${url}/products`)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}