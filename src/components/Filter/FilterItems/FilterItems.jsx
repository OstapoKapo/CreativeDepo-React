import './FilterItems.css';

function FilterItems(props) {
  return (
    <div className={props.class}>
       <p className="filter__item__p">{props.text}</p>
    </div>
  );
}

export default FilterItems;