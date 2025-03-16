import { CardCart } from "../../components/CardCart/CardCart";
import { useCart } from "../../context/CartContext";
import { useTitle } from "../../hooks/useTitle";

export const Cart = () => {
  useTitle(`Cart`);
  
  const { total, cartList } = useCart();

  return (
    <div className="cart-wrapper">
      <div className="text-center mb-20">
        <h2 className="font-medium text-3xl">Cart Items: {cartList.length} | ${total}</h2>
      </div>

      {cartList.map((product) => (
        <CardCart key={product.id} product={product} />
      ))}      
    </div>
  )
}