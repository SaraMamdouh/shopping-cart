import React from 'react';
import {connect} from 'react-redux'
import './style.css';
import{ShowCheck} from '../../redux/cart/cartAction'
const CheckOut = ()=>{
    const handleClick=(e)=>{
        e.preventDefault();
        ShowCheck();
    }
  return (
      <section className="check">
 <div className="pop-up">
        <div className="cart-content">
            <div className="container">
            <form >
          <div className="form-group">
            <label for="exampleFormControlInput1">Name:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  />
          </div> 
          <div className="form-group">
            <label for="exampleFormControlInput4">Address:</label>
            <input type="text" class="form-control" id="exampleFormControlInput4"  />
          </div> 
          <div className="form-group">
            <label for="exampleFormControlInput2">phone</label>
            <input type="text" class="form-control" id="exampleFormControlInput2"  />
          </div> 
            <div className="form-group">
            <label for="exampleFormControlInput3">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput3"  />
          </div> 
          <div className="form-group">
    <label for="exampleFormControlTextarea5">Notes</label>
    <textarea class="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
  </div>
  <div className="form-group">
        <button className="cart-button mt-2" >proceed to checkout</button>
        <button className="close-button mt-2" onClick={(e)=>handleClick()}>Close</button>

        </div>
        </form>
      
                </div>
                </div>
            </div>
          </section>
         
  )
}

  
  const mapDispatchToProps = dispatch => {
    return {
        ShowCheck:()=>dispatch(ShowCheck())
    }
  }
  export default connect(
    mapDispatchToProps
  )(CheckOut)


