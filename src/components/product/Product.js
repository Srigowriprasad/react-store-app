import { useEffect, useState } from "react";
import "./Product.css";
import Header from "../../common/header/Header";

//Shows product list
const Product = (props) => {
  const { getCartList = () => { } } = props || {};
  //product list
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // get product list on initial render
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((responseData) => {
        setProductList(responseData);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="products-container">
        <div className="grid-container">
          {productList &&
            productList.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                  <p className="product-title">{product.title}</p>
                  <span className="category">{product.category}</span>
                  <span className="product-price">{product.price}$</span>
                  <button
                    className="add-to-cart"
                    type="button"
                    onClick={() => {
                      getCartList(product);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="buy-now"
                    type="button">
                    Buy Now
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
