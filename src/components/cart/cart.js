import React from "react";
import { connect } from "react-redux";
import {
  RemoveCart,
  increaseCartQuantity,
  showCart,
  ShowCheck,
} from "../../redux/cart/cartAction";
import "./style.css";
import { DecreseCount, IncreaseCount } from "../../redux/product/productAction";

const Cart = ({
  increaseProductCount,
  increaseCartQuantity,
  decreaseCartQuantity,
  decreaseProductCount,
  showCart,
  cart,
  ShowCheck,
  total,
}) => {
  const handleUpdateCount = ({ id, quantity, price }) => {
    increaseProductCount(id, quantity);
    increaseCartQuantity(id, quantity, price);
  };
  const handleDecreaseCount = ({ id, quantity, price }) => {
    decreaseCartQuantity(id, quantity, price);
    decreaseProductCount(id, quantity);
  };
  return (
    <section className="cart">
      <div className="pop-up">
        <div className="cross-icon">
          <i className="fas fa-times" onClick={showCart}></i>
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
                {cart.map((m) => {
                  return (
                    <tr>
                      <td>
                        <div className="cart-body">
                          <div className="cart-image">
                            <img src={m.image} alt="cart" />
                          </div>
                          <h4>{m.name}</h4>
                        </div>
                      </td>
                      <td> {"$ " + m.price + ".00"}</td>
                      <td>
                        <div className="cart-quantity">
                          <button
                            className="quantity-button"
                            onClick={() =>
                              handleDecreaseCount({
                                id: m._id,
                                quantity: m.quantity,
                                price: m.price,
                              })
                            }
                          >
                            -
                          </button>
                          <span className="quantity">{m.quantity}</span>
                          <button
                            className="quantity-button"
                            onClick={() =>
                              handleUpdateCount({
                                id: m._id,
                                quantity: m.quantity,
                                price: m.price,
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="check-out">
              <span className="total-span">total: </span>
              <span className="price-span">{"$" + total + ".00"}</span>
              <button
                className="cart-button check-out-button "
                onClick={ShowCheck}
              >
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    total: state.cart.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCartQuantity: (id, quantity, price) =>
      dispatch(increaseCartQuantity(id, quantity, price)),
    decreaseCartQuantity: (id, quantity, price) =>
      dispatch(RemoveCart(id, quantity, price)),
    increaseProductCount: (id, quantity) =>
      dispatch(IncreaseCount(id, quantity)),
    decreaseProductCount: (id, quantity) =>
      dispatch(DecreseCount(id, quantity)),
    showCart: () => dispatch(showCart()),
    ShowCheck: () => dispatch(ShowCheck()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
