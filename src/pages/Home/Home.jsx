import React from 'react';
import { Blog } from '../../components/Blog/Blog';
import { Hero } from '../../components/Hero/Hero';
import { Products } from '../../components/Products/Products';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Blog />
    </main>
  );
};
