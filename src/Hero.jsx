import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaSearch } from "react-icons/fa";
import 'swiper/css';
import './index.css';

function Hero() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    { label: "Комплектующие", content: "Komplekt kompyuter qismlari haqida ma'lumot" },
    { label: "Сетевое оборудование", content: "Router, Switch, WiFi haqida" },
    { label: "Периферия и аксессуары", content: "Klaviatura, sichqoncha, USB, quloqchin" },
    { label: "Мониторы и моноблоки", content: "Monitorlar, all-in-one PC lar" },
    { label: "Геймерская мебель", content: "Gaming stollar, stullar, LED polkalar" },
    { label: "Промо, Акции и Скидки", content: "Chegirmalar, aksiyalar va maxsus takliflar" },
    { label: "Новинки", content: "Yangi kelgan mahsulotlar" },
  ];

  return (
    <main>
      <div className="container">
        <div className="left">
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label} <MdNavigateNext />
              </li>
            ))}
          </ul>
        </div>

        <div className="right">
          {hoveredItem !== null ? (
            <div className="hover-content">
              <h3>{items[hoveredItem].label}</h3>
              <p>{items[hoveredItem].content}</p>
            </div>
          ) : (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              className="custom-swiper"
            >
              <SwiperSlide>
                <div className="slide-box">🎮 DeepCool Series LP - Matritsaga xush kelibsiz!</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-box">🔥 Yangi kelgan GeForce RTX 4060 - stokda!</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-box">🪑 Gaming kreslolar -40% chegirma bilan!</div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </main>
  );
}

export default Hero;
