import './footer.css'
import pic1 from '../../images/pic1.jpeg'
import pic2 from '../../images/pic2.jpeg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpeg'
import pic5 from '../../images/pic5.jpeg'
import logo from '../../images/download.webp'
const Footer = () => {
  const year= new Date().getFullYear()
  return (
    <div className=' footer'>
      <div className='card-address d-flex  justify-content-around'>
        <div className="card" >
          <i className="fa fa-map-marker" aria-hidden="true" />
          <div className="card-body">
            <h5><a href='https://maps.google.com/' className='footercard' target='blank'>ADDRESS</a></h5>
            <p>509 Mrytle Ave, Brooklyn, NY 11205, USA</p>
          </div>
        </div>
        <div className="card" >
          <i className="fa fa-phone" aria-hidden="true" ></i>
          <div className="card-body">
            <h5><a href="skype:echo123?call" target='blank' className='footercard' >PHONE</a></h5>
            <p>+1 718-783-1936 &nbsp;+1 718-783-1966 </p>
          </div>
        </div>
        <div className="card" >
          <i className="fa fa-envelope" aria-hidden="true" />
          <div className="card-body">
            <h5><a href='https://www.gmail.com' target='blank' className='footercard' >EMAIL</a></h5>
            <p>makeup.artist@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <img className='logo' src={logo} alt="a" /><br />
        <h6>Follow us on <a href='https://maps.google.com/'>@makeupartist</a></h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={pic1} alt="a" />
          </div>
          <div className="col">
            <img src={pic2} alt="a" />
          </div>
          <div className="col">
            <img src={pic3} alt="a"/>
          </div>
          <div className="col">
            <img src={pic4} alt="a"/>
          </div>
          <div className="col">
            <img src={pic5} alt="a"/>
          </div>
        </div>
      </div>
      <div className='footerline'>
        <p>Copyright © {year} All rights reserved | This template is made with 💗 by <a href='https://maps.google.com/'>Pratha</a> </p>
        <div className='social'>
          <i className="fa fa-facebook footercard" aria-hidden="true"  /> &emsp;
          <i className="fa fa-twitter footercard" aria-hidden="true"  />&emsp;
          <i className="fa fa-instagram footercard" aria-hidden="true"  />&emsp;
          <i className="fa fa-linkedin footercard" aria-hidden="true"  />
        </div>
      </div>
    </div>
  )
}
export { Footer }