import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Cards = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto p-4 mt-2">
        <div className="grid grid-cols-4 gap-4">
          {/* First Card */}
          <div className="col-span-2 flex gap-4 relative">
            <img src="IMAGES/unsplash_car.png" alt="Car" className="w-[48%] h-auto rounded-md" />
            <div className="absolute bottom-[20px] mx-[10px] bg-white w-[45%] h-auto bg-opacity-50 p-4 rounded-md">
              <h3 className="text-black text-xl font-semibold">How to Drive a Car Safely</h3>
              <p className="text-black text-[12px]">Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may... </p>
            </div>
            <img src="IMAGES/lady.png" alt="Lady" className="w-[50%] h-auto rounded-md" />
            <div className="absolute bottom-[20px] mx-[10px] left-[320px] bg-white w-[47%] h-auto bg-opacity-50 p-4 rounded-md">
              <h3 className="text-black text-xl font-semibold">How to Make Dance Music</h3>
              <p className="text-black text-[12px]">Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking... </p>
            </div>
          </div>

          {/* Last Card with Slider */}
          <div className="col-span-2 relative">
            <OwlCarousel
              className="owl-theme sliderCard"
              loop
              margin={10}
              nav
              items={1} // Shows one image at a time
              dots={false}
            >
              <div className="item">
                <img
                  src="IMAGES/computer.png"
                  alt="Double Computer"
                  className="w-[100%] h-[400px] col-span-2 rounded-md"
                />
                <div className="absolute bottom-[20px] mx-[10px] left-[0] bg-white w-[97%] h-auto bg-opacity-50 p-4 rounded-md">
                  <h3 className="text-black text-xl font-semibold">Why I Stopped Using Multiple Monitor</h3>
                  <p className="text-black text-[12px]">A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of...</p>
                </div>
              </div>
              {/* Additional Items (if you want to add more images to the slider) */}
              <div className="item">
                <img
                  src="IMAGES/computer.png"
                  alt="Second Computer"
                  className="w-[100%] h-[400px] col-span-2 rounded-md"
                />
                <div className="absolute bottom-[20px] mx-[10px] left-[0] bg-white w-[97%] h-auto bg-opacity-50 p-4 rounded-md">
                  <h3 className="text-black text-xl font-semibold">Second Item Example</h3>
                  <p className="text-black text-[12px]">Another example description for the second item in the slider.</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
