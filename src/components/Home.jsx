import React from "react";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import CarouselProducts from '../components/Carousel'

export default function Home() {
  return (
    <div className="home">
        <Header/>
        <CarouselProducts/>
        <div className='body-home'>
          <Sidebar/>
          <ProductList/>
        </div>
        <Footer/>
    </div>
  );
}

