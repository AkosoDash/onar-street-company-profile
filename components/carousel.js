// import {} from "daisyui";
const CarouselComponent = ({ data, isLoaded }) => {
  console.log({ data: data });
  return (
    <>
      <div className="card w-full h-[24rem] bg-base-100 shadow-xl">
        <div className="carousel w-full">
          {data.length === 0 && isLoaded === false
            ? "Data sedang dimuat"
            : data.map((data, key) => {
                return (
                  <div
                    key={key}
                    id={`item${++key}`}
                    className="carousel-item w-full card"
                  >
                    <img
                      src={data.file_gambar}
                      className="card w-full h-full"
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
