

export const ShowProductsModalOffers = async(endpoint) => {

    const resp = await fetch(endpoint);
    const data = await resp.json();

    return data
}


export const ShowModalPopularProducts = async(endpoint) => {

    const resp = await fetch(endpoint);
    const data = await resp.json();

    return data
}