import "./PlaceOrder.css";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const subtotal = food_list.reduce((total, item) => {
    return total + item.price * (cartItems[item._id] || 0);
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (subtotal === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Delivery information submitted successfully!");
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <h2>Delivery Information</h2>

        <div className="multi-fields">
          <input
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="street"
          placeholder="Street address"
          value={formData.street}
          onChange={handleChange}
          required
        />

        <div className="multi-fields">
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="multi-fields">
          <input
            name="zipcode"
            placeholder="ZIP code"
            value={formData.zipcode}
            onChange={handleChange}
          />
          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="place-order-right">
        <div className="order-total">
          <h2>Cart Totals</h2>

          <div className="order-total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <hr />

          <div className="order-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>

          <hr />

          <div className="order-total-details total">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>

          <button type="submit" className="place-order-btn">
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;