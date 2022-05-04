import './shop.css'
import { useEffect, useState } from 'react'
import eyes from '../../images/abouthead.jpg'
import Select from 'react-select'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction, priceFilterAction, productFavouriteAction, shopAction } from '../../redux/action/ProductAction'
import { catAction } from '../../redux/action/CatAction'

const Shop = () => {
  const user_id = localStorage.getItem('user_details')
  const location = useLocation()
  const search = location.search;
  const params = new URLSearchParams(search);
  const categ = params.get('category');
  const pric = params.get('price')
  const pop = params.get('popularity')
  // console.log("FILTERSS==", categ?.split(" ").pop(),categ?.split(" ").shift(), pric, pop);
  // const [fav, setfav] = useState([])
  const navigate = useNavigate()
  localStorage.setItem('location', location.pathname);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.shop.shop);
  // console.log('------>',data)
  const category = useSelector((state: any) => state.category.category)
  // console.log('--.........>',category)
  const [categoryFilter, setCategoryFilter]: any = useState('');
  // console.log("**********", categoryFilter);
  const URL = "http://192.168.10.167:1337";
  let cat = categ?.split(' ').shift()
  let catval = categ?.split(' ').pop()
  const categories = category.map((item: any) => {
    return ({ 'label': item.attributes.title, 'value': item.attributes.title, 'id': item.id })
  })
  const price = [
    { 'label': "Low to High", 'value': "Low to High" },
    { 'label': "High to Low", 'value': "High to Low" }
  ];
  const prices = price.map((item) => {
    return ({ 'label': item.label, 'value': item.value })
  })
  const [priceFilter, setPriceFilter]: any = useState('')
  const popularity = [
    { 'label': "Highest", 'value': 'Highest' },
    { 'label': "Lowest", 'value': 'Lowest' }
  ]
  const popularities = popularity.map((item) => {
    return ({ 'label': item.label, 'value': item.value })
  })
  const [popularityFilter, setPopularityFilter]: any = useState('')
  useEffect(() => {
    dispatch(catAction())
    if ((categ === null) && (pric === null) && (pop === null)) {
      dispatch(shopAction())
    }
    else if (categ !== null) {
      setCategoryFilter({ 'value': catval, 'label': catval })
      dispatch(categoryAction(cat))
      if (pric !== null) {
        setPriceFilter({ 'value': pric, 'label': pric })
        dispatch(priceFilterAction(pric, cat))
        if (cat !== null) {
          dispatch(priceFilterAction(pric, cat))
          // dispatch(categoryAction(cat))
        }
      }
    }
    else if (pop !== null) {
      setPopularityFilter({ 'value': pop, 'label': pop })
    }

  }, [pop]);
  const handleChange = (event: any) => {
    const queryParam = {
      category: event.id + " " + event.value,
      price: new URLSearchParams(search).get('price') || "",
      popularity: new URLSearchParams(search).get('popularity') || ""
    }
    let urlParam = new URLSearchParams(queryParam).toString();
    setCategoryFilter({ 'value': event.value, 'label': event.label })
    dispatch(categoryAction(event.id))
    navigate({
      pathname: '/productlist',
      search: `?${urlParam}`
    });
  }

  const filterHandler = (event: any) => {
    const search = location.search;
    const queryParam = {
      category: new URLSearchParams(search).get('category') || "",
      price: event.value,
      popularity: new URLSearchParams(search).get('popularity') || ""
    }
    let urlParam = new URLSearchParams(queryParam).toString();
    // setFilters(filters=> filters.price= event.value)
    setPriceFilter({ 'value': event.value, 'label': event.label })
    dispatch(priceFilterAction(event.value, queryParam.category))
    navigate({
      pathname: '/productlist',
      search: `?${urlParam}`
    });
  }
  const popularityHandler = (event: any) => {
    const search = location.search;
    const queryParam = {
      category: new URLSearchParams(search).get('category') || "",
      price: new URLSearchParams(search).get('price') || "",
      popularity: event.value
    }
    let urlParam = new URLSearchParams(queryParam).toString();
    setPopularityFilter({ 'value': event.value, 'label': event.label })
    navigate({
      pathname: '/productlist',
      search: `?${urlParam}`
    });
  }
  const addtoFav = (item: any) => {
    dispatch(productFavouriteAction(item, onSuccess))
  }
  const onSuccess = () => {
    navigate(`/favouriteitemlist/${user_id}`)
    window.scrollTo(0, 0)
  }
  return (
    <div className='shop'>
      <div>
        <img src={eyes} alt="a" className="eyes" />
      </div>
      <div className='heading'>
        <h3>Shop</h3>
        <p><a href='#' className='text'>Home</a> | Shop</p>
      </div>
      <div className='card-group'>
        <div className='col-3' style={{ fontSize: 'x-large' }}><strong>OUR PRODUCTS</strong></div>
        <div className='col filters'>
          <Select options={categories} value={categoryFilter} placeholder="Categories" onChange={handleChange} />
        </div>
        <div className='col-3'>
          <Select options={prices} value={priceFilter} placeholder="Filter by Price" onChange={filterHandler} />
        </div>
        <div className='col filters'>
          <Select options={popularities} value={popularityFilter} placeholder="Sort by Popularity" onChange={popularityHandler} />
        </div>
      </div>
      <div className='card-group d-flex flex-wrap'>
        {data?.map(((item: any) => {
          return (
            <div className="col-3" key={item.id} >
              <div className="card" style={{ "margin": "auto" }}>
                <img className="shopimg" src={`${URL}${item?.attributes?.productImage?.data?.attributes?.url}`} alt="a" />
                <div className='middle'>
                  <i className="fa fa-eye" aria-hidden="true" onClick={() => { navigate(`/productDetails/${item.id}`); window.scrollTo(0, 0) }}></i>
                  <i className="fa fa-heart" aria-hidden="true" onClick={() => addtoFav(item)}></i>
                  <i className="fa fa-shopping-cart" aria-hidden="true" onClick={() => navigate(`/yourcart/${item.id}`)}></i>
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
    </div>
  )
}
export { Shop }