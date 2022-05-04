import { useEffect, useState } from 'react'
import '../../screens/checkout/checkout.css';
import checkout from '../../assets/images/checkout.jpeg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction} from '../../redux/action/CartAction';
import { Row, Col } from 'react-bootstrap';
const Checkout = () => {
  const [inputs, setInputs]: any = useState({
    email: '',
    fname: '',
    lname: '',
    contact: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    note: ''
  })
  const [error, setError] = useState({
    errorEmail: "",
    errorFname: "",
    errorLname: '',
    errorContact: '',
    errorAddress: '',
    errorCity: '',
    errorState: '',
    errorPincode: '',
  });
  const handleInputChange = (event: any) => {
    setInputs((inputs: any) => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  const user_id = localStorage.getItem('user_details')
  const navigate = useNavigate()
  let total = 0;
  const data = useSelector((state: any) => state?.cartID?.cartID)
  const dispatch = useDispatch();
  const checkout1 = useSelector((state: any) => state?.cart?.cart)
  useEffect(() => {
    dispatch(cartAction(data))
  }, [dispatch,data]);
  const checkedOut = () => {
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);
    if (noErrors) {
      localStorage.getItem('jwt') ? navigate(`/orderplaced/${user_id}`) : alert("please login to continue")
    }
  }
  const validate = (inputs: any) => {
    let localError: any = {};
    const resEmail = /\S+@\S+\.\S+/;
    if (!inputs.email) {
      localError.errorEmail = "*Please Enter Valid Email";
    } else if (!resEmail.test(inputs.email)) {
      localError.errorEmail = "*Please Enter Valid Email ";
    }
    const resFname = /^[a-zA-Z]+$/;
    if (!inputs.fname) {
      localError.errorFname = "*Please Enter Valid First Name";
    } else if (!resFname.test(inputs.fname)) {
      localError.errorFname = "*Please Enter Only Text";
    }
    const resLname = /^[a-zA-Z]+$/;
    if (!inputs.lname) {
      localError.errorLname = "*Please Enter Valid Last Name";
    } else if (!resLname.test(inputs.lname)) {
      localError.errorLname = "*Please Enter Only Text";
    }
    const resPhone = /^\d{10}$/;
    if (!inputs.contact) {
      localError.errorContact = "*Please Enter Valid Contact";
    } else if (!resPhone.test(inputs.contact)) {
      localError.errorContact = "*Please Enter Only 10 Digit";
    }
    const resAddress = /^[a-zA-Z0-9\s,'-]*$/;
    if (!inputs.address) {
      localError.errorAddress = "*Please Enter Valid Address";
    } else if (!resAddress.test(inputs.address)) {
      localError.errorAddress = "*Please Enter Valid Address";
    }
    const resCity = /^[a-zA-Z]*$/;
    if (!inputs.city) {
      localError.errorCity = "*Please Enter Valid Town/City";
    } else if (!resCity.test(inputs.city)) {
      localError.errorCity = "*Please Enter Only Text";
    }
    const resState = /^[a-zA-Z]*$/;
    if (!inputs.state) {
      localError.errorState = "*Please Enter Valid Country/State";
    } else if (!resState.test(inputs.state)) {
      localError.errorState = "*Please Enter Only Text";
    }
    const resZip = /^\d{6}$/;
    if (!inputs.pincode) {
      localError.errorPincode = "*Please Enter Valid PostCode/ZipCode";
    } else if (!resZip.test(inputs.pincode)) {
      localError.errorPincode = "*Please Enter Only 6 Digit ";
    }
    return localError
  }
  return (
    <div>
      <div>
        <img src={checkout} alt="a" className="contact1" />
      </div>
      <div className='heading'>
        <h3>Checkout</h3>
        <p><a href="https://maps.google.com/" className='text'>Home</a> | Checkout</p>
      </div>
      <div className='checkout-container d-flex'>
        <div className='col-5' style={{ 'marginLeft': '50px' }}>
          <p>Already have an account? <a href="https://maps.google.com/" className='text' onClick={() => navigate('/login')} aria-hidden="true" >Login</a></p>
          <form>
            <Row>
              <Col>Email:*</Col>
              <Col >
                <input type="email" className="form-control" name='email' value={inputs.email} onChange={handleInputChange} placeholder='Enter Email Here' />
                <br />
                {
                  error.errorEmail && (
                    <span className='texterror'>{error.errorEmail}</span>
                  )}
              </Col>
            </Row>
            <Row colSpan={2}>
              <Col>
                <input type="checkbox" className="form-check-input" value="chk" required />Keep me up to date on news and exclusive offers
              </Col>
            </Row>
            <Row>
              <Col colSpan={2}>
                <strong>SHIPPING ADDRESS</strong>
              </Col>
            </Row>
            <Row>
              <Col>First Name:*</Col>
              <Col>
                <input type="text" className="form-control" name='fname' value={inputs.fname} onChange={handleInputChange} placeholder='Enter First Name Here' />
                <br />
                {
                  error.errorFname && (
                    <span className='texterror'>{error.errorFname}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>Last Name:*</Col>
              <Col>
                <input type="text" className="form-control" name='lname' value={inputs.lname} onChange={handleInputChange} placeholder='Enter Last Name Here' />
                <br />
                {
                  error.errorLname && (
                    <span className='texterror'>{error.errorLname}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>Contact:*</Col>
              <Col >
                <input type="number" className="form-control" name='contact' value={inputs.contact} onChange={handleInputChange} placeholder='Enter Contact Here' />
                <br />
                {
                  error.errorContact && (
                    <span className='texterror'>{error.errorContact}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>Address:*</Col>
              <Col>
                <input type="text" className="form-control" name='address' value={inputs.address} onChange={handleInputChange} placeholder='Enter Address Here' />
                <br />
                {
                  error.errorAddress && (
                    <span className='texterror'>{error.errorAddress}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>City:*</Col>
              <Col >
                <input type="text" className="form-control" name='city' value={inputs.city} onChange={handleInputChange} placeholder='Enter City Here' />
                <br />
                {
                  error.errorCity && (
                    <span className='texterror'>{error.errorCity}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>State:*</Col>
              <Col >
                <input type="text" className="form-control" name='state' value={inputs.state} onChange={handleInputChange} placeholder='Enter State Here' />
                <br />
                {
                  error.errorState && (
                    <span className='texterror'>{error.errorState}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>PinCode:*</Col>
              <Col >
                <input type="number" className="form-control" name='pincode' value={inputs.pincode} onChange={handleInputChange} placeholder='Enter PinCode/ZipCode Here' />
                <br />
                {
                  error.errorPincode && (
                    <span className='texterror'>{error.errorPincode}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>Order Note:*</Col>
              <Col>
                <input type="text" className='form-control' onChange={handleInputChange} name='note' value={inputs.note} placeholder=' Enter Order Note' />
              </Col>
            </Row>
            <Row>
              <Col colSpan={2}>
                <input className="form-check-input" type="checkbox" value="chk2" required />Save this information for next time
              </Col>
            </Row>
          </form>
        </div>
        <div style={{ "marginLeft": "250px" }}>
          <div className="card card-blue p-3 mb-3" >
            <a href="https://maps.google.com/" style={{ color: 'black', }}><strong>YOUR ORDER</strong></a><br />
            <p style={{ color: 'black' }}>
              Enter Coupon Code. It Will Be Applied At Checkout
            </p>
            <div className="colum">
              <input type="number" placeholder='Enter Your Promo Code Here' style={{ "padding": "5px 5px 5px 15px", 'height': '38px', "borderRadius": "25px", 'border': 'none' }} />
              <input type="button" className="quote apply" value='APPLY' />
            </div>
            <hr />
            <div className='product'>
              <strong>PRODUCTS</strong>
              <br /><br />
              {checkout1[0]?.attributes?.product_list.map((item: any) => {
                total = total + parseInt(item?.product?.data?.attributes?.price) * parseInt(item?.qty)
                return (
                  <p key={item?.id} style={{ 'color': 'black' }}>{item.qty} x {item?.product?.data?.attributes?.productTitle} &emsp;₹{parseInt(item?.product?.data?.attributes?.price) * parseInt(item?.qty)} </p>
                )

              })}
              <hr />
              <span>Total: ₹{total} </span><br />
              <hr />
            </div>
            <div className='checkbox' >
              <input className="form-check-input" type="radio" value="cheque" name='paymentmode' /><p style={{ "color": "black" }}>Cheque payment</p>
              &emsp;<input className="form-check-input" type="radio" value="paypal" name='paymentmode' /><p style={{ "color": "black" }}>Paypal</p>
              &emsp;<input className="form-check-input" type="radio" value="cod" name='paymentmode' /><p style={{ "color": "black" }}>Cash on Delivery</p>
            </div>
            <div>
              <input type="button" className="btn-checkout" value='ORDER PLACED' onClick={checkedOut} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { Checkout }