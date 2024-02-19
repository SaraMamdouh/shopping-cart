import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {RemoveCart,increaseCartQuantity, showCart,ShowCheck}from '../../redux/cart/cartAction';
import CheckOut from '../check-out/checkOut';
import './style.css';

const Cart =(props)=>{


return(
    <section className="cart">
    <div className="pop-up">
      <div className="cross-icon">
      <i className="fas fa-times" onClick={props.showCart}></i>
      </div>
        <div className="cart-content">
            <div className="container">
            <table>
            <thead>
            <tr>
            <th>product name</th>
            <th>price</th>
            <th>quantity</th>
            </tr>
            </thead>
            <tbody>
            {props.cart.map(m=>{
                return(
                    <tr>
                    <td>
                    <div className="cart-body">
                    <div className="cart-image">
                    <img src={m.image}/>
                    </div>
                   <h4>{m.title}</h4>
                    </div>
                    </td>
                    <td> {"$ "+ m.price + ".00"}</td>
                    <td>
                    <div className="cart-quantity">
                    <button className="quantity-button"  onClick={()=>props.decreaseItem(m.id,m.count,m.price)} >-</button>
                  <span className="quantity">{m.count}</span>
                    <button className="quantity-button" onClick={()=>props.increaseItem(m.id,m.count,m.price)}>+</button>
                    </div>
                    </td>
                    </tr>
                )
            })}
            </tbody>
            </table>
            <div className="check-out">
        <span className="total-span">total: </span>
       <span className="price-span">{"$"+props.total+".00"}</span>
        <button className="cart-button check-out-button "  onClick={props.ShowCheck}>proceed to checkout</button>
            </div> 
        </div>
    </div>      
    </div>
    </section>
)
}
const mapStateToProps = state => {
    return {
      cart:state.cart.cart,
      total:state.cart.total
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
     increaseItem:(id,count,price)=>dispatch(increaseCartQuantity(id,count,price)),
     decreaseItem:(id,count,price)=>dispatch(RemoveCart(id,count,price)),
     showCart:()=>dispatch(showCart()),
     ShowCheck:()=>dispatch(ShowCheck())
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
