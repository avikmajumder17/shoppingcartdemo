import { useCart } from "../../context/CartContext";

export const CardCart = ({product}) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <div className="cardcart-wrapper">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-8 rounded-md shadow-lg p-4">
          <img className="rounded-t-lg w-40 h-40 object-cover p-5" src={product.imgSrc} alt={product.name} />

          <h4 className="text-xl font-medium">{product.name}</h4>

          <h4 className="text-xl font-medium">${product.price}</h4>

          <button onClick={handleRemove} className="bg-red-600 px-4 py-2 rounded-md text-white">Remove</button>
        </div>        
      </div>
    </div>
  )
}