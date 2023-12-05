import CarouselComponent from "../../components/carousel";
import CardStoreComponent from "../../components/card_store";
import NavbarBlackComponent from "../../components/navbar-black";
import HFullContainer from "../../components/HFullContainer";
import datas from "../../datas/marketplace.json";

export default function Store() {
  return (
    <>
      <NavbarBlackComponent/>
      <HFullContainer>
        <div className="mt-24 px-4 max-md:mt-24">
          <CarouselComponent />
        </div>
      </HFullContainer>
      <div className="container p-4 mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {datas.map((data, key) => {
          return (
            <CardStoreComponent
              uniqueKey={key}
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
