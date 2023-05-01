export async function getPosts() {
    const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
    return await response.json()
}