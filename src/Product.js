import { useEffect, useState } from "react";
import "./Product.css";

//Shows product list
const Product = (props) => {
  const {
    getCartList = () => {},
    getQuantityObj = () => {},
    quantityObj = {},
  } = props || {};
  //product list
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // get product list on initial render
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((responseData) => {
        let quantity = {};
        responseData.forEach((product) => {
            quantity = { ...quantity, [product.id]: 0 };
        });
        getQuantityObj(quantity);
        setProductList(responseData);
      });
  }, []);

  // increments the product quantity
  const incrementQuantity = (productId) => {
    getQuantityObj({ ...quantityObj, [productId]: quantityObj[productId] + 1 });
  };

  // decrements the product quantity
  const decrementQuantity = (productId) => {
    getQuantityObj({ ...quantityObj, [productId]: quantityObj[productId] - 1 });
  };

  return (
    <div className="products-container">
      <div className="grid-container">
        {productList &&
          productList.map((product) => {
            return (
              <div className="product">
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
                <p className="product-title">{product.title}</p>
                <span className="product-price">{product.price}</span>
                <div className="quantity-container">
                  <span>Qty:</span>
                  <button
                    disabled={quantityObj[product.id] === 0 ? true : false}
                    className="quantity-button"
                    type="button"
                    onClick={() => {
                      decrementQuantity(product.id);
                    }}
                  >
                    <span>-</span>
                  </button>
                  <span>{quantityObj[product.id]}</span>
                  <button
                    className="quantity-button"
                    type="button"
                    onClick={() => {
                      incrementQuantity(product.id);
                    }}
                  >
                    <span>+</span>
                  </button>
                </div>
                <button
                  className="add-to-cart"
                  disabled={quantityObj[product.id] > 0 ? false : true}
                  type="button"
                  onClick={() => {
                    getCartList(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
