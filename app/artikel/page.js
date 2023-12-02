"use client";
import CarouselComponent from "../../components/carousel";
import CardStoreComponent from "../../components/card_store";
import NavbarComponent from "../../components/navbar";
import datas from "../../datas/marketplace.json";
import MainContainer from "../../components/mainContainer";
import { useState } from "react";
import Link from "next/link";

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
      <NavbarComponent />
      <MainContainer bgColor={"white"}>
        <div className="flex w-screen flex-col justify-around items-center mt-18 mb-0">
          <h1 className="text-black text-4xl font-black uppercase antialiased ">
            New Artikel Onar Street telah Diluncurkan
          </h1>
          <span className=" text-xl text-neutral-400 mt-4 text-center w-1/2">
            New Shoes
          </span>
          <div className="flex flex-row justify-center gap-24 items-center w-screen mt-16">
            <div className="w-96 h-96 rounded-xl flex flex-col items-center justify-around">
              <img
                className="w-96 h-96 rounded-xl shadow-2xl"
                src="/assets/images/shoes/sandal-wanita-2.jpeg"
                alt="Foto Sandal Pria"
              />
            </div>
          </div>
        </div>
      </MainContainer >
      <div className="static p-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <MainContainer bgColor={"dark"}>
        <div className="flex flex-col h-screen justify-center gap-16 items-center">
        <h1 className="text-white text-4xl font-black uppercase antialiased ">
            Artikel Lainnya
        </h1>
          <div className="w-screen  h-3/6 flex flex-row items-end justify-end">
            <div className="flex flex-row justify-center gap-16 items-center">
              <img
                className="w-96 h-96 bg-white duration-200"
                src={articleShow.asset_url}
              />
              <div className="flex w-1/2 flex-col justify-start items-start px-8">
                <span className="text-4xl text-white uppercase font-bold transition:all duration-200">
                  {articleShow.title}
                </span>
                <p className="text-white w-full my-4 transition:all duration-200">
                  {articleShow.description}
                </p>
                <Link
                  href={"/"}
                  className="bg-dark hover:bg-white border border-3 border-white px-8 py-2 rounded-md text-white hover:text-black duration-300"
                >
                  Baca Selengkapnya...
                </Link>
              </div>
            </div>
          </div>
          <div className="w-screen flex flex-row items-center justify-center">
            {articles.map((data, key) => {
              return (
                <button
                  key={key}
                  onClick={() => setArticleSelected(key)}
                  className={
                    articleSelected === key
                      ? "mx-2 px-4 py-2 rounded-md text-black font-semibold bg-white duration-200"
                      : "mx-2 px-4 py-2 rounded-md text-white font-semibold duration-200"
                  }
                >
                  {key + 1}
                </button>
              );
            })}
          </div>
        </div>
      </MainContainer>
    </>
  );
}
