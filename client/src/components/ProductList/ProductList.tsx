import CategoryDropDown from '../CategoryDropDown/CategoryDropDown';

function ProductList() {
  return (
    <div className="product_list">
      <div className="product_list_category">
        <h3>Filter by category</h3>
        <CategoryDropDown />
      </div>
    </div>
  );
}

export default ProductList;