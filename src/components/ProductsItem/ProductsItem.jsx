import './ProductsItem.css';
import photo from './img/blackCapBravery.jpg'

function ProductsItem(props) {
  return (
        <div className="productsItem">
            <img className='productsItem__img' src={photo} alt="" />
            <div className="productsItem__main">
                <p className="productsItem__name">ФУТБОЛКА IM UKRAINIAN</p>
                <p className="productsItem__size"><span>Розмір</span> XS, S, M, L, XL</p>
            </div>
        </div>
  );
}

export default ProductsItem;