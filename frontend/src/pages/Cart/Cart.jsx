import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } =
    useContext(StoreContext);

  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={item._id}
                className="cart-items-title cart-items-item"
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>
                  ${(item.price * cartItems[item._id]).toFixed(2)}
                </p>
                <p
                  className="cart-remove"
                  onClick={() => removeFromCart(item._id)}
                  role="button"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  X
                </p>
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>

          <hr />

          <div className="cart-total-details cart-total-final">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>

          <Link to="/order" className="cart-checkout-btn">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;