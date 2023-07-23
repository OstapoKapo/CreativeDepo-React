import { useRef, useState, useEffect } from 'react';
import './Filter.css';
import FilterItems from './FilterItems/FilterItems';


let filterItemsArr = [
    {text:'ВСІ',
     class:'filter__item filter__item_active',
     dataAction:'all' 
    },
    {text:'ФУТБОЛКИ',
     class:'filter__item',
     dataAction:'t-shirt' 
    },
    {text:'ХУДІ',
     class:'filter__item',
     dataAction:'hoodie' 
    },
    {text:'КЕПКИ',
     class:'filter__item',
     dataAction:'cap' 
    },
    {text:'АКСЕСУАРИ',
     class:'filter__item',
     dataAction:'cover' 
    }
]

function Filter({products, setProducts}) {
  let [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
      }
      );
  }, []);  

  const filter = useRef(0)

  const filterOnClick = (e) => {
    let target = e.target.closest('div div');
    if(target.getAttribute('data-action') == 'all'){
      setProducts(allProducts);
    }else{
      let  newProducts = allProducts.filter(item => item.type == target.getAttribute('data-action'))
      setProducts(newProducts)
    }
  }
  return (
    <div className='filter' ref={filter} onClick={filterOnClick}>
       {filterItemsArr.map((item) => <FilterItems key={item.text} dataAction={item.dataAction} products={products} setProducts={setProducts} parent={filter} text={item.text} class={item.class} />)}
    </div>
  );
}

export default Filter;