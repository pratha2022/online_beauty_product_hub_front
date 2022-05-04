import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { LoginAction } from '../../redux/action/LoginAction';
import './login.css';
import { Row, Col } from 'react-bootstrap';
const Login = () => {
  const navigate = useNavigate()
  const [inputs, setInputs]: any = useState({
    identifier: '',
    password: ''
  })
  const [error, setError] = useState({
    errorEmail: "",
    errorPassword: "",
  });
  const dispatch = useDispatch();
  const handleChange = (event: { target: { name: any; value: any; } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value })
  }
  const checkedOut = () => {
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);
    if (noErrors) {
      localStorage.getItem('jwt') ? navigate('/home') : navigate('/login')
    }
  }
  const validate = (inputs: any) => {
    dispatch(LoginAction({
      "identifier": inputs.identifier,
      "password": inputs.password
    }, onSuccess));
    let localError: any = {};
    const resEmail = /\S+@\S+\.\S+/;
    if (!inputs.identifier) {
      localError.errorEmail = "*Please Enter Email";
    } else if (!resEmail.test(inputs.identifier)) {
      localError.errorEmail = "*Please Enter Correct Email";
    }
    const resPass =
      /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    if (!inputs.password) {
      localError.errorPassword = "*Please Enter Password";
    } else if (!resPass.test(inputs.password)) {
      localError.errorPassword =
        "*Please Enter Correct Password";
    }
    return localError;
  }
  const location = localStorage.getItem('location')
  const onSuccess = () => {
    location ? navigate(`${location}`) : navigate('/')
  };
  const jwt = localStorage.getItem('jwt')
  return !jwt ? (
    <div className="login-container" >
      <h3 >SIGN IN</h3>
      <div className='row main-cont'>
        <form className="mx-1 mx-md-4">
          <div className='login'>
            <Row>
              <Col className='coltag' >
                <i className="fa fa-envelope"></i> Email:
              </Col>
              <Col >
                <input type="email" className="form-control" name='identifier' value={inputs.identifier} onChange={handleChange} placeholder='Please Enter Email' />
                {
                  error.errorEmail && (
                    <span className='texterror' >{error.errorEmail}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col className='coltag'>
                <i className="fa fa-lock"></i> Password:
              </Col>
              <Col>
                <input type="password" className="form-control" name='password' value={inputs.password} onChange={handleChange} placeholder='Please Enter Password' />
                {
                  error.errorPassword && (
                    <span className='texterror'>{error.errorPassword}</span>
                  )}
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="button" className="quote signinbtn" onClick={checkedOut} value='SIGN IN' />
              </Col>
              <Col>
                <input type="button" className="quote signupbtn" onClick={() => navigate('/register')} value='SIGN UP' />
              </Col>
            </Row>
          </div>
        </form>
      </div>
    </div>
  ) :
    (
      <Navigate to='/' />
    )
}
export { Login }