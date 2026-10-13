import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={image}
          alt={name}
        />

        <div className="food-item-counter">
          {quantity === 0 ? (
            <img
              src={assets.add_icon_white}
              alt="Add item"
              onClick={() => setQuantity(1)}
              className="add-icon"
            />
          ) : (
            <>
              <img
                src={assets.remove_icon_red}
                alt="Decrease quantity"
                onClick={() =>
                  setQuantity((prev) => Math.max(0, prev - 1))
                }
                className="remove-icon"
              />

              <span>{quantity}</span>

              <img
                src={assets.add_icon_green}
                alt="Increase quantity"
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
                className="add-icon"
              />
            </>
          )}
        </div>
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="food-item-desc">{description}</p>

        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;