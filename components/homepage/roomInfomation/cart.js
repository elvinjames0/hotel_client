import React from "react";

const Cart = () => {
  return (
    <table className="table-fixed w-full mb-3">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td>Sting</td>
          <td>1</td>
          <td>10.000đ</td>
        </tr>
        <tr>
          <td>Aqua</td>
          <td>1</td>
          <td>5.000đ</td>
        </tr>
        <tr>
          <td>Tiger</td>
          <td>1</td>
          <td>25.000đ</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
