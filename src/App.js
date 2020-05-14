import React, { useEffect } from 'react';
import letters from './letters.json';
import Swiper from 'swiper';
import './App.css';
import groupImg from './pictures/group.png';

const images = require.context('./pictures', true);

function App() {
  useEffect(() => {
    new Swiper ('.swiper-container', {
      speed: 700,
      spaceBetween: 100,
      // autoplay: {
      //   delay: 5000,
      // }
    });
  }, []);
  return (
    <div className="swiper-container">
        <div className="swiper-wrapper">
        <div
          className="swiper-slide first"
          style={{ backgroundImage: `url(${groupImg})`}}
        >
          <p>
            여기까지 오게 된 것은 모두 켄님 덕분입니다. Special thanks to ken.<br />
            2020.01.06 ~ 05.09 바닐라코딩 7기, 스승의 날
          </p>
        </div>
          {
            letters.map(letter => {
              const { name, title, text, picture } = letter;
              const img = images('./' + picture);
              return (
                <div className="swiper-slide" key={name}>
                  <div className="content-wrap">
                    <div className="img-area">
                      <img src={img} alt={name}/>
                    </div>
                    <div className="text-area">
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
      </div>
    </div>
  );
}

export default App;
