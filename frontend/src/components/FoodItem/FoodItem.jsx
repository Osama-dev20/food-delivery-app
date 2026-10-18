import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} loading="lazy" />

        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="Add item"
            onClick={() => addToCart(id)}
            className="add-icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="Decrease quantity"
              onClick={() => removeFromCart(id)}
            />
            <span key={cartItems[id]}>{cartItems[id]}</span>
            <img
              src={assets.add_icon_green}
              alt="Increase quantity"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="food-item-desc">{description}</p>

        <div className="food-item-footer">
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;