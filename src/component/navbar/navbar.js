import React from 'react';
import logo from '../../logo-default-231x49.png';
import { connect } from 'react-redux';
import Cart from '../cart/cart';
import {showCart} from '../../redux/cart/cartAction';
import './style.css';
import CheckOut from './../check-out/checkOut';

const Navbar =(props)=>{
  const item=Object.keys(props.cart).length;

    return (
      <section>
        <nav className="desert-navbar">
            <div className="logo">
                <img src={logo} className="desert-logo"/>
            </div>
            <div className="cart float-right" onClick={props.ShowCart}>
            <i class="fas fa-shopping-cart"></i>
            <span className="number-of-items">{item}</span>
            </div>
            
        </nav>
        {
          props.show&&<Cart/>
        }
        {
          props.showCheck&&<CheckOut/>
        }
        </section>
    )
}
const mapStateToProps = state => {
    return {
     cart:state.cart.cart,
     show:state.cart.showCart,
     showCheck:state.cart.showCheck

    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
     ShowCart:()=>dispatch(showCart()),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);