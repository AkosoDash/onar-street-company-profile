import Image from "next/image";
import CarouselComponent from "../../components/carousel";
import CardStoreComponent from "../../components/card_store";
import NavbarComponent from "../../components/navbar";


export default function Store() {
  return (
    <>
      <NavbarComponent />
      <div className="container p-4">
        <CarouselComponent />
      </div>
      <div className="container p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        
      <CardStoreComponent />
      <CardStoreComponent />
      <CardStoreComponent />
      <CardStoreComponent />
      </div>
    </>
  );
}
