import React, { useState } from 'react';
import baklavaMobile from '../assets/img/baklava-mobile.jpg';
import addCartIcon from '../assets/img/icon-add-to-cart.svg';
import addIcon from '../assets/img/icon-increment-quantity.svg';
import minusIcon from '../assets/img/icon-decrement-quantity.svg';
import Button from './Button';
import { addCart } from '../redux/cartReducer';
import { useDispatch } from 'react-redux';

function ProductList({ data }) {
  // State to track "Add to Cart" status for each item
  const [cartStates, setCartStates] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = (itemIndex, item) => {
    dispatch(addCart({
      title: item.title,
      price: item.price,
      quantity
    }));
    // Update state for specific item
    setCartStates(prevState => ({
      ...prevState,
      [itemIndex]: true // Mark this item as added
    }));
  };

  return (
    <div className=''>
      {data?.map((items, index) => {
        const isItemInCart = cartStates[index];

        return (
          <div key={index} className='my-[1.3rem]'>
            <div className='relative flex justify-center mb-[1.6rem]'>
              <img
                src={baklavaMobile}
                alt="cookie"
                className={`rounded-[1rem] ${isItemInCart ? 'border-red border-[.2rem]' : 'border-0'}`}
              />
              <div className='absolute flex justify-center -bottom-6'>
                {!isItemInCart ? (
                  <Button onClick={() => handleAddToCart(index, items)} addToCartTrue={true}>
                    <img src={addCartIcon} alt='add to cart' /> Add to Cart
                  </Button>
                ) : (
                  <div className='flex flex-row rounded-[2rem] items-center justify-between w-[12rem] px-[1rem] bg-red py-2'>
                    <img src={minusIcon} alt="add icon" onClick={()=>setQuantity(prev=> prev === 1 ? 1 : prev - 1 )} className='rounded-[50%] cursor-pointer border-2 border-white h-6 w-6 p-1' />
                    <small className='font-semibold text-white text-[1.3rem]'>{quantity}</small>
                    <img src={addIcon} alt="minus icon" onClick={()=>setQuantity(prev=> prev + 1 )} className='rounded-[50%] cursor-pointer h-6 w-6 border-2 border-white p-1' />
                  </div>
                )}
              </div>
            </div>
            <div key={`info-${index}`}>
              <small className='text-[1rem]'>{items.category}</small>
              <h5 className='text-[1.4rem] font-semibold'>{items.name}</h5>
              <p className='text-[1.1rem] text-red font-semibold '>${items.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
