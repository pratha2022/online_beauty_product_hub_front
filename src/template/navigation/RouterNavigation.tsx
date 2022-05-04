import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { About } from '../../screens/about'
import { Cart } from '../../screens/cart'
import { Home } from '../../screens/home'
import { Shop } from '../../screens/shop'
import { Product } from '../../screens/product-details/'
import { Contact } from '../../screens/contact'
import { Checkout } from '../../screens/checkout/Checkout'
import { Login } from '../../screens/login/Login'
import { Register } from '../../screens/register/Register'
import { PrivateRoute } from './PrivateRoute'
import { Favourite } from '../../screens/favourite/Favourite'
import OrderPlaced from '../../screens/orderplaced/OrderPlaced'
const RouterNavigation = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productlist" element={<Shop />} />
          <Route path='/productlist?categories= event.id' element={<Shop />} />
          <Route path='/productDetails/:id' element={<Product />} />
          <Route path="/" element={<PrivateRoute />} >
            <Route path="/favouriteitemlist/:user_id" element={<Favourite />} />
            <Route path="/yourcart/:user_id" element={<Cart />} />
            <Route path='/checkout/:user_id' element={<Checkout />} />
            <Route path='/orderplaced/:user_id' element={<OrderPlaced />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default RouterNavigation;