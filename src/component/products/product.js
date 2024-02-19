import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/product/productAction';
import {IncreaseCount,DecreseCount} from '../../redux/filter/filterAction';
import './style.css';
import { addToCart, increaseCartQuantity, RemoveCart } from '../../redux/cart/cartAction';
import Navbar from '../navbar/navbar';
import Filter from '../filter/filter';

function Product ({ productData, filter,fetchData ,Increase,Decrease,addTocart,increaseCartQuantity,decreaseCartQuantity}) {
  const HandleAddToCart =(id,product,count,price)=>{
    Increase(id,count,price);
    addTocart(product,price)
  }
   const HandleUpdateCount=(id,count,price)=>{
    Increase(id,count)
    increaseCartQuantity(id,count,price)
  }
   const HandleDecreaseCount=(id,count,price)=>{
    decreaseCartQuantity(id,count,price)
    Decrease(id,count)
    
  }
  useEffect(() => {
    fetchData()
  }, [])
  return productData.loading ? (
    <h2>Loading</h2>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <section className="shop">
      <Navbar/>
      <Filter/>
    <div className="container">
      <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3">
        {
          filter.map(p => {
            return(
              <div className="col">
              <div className="shop-content">
              <div className="shop-figure">
              <img src={process.env.PUBLIC_URL+p.image}/>
              </div>
              <div className="shop-caption">
              <h5><a href="#">{p.title}</a></h5>
              <p className="price">{"$ "+ p.price +".00"} </p>
              </div>
              <div className="shopping-cart">
                <div className={p.count===0?"hidden-item hidden":"hidden-item"}>
                  <button type="button" className=" product-button" onClick={()=>HandleDecreaseCount(p.id,p.count,p.price)}>-</button>
                  <span className="count">{p.count}</span>
                  <button type="button" className=" product-button" onClick={()=>HandleUpdateCount(p.id,p.count,p.price)}>+</button>
                  </div>
              <i className={p.count===0?"fas fa-shopping-cart ":"fas fa-shopping-cart hidden"} onClick={()=>HandleAddToCart(p.id,p,p.count,p.price)}></i>
              </div>
              </div>
              </div>
          )}
          )}
      </div>
    </div>
    </section>

  )
}

const mapStateToProps = state => {
  return {
    productData:state.product.data,
    filter:state.filter.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    Increase:(id,count)=>dispatch(IncreaseCount(id,count)),
    Decrease:(id,count)=>dispatch(DecreseCount(id,count)),
    addTocart:(item,price)=>dispatch(addToCart(item,price)),
    increaseCartQuantity:(id,count,price)=>dispatch(increaseCartQuantity(id,count,price)),
    decreaseCartQuantity:(id,count,price)=>dispatch(RemoveCart(id,count,price))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)