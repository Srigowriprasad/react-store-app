import { useEffect, useState } from "react";
import "./Cart.css";

// Cart Details
const Cart = (props) => {
  const {
    cartList = [],
    quantityObj = {},
    removeCartList = () => {},
  } = props || {};
  const [totalValue, setTotalValue] = useState(0);

  // Update total value on change of cart or quantity
  useEffect(() => {
    let summedValue = 0;
    cartList.forEach((cart) => {
      summedValue = summedValue + cart.price * quantityObj[cart.id];
    });
    setTotalValue(summedValue);
  }, [cartList, quantityObj]);

  return (
    <div className="cart-table-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th className="table-head">Name</th>
            <th className="table-head">Qantity</th>
            <th className="table-head">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{quantityObj[product.id]}</td>
                <td>
                  {product.price}
                  <button
                    onClick={() => {
                      removeCartList(product);
                    }}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <strong>Total Price</strong>
            </td>
            <td>{totalValue}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
