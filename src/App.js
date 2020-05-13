import React, { useEffect } from 'react';
import letters from './letters.json';
import Swiper from 'swiper';
import './App.css';

function App() {
  useEffect(() => {
    new Swiper ('.swiper-container', {
      speed: 700,
      spaceBetween: 100,
      autoplay: {
        delay: 5000,
      }
    });
  }, []);
  return (
    <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            letters.map(letter => {
              const { name, title, text, picture } = letter;
              return (
                <div className="swiper-slide" key={name}>
                  <div className="content-wrap">
                    <div className="img-area">
                      <img src={picture} alt={name}/>
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
