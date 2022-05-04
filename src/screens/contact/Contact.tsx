import './Contact.css';
import contact from '../../assets/images/contact.jpeg';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { Row, Col } from 'react-bootstrap';
const Contact = () => {
  const location = useLocation()
  localStorage.setItem('location', location.pathname);
  const [inputs, setInputs] = useState({
    name: '',
    number: '',
    email: '',
    service: '',
    message: ''

  })
  const [error, setError] = useState({
    errorName: "",
    errorNumber: "",
    errorEmail: '',
    errorService: ''
  });
  const handleChange = (event: { target: { name: any; value: any; } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value })
  }
  const validate = () => {
    let localError: any = {};
    const resname = /^[a-zA-Z\-]+$/;
    if (!inputs.name) {
      localError.errorName = "*Please Enter Valid Name";
    } else if (!resname.test(inputs.name)) {
      localError.errorName = "*Please Enter Only Text";
    }
    const resEmail = /\S+@\S+\.\S+/;
    if (!inputs.email) {
      localError.errorEmail = "*Please Enter Valid Email";
    } else if (!resEmail.test(inputs.email)) {
      localError.errorEmail = "*Please Enter Valid Email";
    }
    const resPhone = /^\d{10}$/;
    if (!inputs.number) {
      localError.errorNumber = "*Please Enter Valid Contact ";
    } else if (!resPhone.test(inputs.number)) {
      localError.errorNumber = "*Please Enter Only 10 Digit";
    }
    const resService = /^[a-zA-Z\-]+$/;
    if (!inputs.service) {
      localError.errorService = "*Please Enter valid Service";
    } else if (!resService.test(inputs.service)) {
      localError.errorService = "*Please Enter Only Text";
    }
    return localError;
  }
  const checkedOut = () => {
    const validationErrors = validate();
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);
    if (noErrors) {
      setInputs({
        name: '',
        number: '',
        email: '',
        service: '',
        message: ''
      });
    }
  }
  return (
    <div className='contacts'>
      <div>
        <img src={contact} alt="z" className="eyes" />
      </div>
      <div className='heading'>
        <h3>Contact</h3>
        <p><a className='text'>Home</a> | Contact</p>
      </div>
      <div className="mapcontainer" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7343.955674674419!2d72.53230235000001!3d23.02458595000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1646982119322!5m2!1sen!2sin" ></iframe>
      </div>
      <div className='contdiv'>
        <div className='col-4' >
          <div className='col-3 add1'>
            <div className='ficon'> <i className="fa fa-map-marker" aria-hidden="true"></i></div>
            <h5><a href='https://maps.google.com/' target='_blank'>ADDRESS</a></h5>
            <p>509 Mrytle Ave, Brooklyn, NY 11205, USA</p>
          </div>
          <div className='col-3 add1'>
            <div className='ficon'> <i className="fa fa-phone" aria-hidden="true"></i></div>
            <h5><a href="skype:echo123?call" target='_blank'>PHONE</a></h5>
            <p>+1 718-783-1936 &nbsp;+1 718-783-1966 </p>
          </div>
          <div className='col-3 add1'>
            <div className='ficon'> <i className="fa fa-envelope" aria-hidden="true"></i></div>
            <h5><a href='https://www.gmail.com' target='_blank'>EMAIL</a></h5>
            <p>makeup.artist@gmail.com</p>
          </div>
        </div>
        <div className='col-6 contact-form' >
          <h5 className='conform'>GET IN TOUCH</h5>
          <form>
            <div className='form-row'>
              <div className='form-group col-md-8' style={{ display: 'flex' }}>
                <Row>
                  <Col >
                    <input type="name" className="form-control" name='name' value={inputs.name} onChange={handleChange} placeholder='Enter Name Here*' />
                    <br />
                    {
                      error.errorName && (
                        <span className='texterror'>{error.errorName}</span>
                      )}
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <input type="number" className="form-control" name='number' value={inputs.number} onChange={handleChange} placeholder='Enter Contact Here*' />
                    <br />
                    {
                      error.errorNumber && (
                        <span className='texterror'>{error.errorNumber}</span>
                      )}
                  </Col>
                </Row>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8" style={{ 'display': 'flex' }}>
                <Row>
                  <Col >
                    <input type="email" className="form-control" name='email' value={inputs.email} onChange={handleChange} placeholder='Enter Email Here*' />
                    <br />
                    {
                      error.errorEmail && (
                        <span className='texterror'>{error.errorEmail}</span>
                      )}
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <input type="text" className="form-control" name='service' value={inputs.service} onChange={handleChange} placeholder='Enter Service Here*' />
                    <br />
                    {
                      error.errorService && (
                        <span className='texterror'>{error.errorService}</span>
                      )}
                  </Col>
                </Row>
              </div>
            </div>
            <div className="contact-form-row">
              <textarea className="form-control message" name='message' value={inputs.message} onChange={handleChange} placeholder="Message" />
            </div>
            <div className="contactsubmitbtn">
              <input type="button" className="quote" onClick={checkedOut} value='SEND MESSAGE' />
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}
export { Contact }