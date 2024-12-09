import React from "react";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={s.section}>
        <div className="container">
          <div className={s.papawrappera}>
          <div className={s.wrapper}>
            <h1>
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your
              sense of style.
            </p>
            <button>Sop Now</button>
            <div className={s.card}>
            <div>
            <h2>200+</h2>
            <p className={s.pod}>International Brands</p>
            </div>
             <div>
             <h2>2,000+</h2>
             <p className={s.pod}>High-Quality Products</p>
             </div>
             <div>
             <h2>30,000+</h2>
             <p className={s.pod}>Happy Customers</p>
             </div>
             
            </div>
          </div>
          <img src="./hero-img.png" alt="" />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Hero;
