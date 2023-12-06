// import {} from "daisyui";
const CarouselComponent = ({ children }) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full card">
            <img
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="card w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full card">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="card w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full card">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="card w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full card">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="card w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
