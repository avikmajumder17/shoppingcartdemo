import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

export const Card = ({product}) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  const handleAdd = () => {
    addToCart(product);
  };  

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id);

    if (productIsInCart) {
      setIsInCart(true);
    } else{
      setIsInCart(false);
    }
  }, [cartList, product.id])

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img className="p-8 rounded-t-lg w-full" src={product.imgSrc} alt={product.name} />
      </a>
      
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          
          { isInCart ? (<button onClick={() => removeFromCart(product)} className="bg-red-600 px-4 py-2 rounded-md text-white">Remove</button>) : (<button onClick={handleAdd} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>) }
        </div>
      </div>
    </div>    
  )
}