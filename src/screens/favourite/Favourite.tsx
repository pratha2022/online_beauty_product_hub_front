import { useEffect } from 'react'
import './favourite.css'
import shop12 from '../../images/shop12.jpg';
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { favDelete, productFavouriteGetAction } from '../../redux/action/ProductAction';
const Favourite = () => {
    const location: any = useLocation()
    const navigate: any = useNavigate()
    localStorage.setItem('location', location.pathname);
    const dispatch = useDispatch();
    const productFavourite: any = useSelector((state: any) => state?.product?.product)
    const URL = "http://192.168.10.167:1337";
    useEffect(() => {
        dispatch(productFavouriteGetAction())
    }, [dispatch]);
    const postProduct = () => {
        navigate('/productlist')
        window.scrollTo(0, 0)
    }
    function handleDelete(id: any) {
        dispatch(favDelete(id))
    }
    return (
        <div className='cart'>
            <div>
                <img src={shop12} alt="z" className="contact1" />
            </div>
            <div className='heading'>
                <h3>Favourite</h3>
                <p><a href="#"  className='text'>Home</a> | Favourite</p>
            </div>
            <div className='col-12 d-flex'>
                <div className='col-8'>
                    <table>
                        <thead className='thead'>
                            <tr>
                                <th>PRODUCT</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productFavourite && productFavourite.length > 0 && productFavourite.map((item: any) => {
                                    return (
                                        <tr key={item.id}>
                                            <td><img src={`${URL}${item?.attributes?.productImage?.data?.attributes?.url}`} style={{ height: '100px', width: '100px', border: '1px solid lightgrey' }} />
                                                &emsp;{item?.attributes?.productTitle}
                                            </td>
                                            <td>{item?.attributes?.price}</td>
                                            <td><i className="fa fa-times" aria-hidden="true" onClick={() => handleDelete(item.id)}></i></td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan={3} style={{ 'textAlign': 'center', 'paddingLeft': '27%' }}>
                                    <input type="button" className="book-checkout" value='BACK TO SHOP' onClick={postProduct} />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export { Favourite }