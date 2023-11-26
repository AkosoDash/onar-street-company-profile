import CarouselComponent from "../../components/carousel";
import CardStoreComponent from "../../components/card_store";
import NavbarComponent from "../../components/navbar";
import datas from "../../datas/marketplace.json";

export default function Store() {
  return (
    <>
      <NavbarComponent />
      <div className="container p-4 mx-auto">
        <CarouselComponent />
      </div>
      <div className="container p-4 mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {datas.map((data, index) => {
          return (
            <CardStoreComponent
              name={data.name}
              url_link={data.direct_url}
              img_link={data.image_url}
            />
          );
        })}
      </div>
    </>
  );
}
