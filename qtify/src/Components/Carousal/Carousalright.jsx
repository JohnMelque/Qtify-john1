import React, { useEffect, useState } from 'react'
import { ReactComponent as RightArrow } from '../../assest/right.svg'
import { useSwiper } from 'swiper/react'
import styles from "./Carousal.module.css"
const Carousalright = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    })
  },[isEnd,swiper,swiper.isEnd])
  return (
    <div className={styles.rightNavi}>
      {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default Carousalright