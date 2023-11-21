"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "@/lib/types/product";
import Card from "./Card";

interface Props {
  className?: string;
  products: Product[];
  xxs?: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

const Slider = ({
  className,
  products,
  xxs = 1.5,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: Props) => {
  return (
    <Swiper
      className={className}
      spaceBetween={16}
      slidesPerView={xxs}
      breakpoints={{
        460: { slidesPerView: xs },
        640: { slidesPerView: sm },
        768: { slidesPerView: md },
        1024: { slidesPerView: lg },
        1280: { slidesPerView: xl },
        1536: { slidesPerView: xxl },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} className="py-3">
          <Card product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
