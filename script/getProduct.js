const getProduct = async(endpoint) => {

    const resp = await fetch(endpoint);
    const data = await resp.json();

    return data
}

export default getProduct;  