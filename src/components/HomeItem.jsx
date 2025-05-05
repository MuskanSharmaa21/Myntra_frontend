import { useDispatch, useSelector } from 'react-redux';
import { IoIosAddCircleOutline } from "react-icons/io";
import { bagActions } from "../../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector(store => store.bag); // Move useSelector to the top

  // Check if item is already in the bag
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag=()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button className="btn btn-danger rounded-pill px-3" type="button" onClick={handleRemoveFromBag}>
          Remove
        </button>
      ) : (
        <button
          className="btn btn-success rounded-pill px-3"
          type="button"
          onClick={handleAddToBag}
        >
          <IoIosAddCircleOutline /> Add To Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
