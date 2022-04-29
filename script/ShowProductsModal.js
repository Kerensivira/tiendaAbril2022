const URL_Offers = 'https://tiendadeviveres.herokuapp.com/ofertas'

export const ShowProductsModalOffers = async(URL_Offers) => {

    const resp = await fetch(URL_Offers);
    const data = await resp.json();

    return console.log (data)
}


export const ShowModalPopularProducts = async(endpoint) => {

    const resp = await fetch(endpoint);
    const data = await resp.json();

    return data
}