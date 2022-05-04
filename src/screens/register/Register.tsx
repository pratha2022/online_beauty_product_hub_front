import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './register.css';
import { registerAction } from '../../redux/action/RegisterAction';
import { Row, Col } from 'react-bootstrap';
const Register = () => {
  const navigation = useNavigate()
  const [inputs, setInputs]: any = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    errorUser: '',
    errorEmail: "",
    errorPassword: "",
  });
  const dispatch = useDispatch();
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value })
  }
  const checkedOut = () => {
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);
    if (noErrors) {
      navigation('/home')
    }
  }
  const validate = (inputs: any) => {
    dispatch(registerAction({
      "username": inputs.username,
      "email": inputs.email,
      "password": inputs.password
    }, onSuccess));
    let localError: any = {};
    const resUser = /^[a-zA-Z\-]+$/;
    if (!inputs.username) {
      localError.errorUser = "*Please Enter valid user name";
    } else if (!resUser.test(inputs.username)) {
      localError.errorUser = "*Please Enter only text";
    }
    const resEmail = /\S+@\S+\.\S+/;
    if (!inputs.email) {
      localError.errorEmail = "*Please Enter Email";
    } else if (!resEmail.test(inputs.email)) {
      localError.errorEmail = "*Please Enter Correct Email";
    }
    const resPass =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    if (!inputs.password) {
      localError.errorPassword = "*Please Enter Password";
    } else if (!resPass.test(inputs.password)) {
      localError.errorPassword =
        "*Use at least Minimum six characters , one uppercase letter, one number and one special character";
    }
    return localError;
  }
  const onSuccess = () => {
    navigation(-1)
  };
  return (
    <div className="login-container" >
      <h3 >SIGN UP</h3>
      <div className='row main-cont'>
        <form >
          <div className='register' >
            <Row>
              <Col className='coltag'>
                <i className="fa fa-user " ></i> Username:
              </Col>
              <Col>
                <input type="text" className="form-control" name='username' value={inputs.username} onChange={handleChange} placeholder='enter an username' />
                {
                  error.errorUser && (
                    <span className='texterror'>{error.errorUser}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col className='coltag'>
                <i className="fa fa-envelope " ></i>&emsp;&nbsp; Email:
              </Col>
              <Col>
                <input type="email" className="form-control" name='email' value={inputs.email} onChange={handleChange} placeholder='enter an email' />
                {
                  error.errorEmail && (
                    <span className='texterror'>{error.errorEmail}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col className='coltag'>
                <i className="fa fa-lock " ></i>Password:
              </Col>
              <Col>
                <input type="password" className="form-control" name='password' value={inputs.password} onChange={handleChange} placeholder='enter a password' />
                {
                  error.errorPassword && (
                    <span className='texterror'>{error.errorPassword}</span>
                  )}
              </Col>
            </Row>
            <input type="button" className="quote" onClick={checkedOut} value='SIGN UP' />
          </div>
        </form>
      </div>
    </div>
  )
}
export { Register };