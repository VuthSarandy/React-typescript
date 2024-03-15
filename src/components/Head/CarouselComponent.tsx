
'use client';

import { Carousel } from 'flowbite-react';

export default function CarouselComponent() {
  return (
    <div className="h-56 mb-[450px] sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className='h-[800px]' pauseOnHover>
        <img src="https://cdn.pixabay.com/photo/2024/01/19/18/31/mountain-8519574_1280.png" alt="..." />
        <img src="https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_1280.jpg" alt="..." />
        <img src="https://cdn.pixabay.com/photo/2023/03/03/23/20/car-7828554_1280.jpg" alt="..." />
        <img src="https://cdn.pixabay.com/photo/2024/02/23/19/37/squirrel-8592682_1280.jpg" alt="..." />
        <img src="https://cdn.pixabay.com/photo/2024/03/01/19/57/airbus-8607152_1280.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
