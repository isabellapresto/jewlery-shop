import PurchaseBtn from '../PurchaseBtn/PurchaseBtn'
import Product from '../../interfaces'

export default function ProductCard ({image, title, description, price}: Product) {
  return (

    <div className='product_card'>
      <img
        src={image}
        alt={title}
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />
      <div className='product_card_info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: {price} SEK</p>
        <PurchaseBtn />
      </div>
  </div>
  );
}
