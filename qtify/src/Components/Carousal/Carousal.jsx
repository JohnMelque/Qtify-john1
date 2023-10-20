import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from "./Carousal.module.css"
import { Navigation } from "swiper/modules";
import Carousalright from './Carousalright';
import Carousalleft from './Carousalleft';
import 'swiper/css';

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0,null);
  }, [data]);
  return <></>
}

const Carousal = ({data,reactComponent}) => {
  return (
    <div className={styles.wrapper}>
      <Swiper style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove >
        <Controls data={data} />
        <Carousalright />
        <Carousalleft/>
        {
          data.map(item => (
            <SwiperSlide>{reactComponent(item)}</SwiperSlide>
          ))
        }
      </Swiper>
      
    </div>
  )
}

export default Carousal