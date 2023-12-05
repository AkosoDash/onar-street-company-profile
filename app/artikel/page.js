"use client";
import CarouselComponent from "../../components/carousel";
import CardStoreComponent from "../../components/card_store";
import NavbarBlackComponent from "../../components/navbar-black";
import datas from "../../datas/marketplace.json";
import MainContainer from "../../components/mainContainer";
import { useState } from "react";
import Link from "next/link";
import HFullContainer from "@/components/HFullContainer";

export default function Store() {
    const articles = [
        {
          title: "Sepatu Baru Part 1",
          description:
            "Temukan keseimbangan sempurna antara kenyamanan dan performa dengan Sepatu Olahraga Pria kami yang inovatif. Setiap langkah menjadi lebih bermakna dengan teknologi canggih yang memaksimalkan respons dan daya tahan, memberikan Anda pengalaman olahraga yang luar biasa. Desain ergonomis yang ringan dan fleksibel memberikan kenyamanan tanpa batas, sementara bantalan yang tepat mendukung kaki Anda sepanjang hari.",
          asset_url: "/assets/images/shoes/sepatu-olahraga-2.jpeg",
        },
        {
          title: "Sepatu Baru Part 2",
          description:
            "Tak hanya itu, sepatu ini tidak gentar menghadapi segala cuaca, memberikan perlindungan optimal dan ketangguhan saat Anda menaklukkan rintangan. Dengan sentuhan gaya modern yang elegan, sepatu ini bukan hanya alat olahraga, tapi juga aksesori penunjang penampilan Anda di setiap kesempatan.",
          asset_url: "/assets/images/shoes/sepatu-olahraga-3.jpeg",
        },
        {
          title: "Sepatu Baru Part 3",
          description:
            "Sekarang saatnya untuk mengangkat level olahraga Anda. Dapatkan Sepatu Olahraga Pria ini dan nikmati perpaduan sempurna antara fungsionalitas tinggi dan gaya yang tak tertandingi. Persiapkan diri Anda untuk menjelajahi dunia dengan keyakinan yang baru dan tak terbatas. Beli sekarang dan mulailah perjalanan menuju keseimbangan dan prestasi puncak!",
          asset_url: "/assets/images/shoes/sepatu-olahraga-4.jpeg",
        },
      ];
      const [articleSelected, setArticleSelected] = useState(0);
      const articleShow = articles[articleSelected];
  return (
    <>
      <NavbarBlackComponent />
      <HFullContainer bgColor={"white"}>
        <div className="flex w-screen flex-col justify-around items-center mt-32 mb-0">
          <h1 className="text-black text-4xl font-black uppercase antialiased text-center">
            New Artikel Onar Street telah Diluncurkan
          </h1>
          <span className=" text-xl text-neutral-400 mt-4 text-center w-1/2">
            New Shoes
          </span>
          <div className="flex flex-row justify-center gap-24 items-center w-screen">
            <div className="w-full h-full rounded-xl flex flex-col items-center justify-around p-8">
              <img
                className="w-96 h-full rounded-xl shadow-2xl"
                src="/assets/images/shoes/sandal-wanita-2.jpeg"
                alt="Foto Sandal Pria"
              />
            </div>
          </div>
        </div>
      </HFullContainer >
      <div className="static p-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <HFullContainer>
      <div className="flex flex-col justify-around items-center md:px-8 lg:px-8">
          <h1 className="text-black text-4xl font-black uppercase antialiased text-center mb-4 md:text-4xl mt-10">
            Artikel Lainnya
          </h1>
          <div class="grid gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <div>
              <div className="card lg:card-side bg-base-100 shadow-xl m-8">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card lg:card-side bg-base-100 shadow-xl m-8">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HFullContainer>
    </>
  );
}
