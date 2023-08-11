import CardImg from '../../assets/images/dala.jpg';
import './product-card.scss';

export const ProductCard = ({ obj }) => {
  return (
    <div className="product-card">
      <img src={CardImg} alt="dala" />
      <div>
        <p className="h3">Poliz ekinlari.</p>
        <p>Bu bog'da olma, makkajo'xori va bodring yetishtiriladi...</p>
        <time dateTime='2023-08-10' >o'zgartirildi 08-10 15:34</time>
      </div>
    </div>
  );
};
