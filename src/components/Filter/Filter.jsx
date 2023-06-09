import './Filter.css';
import FilterItems from './FilterItems/FilterItems';

let filterItemsArr = [
    {text:'ВСІ',
     class:'filter__item filter__item_active' 
    },
    {text:'ФУТБОЛКИ',
     class:'filter__item'
    },
    {text:'СВІТШОТИ',
     class:'filter__item'
    },
    {text:'ХУДІ',
     class:'filter__item'
    },
    {text:'КЕПКИ',
     class:'filter__item'
    },
    {text:'АКСЕСУАРИ',
     class:'filter__item'
    }
]

function Filter() {
  return (
    <div className='filter'>
       {filterItemsArr.map((item) => <FilterItems key={item.text} text={item.text} class={item.class} />)}
    </div>
  );
}

export default Filter;