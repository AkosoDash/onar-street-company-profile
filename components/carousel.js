// import {} from "daisyui";
const CarouselComponent = ({ data, isLoaded }) => {
  console.log({ data: data });
  return (
    <>
      <div className="card w-full h-1/2 bg-base-100 shadow-xl lg:w-1/2 lg:content-center">
        <div className="carousel w-full h-1/4">
          {data.length === 0 && isLoaded === false
            ? "Data sedang dimuat"
            : data.map((data, key) => {
                return (
                  <div
                    key={key}
                    id={`item${++key}`}
                    className="carousel-item w-full card h-full"
                  >
                  <a href={data.link}>
                    <img
                      src={data.file_gambar}
                      className="card w-full h-full"
                    />
                  </a>

                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
