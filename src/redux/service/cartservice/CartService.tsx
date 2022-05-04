import axios from 'axios';
export const cartPostAPI = (id: any, num: any) => {
    const user_id = localStorage.getItem('user_details')
    let data = {
        "user_id": user_id,
        "product_list": [
            {
                "qty": num,
                "product": id
            }
        ]
    }
    return axios.post(`/carts`, { data })
}
export const cartupdateAPI = (id: any, num: any, updatedata: any, cartdataid: any) => {
    const user_id = localStorage.getItem('user_details')
    let product_list: any[] = [{ product: id?.id, qty: num }];
    updatedata?.attributes?.product_list?.forEach((ele: any) => {
        if (ele?.product?.data?.id === id?.id) {
            product_list = product_list.map(ele1 => {
                if (ele1.product === id.id)
                    ele1.qty = ele1.qty + num
                return ele1;
            })
        } else {
            product_list.push({ product: ele?.product?.data?.id, qty: ele?.qty })
        }
    })
    let data: any = { user_id, product_list, isOrderPlaced: true }
    return axios.put(`/carts/${cartdataid}`, { data })
}
export const cartGetAPI = (data: any) => {
    return axios.get(`/carts/${data}?populate=productImage,user_id,product_list.product.productImage,product_list`)
}
export const cartPopulateAPI = (user_id: any) => {
    return axios.get(`/carts?populate=user_id,product_list.product.productImage,product_list.product&filters[user_id]=${user_id}`)
}
export const orderplacedAPI = (cart: any) => {
    cart.map((item: any) => {
        if (item.attributes.isOrderPlaced === false)
            return item.attributes.isOrderPlaced === true
    })
    const user_id = localStorage.getItem('user_details')
   return axios.get(`/carts?populate=user_id,product_list.product.productImage,product_list.product&filters[user_id]=${user_id}`)
}
export const cartDeleteAPI = (id: any, item: any, qty: any, cartID: any) => {
    const ID = cartID[0].id;
    const user_id = localStorage.getItem('user_details')
    let product_list: any[] = [{ product: id, qty: qty }];
    cartID.forEach((ele: any) => {
        let check = ele?.attributes?.product_list?.filter((plist: any, index: number) => {
            return plist.id !== item.id
        })
        product_list = check.map((item: any, index: number) => {
            return {
                product: item.product.data.id,
                qty: item.qty
            }
        })
    })
    let data: any = { user_id, product_list }
    return axios.put(`/carts/${ID}`, { data })
}