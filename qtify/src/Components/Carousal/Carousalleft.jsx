import React, { useEffect, useState } from 'react'
import { ReactComponent as LeftArrow } from '../../assest/left.svg'
import { useSwiper } from 'swiper/react'
import styles from "./Carousal.module.css"
const Carousalleft = () => {
  const swiper = useSwiper();
  const [isBeginning, setISBeginning] = useState(swiper.isBeginning);
  
  useEffect(() => {
    swiper.on("slideChange", function () {
      setISBeginning(swiper.isBeginning);
    })
  },[isBeginning,swiper,swiper.isBeginning])
  return (
    <div className={styles.leftNavi}>
      {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default Carousalleft