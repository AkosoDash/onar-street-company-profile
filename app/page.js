"use client";
import NavbarComponent from "../components/navbar";
import MainContainer from "../components/mainContainer";
import HFullContainer from "../components/HFullContainer";
import datas from "../datas/navigation.json";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const articles = [
    {
      title: "Sepatu Baru Part 1",
      description:
        "Tak hanya itu, sepatu ini tidak gentar menghadapi segala cuaca, memberikan perlindungan optimal dan ketangguhan saat Anda menaklukkan rintangan. Dengan sentuhan gaya modern yang elegan, sepatu ini bukan hanya alat olahraga, tapi juga aksesori penunjang penampilan Anda di setiap kesempatan.",
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
        "Tak hanya itu, sepatu ini tidak gentar menghadapi segala cuaca, memberikan perlindungan optimal dan ketangguhan saat Anda menaklukkan rintangan. Dengan sentuhan gaya modern yang elegan, sepatu ini bukan hanya alat olahraga, tapi juga aksesori penunjang penampilan Anda di setiap kesempatan.",
      asset_url: "/assets/images/shoes/sepatu-olahraga-4.jpeg",
    },
  ];
  const [articleSelected, setArticleSelected] = useState(0);
  const articleShow = articles[articleSelected];
  const marketPlaceData = datas.find((data) => data.nav_role === "marketplace");
  return (
    <>
      <NavbarComponent />
      <MainContainer bgColor={"dark"}>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Elegan, Nyaman, Berkualitas</h1>
            <p className="mb-5">Selamat datang di Onar Street, tempatnya gaya dan kenyamanan. Temukan koleksi terbaik kami yang menggabungkan desain modern dengan kualitas tinggi. Setiap langkah Anda adalah pernyataan fashion yang tak terlupakan. Jelajahi sekarang untuk menemukan gaya sejati Anda.</p>
            <Link
              href={marketPlaceData.direct_url}
            >
              <h4 className="btn btn-black">
                Belanja Sekarang!
              </h4>
            </Link>
          </div>
        </div>
      </div>
      </MainContainer>
      <HFullContainer bgColor={"white"}>
        <div className="flex flex-col justify-around items-center md:px-8 lg:px-8">
          <h1 className="text-black text-4xl font-black uppercase antialiased text-center mb-4 md:text-4xl mt-10">
            Penjualan Terbaik
          </h1>
          <span className="text-xl text-black text-center w-full md:w-1/2 mb-8 md:px-6 md:text-sm">
            Berikut merupakan beberapa produk terlaris kami.
          </span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-6 ">
            {/* Produk 1 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover"
                  src="/assets/images/shoes/sandal-pria-1.jpeg"
                  alt="Foto Sandal Pria"
                />
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">Sandal Slide Slop Pria - Hitam </h1>
                <h3 className="text-black">Rp. 88.500,-</h3>
              </div>
            </div>

            {/* Produk 2 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover"
                  src="/assets/images/shoes/sepatu-anak-2.jpeg"
                  alt="Foto Sepatu Anak"
                />
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">Sepatu Anak-Anak Perempuan</h1>
                <h3 className="text-black">Rp. 84.500,-</h3>
              </div>
            </div>

            {/* Produk 3 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover"
                  src="/assets/images/shoes/sepatu-olahraga-2.jpeg"
                  alt="Foto sepatu olahraga wanita"
                />
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">Sepatu Voli Wanita</h1>
                <h3 className="text-black">Rp. 118.500,-</h3>
              </div>
            </div>

            {/* Produk 3 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover"
                  src="/assets/images/shoes/sepatu-olahraga-2.jpeg"
                  alt="Foto sepatu olahraga wanita"
                />
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">Sepatu Voli Wanita</h1>
                <h3 className="text-black md:text-xs">Rp. 118.500,-</h3>
              </div>
            </div>
          </div>
        </div>
      </HFullContainer>

      {/* <MainContainer bgColor={"dark"}>
        <div className="flex flex-col h-screen justify-center gap-16 items-center">
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
      </MainContainer> */}
<HFullContainer bgColor={"dark"}>
      <div className="flex flex-col justify-around items-center md:px-0 lg:px-0">
          <h1 className="text-white text-4xl font-black uppercase antialiased text-center mb-4 md:text-4xl mt-10">
            Artikel Lainnya
          </h1>
          <div class="grid gap-4 grid-cols-1">
            <div>
              <div className="card lg:card-side bg-base-100 shadow-xl h-full mx-8">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" className="w-full"/></figure>
                <div className="card-body w-auto lg:w-96">
                  <h2 className="card-title">{articleShow.title}</h2>
                  <p className="max-md:text-sm">{articleShow.description}.</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={"/"}
                    >
                      <button className="btn btn-neutral">Baca Selengkapnya</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen flex flex-row items-center justify-center mt-8 mb-8">
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
      
      </HFullContainer>
    </>
  );
}
