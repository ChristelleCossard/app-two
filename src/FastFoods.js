import React from 'react';
import data from './food.json';
import Restaurant from './Restaurant';

const FastFoods = () => {

  const foodData = data.map((dataItem) => ({
    ...dataItem,
    foodItems: dataItem.foodItems.map((foodItem) => (
      { id: Math.random(), ...foodItem }
    ))
  }));

  return (
    <div>
      {foodData.map((dataItem) => (
        <Restaurant
          key={dataItem.restaurant}
          name={dataItem.restaurant}
          menuItems={dataItem.foodItems}
        />
      ))}
    </div>
  )
}

export default FastFoods;