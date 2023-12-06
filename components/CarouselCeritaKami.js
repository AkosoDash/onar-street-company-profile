// import {} from "daisyui";
import Link from "next/link";

const CarouselCeritaKami = ({ children, uniqueKey, name, img_link, key }) => {
    return (
      <>
            <div className="carousel-item">
                <img src={img_link} alt={key} className="w-96" />
            </div> 
      </>
    );
  };
  
  export default CarouselCeritaKami;
  