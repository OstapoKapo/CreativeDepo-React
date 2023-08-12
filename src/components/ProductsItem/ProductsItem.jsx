import './ProductsItem.css';

function ProductsItem(props,{popup, setPopup, popupCordinate, setPopupCordinate}) {
  
    if(props.type === 'cover'){
        return(
            <div className="productsItem" id={'item'+props._id}>
            <img className='productsItem__img' src={'img/'+props.img}  alt="photo" />
            <div className="productsItem__main">
                <div className="productsItem__main__top">
                    <p className="productsItem__name">{props.name}</p>
                    <p className="productsItem__size"><span>Модель:</span> {props.model}</p>
                    <p className="productsItem__size productsItem__material"><span>Матеріал:</span> {props.material}</p>
                    <p className="productsItem__price">{props.price}</p>
                </div>
                <div className="productsItem__main__bottom">
                    <button className="productsItem__btn"  id={'btn'+props._id}>ДОДАТИ У КОШИК</button>
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="productsItem" id={'item'+props._id}>
            <img className='productsItem__img' src={'img/'+props.img}  alt="photo" />
            <div className="productsItem__main">
                <div className="productsItem__main__top">
                    <p className="productsItem__name">{props.name}</p>
                    <p className="productsItem__size"><span>Розмір:</span> {props.size}</p>
                    <p className="productsItem__price">{props.price}</p>
                </div>
                <div className="productsItem__main__bottom">
                     <button className="productsItem__btn" id={'btn'+props._id} >ДОДАТИ У КОШИК</button>
                </div>
            </div>
        </div>
            )   
    }
}

export default ProductsItem;