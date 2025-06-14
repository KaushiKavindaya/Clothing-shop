import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

const ImageList = [
    {
      id :1,
      img : Image1,
      title : "Upto 50% off on all Men's Wear",
      description : "loream His will forever be changed dolar sit amet, consectetur adipiscing elit, sed do eiusmed tempor incidunt ut labore ",
    },
  
    {
      id :2,
      img : Image2,
      title : "Upto 30% off on all Women's Wear",
      description : "loream His will forever be changed dolar sit amet, consectetur adipiscing elit, sed do eiusmed tempor incidunt ut labore ",
    },
  
    {
      id :3,
      img : Image3,
      title : "Upto 70% off on all Product Sale",
      description : "loream His will forever be changed dolar sit amet, consectetur adipiscing elit, sed do eiusmed tempor incidunt ut labore ",
    },
  ]

const Hero = () => {
    return (
      <div className="relative overflow-hidden min-h-[550px] sm:min-h[650px] bg-gray-100 flex justify-center 
      items-center dark:bg-gray-950 dark:text-white duration-200">
        {/*  background patton */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
        </div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div>
                <h1>Loream ipsum dolar sit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores debitis laborum modi cum delectus. 
                  Facere atque est molestias dolorem quas, laborum perspiciatis? Cupiditate dolores obcaecati dolorem 
                  adipisci at repellat voluptate!</p>
              </div>
              {/* text content section */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
