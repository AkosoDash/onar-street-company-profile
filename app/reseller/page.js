"use client";
import CarouselComponent from "../../components/carousel";
import CardStoreComponent from "../../components/card_store";
import NavbarBlackComponent from "../../components/navbar-black";
import datas from "../../datas/marketplace.json";
import HFullContainer from "../../components/HFullContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Store() {
  return (
    <>
      <NavbarBlackComponent />
      <HFullContainer>
      <button
            className="fixed bottom-2 z-20 right-4 bg-success text-white px-6 py-3 rounded-full flex flex-row items-center justify-center shadow-xl border border-4 border-white"
          >
            <FontAwesomeIcon icon={faPhone} color="#fff" size="lg" />
            <span className="text-white font-bold ml-2">
              Hubungi Kami
            </span>
          </button>
      <div className="hero min-h-screen bg-base-200 bg-white mb-10">
        <div className="hero-content flex-col lg:flex-row  mt-20">
            <img src="/assets/logo/logo_black.jpg" className="w-72" />
            <div>
            <h1 className="text-5xl font-bold">Mari bergabung bersama kami!</h1>
            <p className="py-6">Ingin mendapatkan penghasilan tambahan dengan cara yang mudah dan menyenangkan? Jadi reseller kami sekarang! Produk berkualitas tinggi dan support penuh menanti Anda.</p>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
                Nikmati Keuntungan Ekstra
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Bergabunglah sebagai reseller kami dan nikmati penghasilan tambahan dengan keuntungan yang menggiurkan setiap penjualan!</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
                Harga Spesial Reseller
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Dapatkan harga khusus reseller yang menarik. Jual lebih banyak, dan raih keuntungan maksimal dengan margin yang fantastis!</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
                Dukungan Penuh
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Kami memberikan dukungan penuh kepada reseller kami, mulai dari materi pemasaran hingga bantuan teknis. Bersama, kita bisa meraih kesuksesan!</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
                Produk Berkualitas Tinggi
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Jadilah bagian dari tim reseller kami dan tawarkan produk berkualitas tinggi kepada pelanggan. Keunggulan produk kami akan menjadi keunggulan Anda!</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
              Fleksibilitas Waktu
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Bergabung sebagai reseller memberikan Anda fleksibilitas waktu untuk mengatur bisnis sesuai kebutuhan Anda. Jadilah bos untuk diri sendiri!</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
                Akses ke Promo dan Diskon
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Dapatkan akses eksklusif ke promo dan diskon khusus reseller. Tingkatkan penjualan Anda dan nikmati manfaatnya!</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
                Komunitas Reseller yang Solid
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Bergabunglah dengan komunitas reseller kami yang solid. Bertukar pengalaman, belajar bersama, dan bangun jaringan bisnis yang kuat!</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-black text-neutral-content peer-checked:bg-black peer-checked:text-black-content">
                Pilihan Produk Variatif
              </div>
              <div className="collapse-content bg-black text-white-content peer-checked:bg-black peer-checked:text-neutral-content"> 
                <p>Sebagai reseller, Anda akan memiliki akses ke beragam produk. Tawarkan variasi kepada pelanggan Anda dan perluas pangsa pasar Anda.</p>
              </div>
            </div>
            </div>
        </div>
      </div>
      </HFullContainer>

    </>
  );
}
