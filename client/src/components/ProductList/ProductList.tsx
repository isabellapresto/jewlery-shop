import CategoryDropDown from '../CategoryDropDown/CategoryDropDown';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
  return (
    <div className="product_list">
      <div className="product_list_category">
        <h3>Filter by category</h3>
        <CategoryDropDown />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductList;