import './product-card.scss';

export const ProductCard = ({ obj }) => {
  const { title, desc, img, time } = obj;
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div>
        <p className="h3">{title}</p>
        <p>{desc}</p>
        <time dateTime="2023-08-10">{time}</time>
      </div>
    </div>
  );
};
