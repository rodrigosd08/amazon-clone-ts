import React from "react";
import PropTypes, { InferProps } from "prop-types";
import Star from "./Star";
import "./Product.css";

export default function Product({
  id,
  title,
  image,
  price,
  rating
}: InferProps<typeof Product.propTypes>) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <Star key={i} />
            ))}
        </div>
      </div>

      <img src={image} alt="product_image" />

      <button>Add to Basket</button>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};
