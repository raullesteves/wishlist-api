const axios = require("axios");
const {
    getWishlist: _getWishlist,
} = require("../repositories/wishlistRepositorie");

const PRODUCTS_API = "http://challenge-api.luizalabs.com/api/product/"

const treatData = (resolvedData, productIds) => {
    const treatedData = resolvedData.map((data, index) => {
        if (data.status === "fulfilled") {
            return {
                status: true,
                data: data.value
            };
        } else {
            return {
                status: false,
                message: `challenge api response: ${data.reason.message} - ${data.reason.response.statusText}`,
                productId: productIds[index],
            }
        }
    })
    return treatedData;
};

const getProductsDataFromApi = async wishlist => {
    try {
        const wishlisthWithProductData = wishlist.map(async elem => {
            const { data } = await axios.get(`${PRODUCTS_API}${elem.id_product}`);
            return data
        });
        const resolvedData = await Promise.allSettled(wishlisthWithProductData);
        const productIds = wishlist.map(elem => elem.id_product);
        return treatData(resolvedData, productIds);
    } catch (error) { console.log(error) }
}

const getWishlist = async (clientEmail) => {
    const response = await _getWishlist(clientEmail);
    if (response.status === false) return response;
    
    wishlistWithProductData = await getProductsDataFromApi(response)

    return wishlistWithProductData;
};

const isAValidProduct = async productId => {
    try {
        const { data } = await axios.get(`${PRODUCTS_API}${productId}`);
        return data;
    } catch (error) { console.log(error) }
}

module.exports = {
    getWishlist,
    isAValidProduct
};