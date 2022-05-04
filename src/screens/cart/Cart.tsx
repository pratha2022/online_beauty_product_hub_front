import { useEffect } from 'react'
import './cart.css'
import shop12 from '../../images/shop12.jpg';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { cartAction, cartDelete } from '../../redux/action/CartAction';
const Cart = () => {
  const navigate: any = useNavigate()
  const dispatch = useDispatch();
  const URL = "http://192.168.10.167:1337";
  const cartID = useSelector((state: any) => state?.cart?.cart)
  let total = 0;
  const user_id = localStorage.getItem('user_details')
  useEffect(() => {
    dispatch(cartAction(cartID))
  }, [cartID]);
  function handleDelete(id: any, item: any, qty: any, cartID: any) {
    dispatch(cartDelete(id, item, qty, cartID))
  }
  return (
    <div className='cart'>
      <div>
        <img src={shop12} alt='z' className="contact1" />
      </div>
      <div className='heading'>
        <h3>Shopping Cart</h3>
        <p><a href='#' className='text'>Home</a> | Shoping Cart</p>
      </div>
      <div className='col-12 d-flex'>
        <div className='col-8'>
          <table>
            <thead className='thead'>
              <tr>
                <th>PRODUCT</th>
                <th>Price</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartID[0]?.attributes?.product_list.map((item: any) => {
                const totalprice = parseInt(item.qty) * parseInt(item?.product?.data?.attributes?.price)
                total = total + totalprice;
                return (
                  <tr key={item.id} >
                    <td style={{ "width": "250px" }}><img className='shop5' alt="a" src={`${URL}${item?.product?.data?.attributes?.productImage?.data?.attributes?.url}`} style={{ "height": "80px", "width": "80px", "border": "1px solid lightgray" }} />&emsp;{item?.product?.data?.attributes?.productTitle}</td>
                    <td>{item?.product?.data?.attributes?.price}</td>
                    <td>{item.qty}</td>
                    <td>{totalprice}</td>
                    <td><i className="fa fa-times" aria-hidden="true" onClick={() => handleDelete(item?.product?.data?.id, item, item?.qty, cartID)}></i></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='col-4 totalDiv'>
          <div className='totaldiv2'>
            Enter coupon code. It will be applied at checkout.<br /><br />
            <input type="number" className='promoinput' placeholder='Enter your promo code here' />
            <input type="button" className="book-apply" value='APPLY' />
          </div><br />
          <div>
            <div className='totaldiv2'>
              <strong>CART TOTAL</strong><br />
              <hr />
              TOTAL:  ₹{total}<br />
              <hr />
              <input type="button" className="book-checkout" value='PROCEED TO CHECKOUT' onClick={() => navigate(`/checkout/${user_id}`)} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export { Cart }