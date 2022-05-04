import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shop12 from '../../images/shop12.jpg';
import './orderplaced.css'
import { cartAction } from '../../redux/action/CartAction';

const OrderPlaced = () => {
    const dispatch: any = useDispatch()
    const order = useSelector((state: any) => state?.cart?.cart);
    let total = 0;
    useEffect(() => {
        dispatch(cartAction(order))
    }, [order])

    const URL = "http://192.168.10.167:1337";
    return (
        <div className='details'>
            <div>
                <img src={shop12} alt="z" className="contact1" />
            </div>
            <div className='heading'>
                <h4>Order Placed</h4>
                <p style={{ "fontSize": "13px " }}><a href="#" className='text'>Home</a> | Order Placed</p>
            </div>
            <div className="orderbox">
                <div>
                    <div>
                        <h2>Order Details</h2>
                        <table className='ordertable'>
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRODUCT NAME</th>
                                    <th>QUANTITY</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    order[0]?.attributes?.product_list.map((item: any) => {
                                        total = total + (parseInt(item?.qty) * parseInt(item?.product?.data?.attributes?.price));
                                        return (
                                            <tr key={item.id}>
                                                <td><img alt="a" className='shop5' src={`${URL}${item?.product?.data?.attributes?.productImage?.data?.attributes?.url}`} style={{ "border": "1px solid lightgray", 'width': '50px', 'height': '50px' }} /></td>
                                                <td>{item?.product?.data?.attributes?.productTitle}</td>
                                                <td>{item?.qty}</td>
                                                <td>{parseInt(item?.product?.data?.attributes?.price) * parseInt(item?.qty)}</td>
                                            </tr>
                                        )

                                    })
                                }
                                <tr style={{'borderTop':'1px solid black'}}>
                                    <td></td>
                                    <td></td>
                                    <td><strong>GRAND TOTAL</strong></td>
                                    <td><strong>{total}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default OrderPlaced;