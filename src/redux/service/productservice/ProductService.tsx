import axios from 'axios';
export const productGetAPI = (id: any) => {
    return axios.get(`/products/${id}?populate=productImage,category`);
}
export const shopProductAPI = () => {
    return axios.get('/products?populate=productImage,category');
}

export const shopQueryAPI = (query: any) => {
    return axios.get(`/products?populate=productImage,category${query}`)
}

export const productFilterGetAPI = (cat: any) => {
    return axios.get(`/products?populate=productImage,category&filters[category]=${cat}`)
}
export const productPostAPI = (item: any) => {
    const user_id = localStorage.getItem('user_details')
    return axios.put(`/products/${item.id}`, {
        data: {
            "productTitle": item?.attributes?.productTitle,
            "description":item?.attributes?.description,
            "qty": item?.attributes?.qty,
            "price": item?.attributes?.price,
            "isActive": true,
            "productImage": item?.attributes?.productImage?.data?.id,
            "category": item?.attributes?.category?.data?.id,
            "favourite": true,
            "createdAt": "2022-04-05T11:04:58.644Z",
            "updatedAt": "2022-04-05T11:04:58.644Z",
            "publishedAt": "2022-04-05T11:04:58.644Z",
            "createdBy": "string or id",
            "updatedBy": "string or id"
          }
    })
}
export const productFavouriteGetAPI = () => {
    return axios.get(`/products?populate=productImage,&filters[favourite]=true`)
}
export const productDeleteAPI = (productID: any) => {
    return axios.delete(`/products/${productID}`)
}