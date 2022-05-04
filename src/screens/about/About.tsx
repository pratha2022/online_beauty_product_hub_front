import './about.css'
import eyes from '../../images/abouthead.jpg'
import brush from '../../images/brushes.webp'
import ab1 from '../../images/ab1.jpg'
import ab2 from '../../images/ab2.jpeg'
import ab3 from '../../images/ab3.jpeg'
import ab4 from '../../images/ab4.jpeg'
import client from '../../images/pic3.jpg'
import { useLocation } from 'react-router-dom'
const About = () => {
  const location= useLocation()
  localStorage.setItem('location', location.pathname);

  return (
    <div className='about'>
      <div>
        <img src={eyes} className="eyes" alt="z"/>
      </div>
      <div className='heading'>
        <h3>About us</h3>
        <p ><a href='#' className='text'>Home</a> | About</p>
      </div>
      <div className="clearfix">
        <img src={brush} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />
        <p className='text'>MAKE YOUR FACE</p>
        <h1>the center of attention</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Possimus pariatur ullam soluta ipsam voluptatibus atque<br /> reprehenderit similique odit minus earum maxime id nisi suscipit iure sequi, officia,<br /> optio tempore. Corporis!</p>
      </div>
      <div className='team'>
        <h5 className='text'>MEET OUR TEAM</h5>
        <h2 style={{ "fontStyle": "oblique" }}>MAKEUP ARTIST</h2>
        <div className="cards">
          <div className="card">
            <img className="card-img-top" src={ab1} alt="a" />
            <div className="card-body">
              <h5 className="card-title">Olivia Rhodes</h5>
              <p className="card-text">Makeup</p>
            </div>
          </div>
          <br />
          <div className="card" >
            <div className="card-body">
              <h4 className="card-title">Laura Stephens</h4>
              <p className="card-text">Hair Stylist</p>
            </div>
            <img className="card-img-bottom" src={ab2} alt="a" />
          </div>
          <div className="card">
            <img className="card-img-top" src={ab3} alt="a" />
            <div className="card-body">
              <h5 className="card-title">Olivia Rhodes</h5>
              <p className="card-text">Makeup</p>
            </div>
          </div>
          <br />
          <div className="card" >
            <div className="card-body">
              <h4 className="card-title">Laura Stephens</h4>
              <p className="card-text">Hair Stylist</p>
            </div>
            <img className="card-img-bottom" src={ab4} alt="a" />
          </div>
        </div>
      </div>
      <div className='quot'>
        <div className='name'>
          <img src={client} alt='z'/><strong>DANIEL BENTON</strong>
          <p>Blogger/Client</p>
        </div>
        <div className='review'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur ullam quia tenetur, fugiat reprehenderit<br /><br /> laudantium! Adipisci minima laudantium tempore mollitia placeat ex, doloremque odit eum et molestiae repellat?<br /><br /> Quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque rerum aperiam tenetur quasi porro <br /><br />hic in. Dolores numquam perferendis vel! Ratione, perferendis inventore ab</p>
        </div>
      </div>
      <div className='endblock'>
        <div className='subs'>
          <h2 >Subscribe to our newsletter</h2>
        </div>
        <div className='searchbar' >
          <input type="email" className='emailinput' placeholder="Email" />
          <input type="button" className="btnsubs" value="SUBSCRIBE" />
        </div>
      </div>
    </div>
  )
}
export { About }