import shop12 from '../../images/shop12.jpg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../redux/action/ProductAction';
import { Counter } from '../../components/counter/Counter';
import { cartAction, cartId, cartUpdate } from '../../redux/action/CartAction';
const Product = () => {
    const [num, setNum] = useState(1);
    const incNum = () => {
        if (num < 20) {
            setNum(Number(num) + 1);
        }
    };
    const decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    const handleChange = (e: any) => {
        return setNum(e.target.value);
    }
    const user_id = localStorage.getItem('user_details')
    const navigate: any = useNavigate();
    const cartdata = useSelector((state: any) => state?.cart?.cart)
    let location: any = useLocation();
    const id = useParams()
    const dispatch = useDispatch();
    const URL = "http://192.168.10.167:1337";
    useEffect(() => {
        dispatch(productAction(id?.id))
        dispatch(cartAction(cartdata))
    }, [cartdata]);
    const product = useSelector((state: any) => state?.product?.product)
    localStorage.setItem('location', location.pathname);
    const postproduct = () => {
        if (cartdata === '') {
            dispatch(cartId(product, num, onSuccess));
        }
        else {
            dispatch(cartUpdate(product, num, cartdata[0], cartdata[0].id, onSuccess))
        }
    }
    const onSuccess = () => {
        navigate(`/yourcart/${user_id}`)
        window.scrollTo(0, 0)
    }
    return (
        <div className='details'>
            <div>
                <img src={shop12} alt="a" className="contact1" />
            </div>
            <div className='heading'>
                <h3>Product Details</h3>
                <p style={{ "fontSize": "13px " }}><a href="#" className='text'>Home</a> | Product</p>
            </div>
            <div className='rowProduct d-flex' style={{ 'marginBottom': '20px' }}>
                <div className='col-6'>
                    <img className='shop5' alt="a" src={`${URL}${product?.attributes?.productImage?.data?.attributes?.url}`} style={{ "border": "1px solid lightgray", 'width': '250px', 'height': '250px' }} />
                </div>
                <div className='col-5 ' style={{ "display": "table", "textAlign": "initial" }}>
                    <h2 className='title' style={{ "display": "contents" }}>{product?.attributes?.productTitle.toUpperCase()}
                        <span style={{ "marginLeft": "370px" }}>₹{product?.attributes?.price}</span>
                    </h2>
                    <hr />
                    <p className='text-muted' style={{ "display": "contents" }}>CATEGORIES : </p>{product?.attributes?.category?.data?.attributes?.title}<br />
                    <p className='text-muted' style={{ "display": "contents" }}>PRODUCT DESCRIPTION : </p>{product?.attributes?.description}<br />
                    <p className='text-muted' style={{ "display": "contents" }}>PRODUCT CODE : </p>{product?.id}<br />
                    <p className='text-muted' style={{ "display": "contents" }}>AVAILABILITY : </p>{product?.attributes?.isActive ? "IN STOCK" : "OUT OF STOCK"}<br />
                    <hr />
                    <div style={{ "display": "flex", border: 'none', "height": "40px" }}>
                        <Counter num={num} incNum={incNum} decNum={decNum} handleChange={handleChange} style={{ border: 'none' }} />
                        <input type="button" className="quote" style={{ "marginTop": "-3px", "width": "-webkit-fill-available", backgroundColor: 'palevioletred' }} value="ADD TO CART" onClick={postproduct} />
                    </div>
                </div>
            </div>
        </div >
    )
}
export { Product }