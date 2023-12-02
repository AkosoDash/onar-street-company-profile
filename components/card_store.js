import Link from "next/link";

const CardStoreComponent = ({ uniqueKey, name, url_link, img_link }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <a key={uniqueKey} href={`https://${url_link}`} target="_blank">
        <img src={img_link} alt={name} className=" rounded-xl" />
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        </div>
      </a>
    </div>
  );
};

export default CardStoreComponent;
