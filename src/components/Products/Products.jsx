import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

export const Products = () => {
  return (
    <section className="products py-5">
      <div className="container">
        <div className="product__inner">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
