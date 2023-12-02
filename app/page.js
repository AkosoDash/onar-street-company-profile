"use client";
import NavbarComponent from "../components/navbar";
import MainContainer from "../components/mainContainer";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
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
      <MainContainer bgColor={"dark"}>
        <h1 className="text-white">Selamat Sore Sobat Legend</h1>
      </MainContainer>
      <MainContainer bgColor={"white"}>
        <div className="flex w-screen flex-col justify-around items-center">
          <h1 className="text-black text-4xl font-black uppercase antialiased ">
            Penjualan Terbaik
          </h1>
          <span className=" text-xl text-black mt-4 text-center w-1/2">
            Ini olang punya produk mantap jiwa looo, buruan diorder coy!!!
          </span>
          <div className="flex flex-row justify-center gap-24 items-center w-screen mt-16">
            <div className="w-72 h-96 rounded-xl flex flex-col items-center justify-around">
              <img
                className="w-72 h-72 rounded-xl shadow-2xl"
                src="/assets/images/shoes/sandal-pria-1.jpeg"
                alt="Foto Sandal Pria"
              />
              <div className="h-16 bg-white w-72 flex flex-col justify-center items-center shadow-2xl rounded-xl">
                <h1 className="text-black font-black">Sandal Pria Mantap</h1>
                <h3 className="text-black">Rp. 500.000,-</h3>
              </div>
            </div>
            <div className="w-72 h-96 rounded-xl flex flex-col items-center justify-around">
              <img
                className="w-72 h-72 rounded-xl shadow-2xl"
                src="/assets/images/shoes/sepatu-olahraga-1.jpeg"
                alt="Foto Sepatu Olahraga"
              />
              <div className="h-16 bg-white w-72 flex flex-col justify-center items-center shadow-2xl rounded-xl">
                <h1 className="text-black font-black">Sepatu Running Ondewe</h1>
                <h3 className="text-black">Rp. 500.000,-</h3>
              </div>
            </div>
            <div className="w-72 h-96 rounded-xl flex flex-col items-center justify-around">
              <img
                className="w-72 h-72 rounded-xl shadow-2xl"
                src="/assets/images/shoes/sandal-wanita-2.jpeg"
                alt="Foto Sandal Pria"
              />
              <div className="h-16 bg-white w-72 flex flex-col justify-center items-center shadow-2xl rounded-xl">
                <h1 className="text-black font-black">Sandal Wanita Riyadin</h1>
                <h3 className="text-black">Rp. 500.000,-</h3>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
      <MainContainer bgColor={"dark"}>
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
      </MainContainer>
    </>
  );
}
