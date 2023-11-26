import Link from "next/link";

// import {} from "daisyui";
const CardStoreComponent = ({ name, url_link, img_link }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <figure>
        <a href={`https://${url_link}`} target="_blank">
          <img src={img_link} alt={name} className="bg-base-300 rounded-xl" />
        </a>
      </figure>
    </div>
  );
};

export default CardStoreComponent;
