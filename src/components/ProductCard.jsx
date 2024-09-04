import React, { useState } from 'react';
import baklavaMobile from '../assets/img/baklava-mobile.jpg';
import addCartIcon from '../assets/img/icon-add-to-cart.svg';
import addIcon from '../assets/img/icon-increment-quantity.svg';
import minusIcon from '../assets/img/icon-decrement-quantity.svg';
import Button from './Button';
import { addCart } from '../redux/cartReducer';
import { useDispatch } from 'react-redux';

function ProductList({ data }) {

  const dispatch = useDispatch();

    const [itemStates, setItemStates] = useState(
      data.reduce((acc, item, index)=>{ 
        acc[index] = { inCart: false, quantity: 1};
        return acc
      }, {})
    );



  const handleAddToCart = (itemIndex, item) => {

    const currentQuantity = itemStates[itemIndex].quantity;


    dispatch(addCart({
      id:itemIndex,
      name: item.name,
      price: item.price,
      quantity:currentQuantity,
    }));
    // Update state for specific item
   setItemStates(prevStates => ({ 
    ...prevStates,
    [itemIndex]: {...prevStates[itemIndex], inCart:true}
   }));
  };


    const handleIncrease = (itemIndex, items) =>{ 
      setItemStates(prevStates => ({
        ...prevStates,
        [itemIndex]: {...prevStates[itemIndex], quantity:prevStates[itemIndex].quantity + 1}
      }));


      dispatch(addCart({
        id: itemIndex,
        name: items.name,
        price: items.price,
        quantity: itemStates[itemIndex].quantity + 1,
      }));
    }

    const handleDecrease = (itemIndex, items)=>{ 

      const newQuantity = Math.max(itemStates[itemIndex].quantity - 1, 1)


      setItemStates(prevStates => ({ 
        ...prevStates,
      [itemIndex]: { 
        ...prevStates[itemIndex], 
        quantity: newQuantity
      },
      }));

      dispatch(addCart({
        id:itemIndex, 
        name:items.name, 
        price:items.price, 
        quantity:newQuantity
      }))
    };



  return (
    <div className=''>
      {data?.map((items, index) => {
        const {inCart, quantity} = itemStates[index]

        return (
          <div key={index} className='my-[1.3rem]'>
            <div className='relative flex justify-center mb-[1.6rem]'>
              <img
                src={baklavaMobile}
                alt="cookie"
                className={`rounded-[1rem] ${inCart ? 'border-red border-[.2rem]' : 'border-0'}`}
              />
              <div className='absolute flex justify-center -bottom-6'>
                {!inCart ? (
                  <Button onClick={() => handleAddToCart(index, items)} addToCartTrue={true}
                  className='border-rose-300 border-2 bg-white'>
                    <img src={addCartIcon} alt='add to cart' /> Add to Cart
                  </Button>
                ) : (
                  <div className='flex flex-row rounded-[2rem] items-center justify-between w-[12rem] px-[1rem] bg-red py-2'>
                    <img src={minusIcon} alt="add icon" onClick={()=>handleDecrease(index, items)} className='rounded-[50%] cursor-pointer border-2 border-white h-6 w-6 p-1' />
                    <small className='font-semibold text-white text-[1.3rem]'>{quantity}</small>
                    <img src={addIcon} alt="minus icon" onClick={()=>handleIncrease(index, items)} className='rounded-[50%] cursor-pointer h-6 w-6 border-2 border-white p-1' />
                  </div>
                )}
              </div>
            </div>
            <div key={`info-${items.id}`}>
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
