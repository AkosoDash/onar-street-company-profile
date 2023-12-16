import Link from "next/link";

const CardArtikelComponent = ({ data, isLoaded }) => {
  return (
    <>
      {data.length === 0 && isLoaded === false
      ? "Data sedang dimuat"
      : data.map((data, key) => {
          return (
                  <div className="mb-8">
                  <div className="card card-compact w-full bg-base-100 shadow-xl" key={key} id={`item${++key}`}>
                    <figure><img className="object-contain h-48 w-96" src={data.file_gambar} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{data.judul}</h2>
                      <p className="line-clamp-3">{data.isi}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Baca selengkapnya</button>
                      </div>
                    </div>
                  </div>
                  </div>
    );
  })}
    </>
  );
};

export default CardArtikelComponent;
