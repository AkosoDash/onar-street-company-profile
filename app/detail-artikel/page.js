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
      <HFullContainer>
      <footer className="footer items-center p-4 bg-black text-neutral-content">
      <aside className="items-center grid-flow-col">
              <img
                  src='assets/logo/logo-black-2.png'
                  alt='ok'
                  className="rounded-xl w-8"
                />
                <img
                  src="/assets/logo/logo-with-text.png"
                  alt='ok'
                  className="ml-2 w-16 hidden lg:block md:block"
                />
        <p className="ml-2">Copyright © 2023 - All right reserved</p>
      </aside> 
      <nav className="grid-flow-col gap-4 max-md:place-self-center max-lg:justify-self-end lg:justify-self-end max-sm:place-self-center">
        <Link href={"https://www.instagram.com/onar_street/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
        </Link>
        <Link href={"https://www.tiktok.com/@onar_street?_t=8hxllrWXS4I&_r=1"} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
        </svg>
        </Link>
      </nav>
      </footer>
      </HFullContainer>
    </>
  );
}