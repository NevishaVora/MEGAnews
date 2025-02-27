import React from 'react';
import { ConstantImageData } from '../Constant/Index';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate();
  const handleSliderCard = () =>{
    navigate('/PostDetail');
  }
  return (
    <div>
      <div className="max-w-[1320px] mx-auto p-4 mt-2">
        <OwlCarousel
          className="owl-theme slider1"
          loop
          margin={10}
          nav
          items={7} // Adjust the number of visible items as needed
          dots={false}
         
        >
          {ConstantImageData.map((item, indx) => (
            <div
              key={indx}
              style={{ backgroundImage: `url(${item.imgsrc})` }}
              className="bg-no-repeat bg-cover w-[150px] h-[48px] flex justify-center items-center rounded-[12px] transition-all duration-300 ease-in-out transform hover:scale-110"
              onClick={()=>handleSliderCard()}
            >
              <span className="text-white">{item.name}</span>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Slider;
