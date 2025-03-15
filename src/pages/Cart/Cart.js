import { CardCart } from "../../components/CardCart/CardCart";
import { useTitle } from "../../hooks/useTitle";

export const Cart = () => {
  const pageTitle = useTitle(`Cart`);

  const products = [
    {id: 1000, name: `Sony Wh-Ch510 Bluetooth Wireless`, imgSrc: `./assets/images/products/Sony wh-Ch510 Bluetooth Wireless.jpg`, price: 149},
    {id: 1001, name: `boAt Rockerz 450`, imgSrc: `./assets/images/products/boAt Rockerz 450.jpg`, price: 49}
  ]

  return (
    <div className="cart-wrapper">
      <div className="text-center mb-20">
        <h2 className="font-medium text-3xl">Cart Items: {products.length}</h2>
      </div>

      {products.map((product) => (
        <CardCart key={product.id} product={product} />
      ))}      
    </div>
  )
}