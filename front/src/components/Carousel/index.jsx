import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const MyCarousel = () => {
  const handleSwipe = (index) => {
    // Maneja el cambio de diapositiva aquí si es necesario
    console.log(`Cambiando a la diapositiva ${index}`);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SwipeableViews enableMouseEvents onChangeIndex={handleSwipe} resistance>
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          Diapositiva 1
        </div>
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          Diapositiva 2
        </div>
        <div className="w-full h-full bg-gray-400 flex items-center justify-center">
          Diapositiva 3
        </div>
      </SwipeableViews>
    </div>
  );
};

export default MyCarousel;
