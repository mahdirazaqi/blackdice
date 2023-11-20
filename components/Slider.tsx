"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "@/lib/types/product";
import Card from "./Card";

interface Props {
  className?: string;
  products: Product[];
}

const Slider = ({ className, products }: Props) => {
  return (
    <Swiper spaceBetween={16} slidesPerView={4.5} className={className}>
      {products.map((product, index) => (
        <SwiperSlide key={index} className="py-3">
          <Card product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
