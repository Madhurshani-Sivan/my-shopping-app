import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";

const Cart: FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Qunatity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
