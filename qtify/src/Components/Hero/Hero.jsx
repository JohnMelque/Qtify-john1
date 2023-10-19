import React from 'react'
import styles from './Hero.module.css'
import headphone from '../../assest/vibrating-headphone 1.png'

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h3>100 Thousand Songs, ad-free</h3>
        <h3>Over thousands podcast episodes</h3>
      </div>
      <div>
        <img src={headphone} alt="hero-HeadPhone" width="212px" />
      </div>

      
    </div>
  )
}
