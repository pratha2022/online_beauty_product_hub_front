import { useEffect, useState } from 'react'
import './home.css'
import homemakeup1 from '../../assets/images/homemakeup1.png';
import homemakeup2 from '../../assets/images/homemakeup2.png';
import homemakeup3 from '../../assets/images/homemakeup3.png';
import homemakeup4 from '../../assets/images/homemakeup4.png';
import homemakeup5 from '../../assets/images/homemakeup5.png';
import homemakeup6 from '../../assets/images/homemakeup6.png';
import homemakeup7 from '../../assets/images/homemakeup7.png';
import homemakeup8 from '../../assets/images/homemakeup8.png';
import seven from '../../assets/images/seven.jpg';
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import brush from '../../images/brushes.webp'
import client from '../../images/pic3.jpg'
import ab1 from '../../images/ab1.jpg'
import ab2 from '../../images/ab2.jpeg'
import ab3 from '../../images/ab3.jpeg'
import ab4 from '../../images/ab4.jpeg'
import discountimg from '../../assets/images/discountimg.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { shopQuery } from '../../redux/action/ProductAction';
const Home = () => {
  const location = useLocation()
  const user_id = localStorage.getItem('user_details');
  localStorage.setItem('location', location.pathname);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = "http://192.168.10.167:1337";
  const data = useSelector((state: any) => state.shop.shop);
  let query = `&pagination[withCount]=true&pagination[page]=1&pagination[pageSize]=4`;
  useEffect(() => {
    dispatch(shopQuery(query))
  }, []);
  const [inputs, setInputs] = useState({
    name: '',
    number: '',
    email: '',
    service: '',
    message: ''
  })
  const [error, setError] = useState({
    errorName: '',
    errorNumber: '',
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
    const resname = /^[a-zA-Z]+$/;
    if (!inputs.name) {
      localError.errorName = "*Please Enter Valid  Name";
    } else if (!resname.test(inputs.name)) {
      localError.errorName = "*Please Enter Only Text";
    }
    const resEmail = /\S+@\S+\.\S+/;
    if (!inputs.email) {
      localError.errorEmail = "*Please Enter Valid Email";
    } else if (!resEmail.test(inputs.email)) {
      localError.errorEmail = "*Please Enter Correct Email";
    }
    const resPhone = /^\d{10}$/;
    if (!inputs.number) {
      localError.errorNumber = "*Please Enter Valid Contact ";
    } else if (!resPhone.test(inputs.number)) {
      localError.errorNumber = "*Please Enter Only 10 digit";
    }
    const resService = /^[a-zA-Z]+$/;
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
    <div className='home'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <img src={homemakeup1} className="d-block w-100" alt="homemakeup1" />
          </div>
          <div className="carousel-item">
            <img src={homemakeup2} className="d-block w-100" alt="homemakeup2" />
          </div>
          <div className="carousel-item">
            <img src={ab1} className="d-block w-100" alt="homemakeup3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="clearfix">
        <img src={brush} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />
        <p className='text'>MAKE YOUR FACE</p>
        <h1>the center of attention</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Possimus pariatur ullam soluta ipsam voluptatibus atque<br /> reprehenderit similique odit minus earum maxime id nisi suscipit iure sequi, officia,<br /> optio tempore. Corporis!</p>
        <input type="button" className='quote conctbtn' onClick={() => { navigate('/contact'); window.scrollTo(0, 0) }} value="CONTACT US" />
      </div>
      <div className='makeupservices'>
        <div className="makeupDiv">
          <div className="col">
            <div className="card h-100">
              <img src={ab1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DAILY MAKEUP</h5>
                <p className="card-text">From ₹200</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">WEDDING MAKEUP</h5>
                <p className="card-text">From ₹500</p>
              </div>
              <img src={ab2} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={ab3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">EVENT MAKEUP</h5>
                <p className="card-text">From ₹300</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">CREATIVE MAKEUP</h5>
                <p className="card-text">From ₹700</p>
              </div>
              <img src={ab4} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className='quot'>
        <div className='name'>
          <img src={client} alt="a" /><strong>DANIEL BENTON</strong>
          <p>Blogger/Client</p>
        </div>
        <div className='review'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur ullam quia tenetur, fugiat reprehenderit<br /><br /> laudantium! Adipisci minima laudantium tempore mollitia placeat ex, doloremque odit eum et molestiae repellat?<br /><br /> Quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque rerum aperiam tenetur quasi porro <br /><br />hic in. Dolores numquam perferendis vel! Ratione, perferendis inventore ab</p>
        </div>
      </div>
      <div className='makeupCard d-flex' >
        <div className='column w-25'>
          <img src={homemakeup3} alt="a" className="homemakeup3" />
        </div>
        <div className='column  w-25'>
          <img src={homemakeup4} alt="a" className="homemakeup4" />
          <img src={homemakeup5} alt="a" className="homemakeup5" />
        </div>
        <div className='column w-25'>
          <img src={homemakeup6} alt="a" className="homemakeup6" />
        </div>
        <div className='column w-25 d-flexbox'>
          <div className="col-2 d-flex">
            <img src={homemakeup7}  alt="a" className="homemakeup7" />
            <img src={homemakeup8} alt="a" className="homemakeup8" />
          </div>
          <div className="col-2 w-25 sev" >
            <img src={seven} alt="a" className="seven" />
          </div>
        </div>
      </div>
      <div className='layout'>
        <h5 className='text'>MAKEUP ARTIST TIPS</h5>
        <p className='font'>makeup artist tips</p>
      </div>
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={image1}  alt="a" />
          <div className="card-body">
            <i className="fa fa-picture-o" aria-hidden="true"></i>
            <h5 className="card-title">Tips from makeup artists you've never heard</h5><br /><br />
            <p className="card-text ">Rosie Chapman | <small className="text-muted">June 15,2020</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={image2}  alt="a" />
          <div className="card-body">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
            <h5 className="card-title">Everything I learned from a professional makeup artist</h5><br /><br />
            <p className="card-text">Rosie Chapman | <small className="text-muted">June 15,2020</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={image3} alt="a" />
          <div className="card-body">
            <i className="fa fa-play" aria-hidden="true"></i>
            <h5 className="card-title">10- Makeup- artist tips that surprised(and delighted) us</h5><br /><br />
            <p className="card-text">Rosie Chapman | <small className="text-muted">June 15,2020</small></p>
          </div>
        </div>
      </div>
      <div style={{ 'backgroundColor': '#efebeb', 'padding': '20px' }}>
        <div className='card-group d-flex '>
          {data?.map(((item: any) => {
            return (
              <div className="col-3" key={item.id} >
                <div className="card" style={{ "margin": "auto" }}>
                  <img className="shopimg" src={`${URL}${item?.attributes?.productImage?.data?.attributes?.url}`}  alt="a" />
                  <div className='middle'>
                    <i className="fa fa-eye" aria-hidden="true" onClick={() => { navigate(`/productDetails/${item.id}`); window.scrollTo(0, 0) }}></i>
                    <i className="fa fa-heart" aria-hidden="true" onClick={() => navigate(`/favouriteitemlist/${user_id}`)}></i>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                  <div className="card-body">
                    <p className="card-text" style={{ "color": "black" }}>{item.attributes.productTitle}</p>
                    <p className="card-text"><small >₹{item.attributes.price}</small></p>
                  </div>
                </div>
              </div>
            )
          }))}
        </div>
        <p onClick={() => { navigate('/productlist'); window.scrollTo(0, 0) }} style={{ cursor: 'pointer' }}>VIEW ALL PRODUCTS</p>
      </div>
      <div className='discount'>
        <div className='image-div'>
          <img src={discountimg}  alt="a"className='discountimg1' />
        </div>
        <div className='formArea' >
          <h5 className='contform'>GET A QUOTE</h5>
          <form>
            <div className="contactFormHome">
              <div className="form-group col-md-8 d-flex">
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
              <div className="form-group col-md-7 d-flex">
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
            <div className="form-row">
              <textarea className="form-control" name='message' value={inputs.message} onChange={handleChange} placeholder="Message" />
            </div>
            <div className='contactsubmitbtn'>
              <input type='button' className="quote" onClick={checkedOut} value='BOOK SERVICE' />
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}
export { Home };