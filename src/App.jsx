import React, { useState } from 'react';
import './App.css';
import darkLogo from './assets/Vector.svg';
import lightLogo from './assets/Vector (1).svg';
import mainImg from './assets/Group 148.svg';
import jsLogo from './assets/Ellipse 2.png';
import reactLogo from './assets/Ellipse 2 (1).png';
import angularLogo from './assets/Ellipse 2 (2).png';
import vueLogo from './assets/Ellipse 2 (3).png';
import facebookLogo from './assets/g12.svg';
import linkdinLogo from './assets/Path 2520.svg';
import instagramLogo from './assets/instargram.com - png.svg';
import whatsappLogo from './assets/WhatsApp Inc. - png 0.svg';
import twiterLogo from './assets/white_background.svg';

function App() {
  const [icon, setIcon] = useState(true);
  const [iconDarkmode, setIconDarkmode] = useState('./assets/Vector.png');
  const [style, setStyle] = useState('dark');

  const handleClick = () => {
    if (icon) {
      setIconDarkmode(darkLogo);
      setStyle('dark');
    } else {
      setIconDarkmode(lightLogo);
      setStyle('light');
    }
    setIcon(!icon);
  };
  console.log(style);
  return (
    <>
      <div className='main_container'>
        <div className='head_container'>
          <div className={style}>
            <div className='nav_bar'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Content</li>
              </ul>
            </div>
            <div className='icon'>
              <img onClick={handleClick} src={iconDarkmode} alt='icon' />
            </div>
          </div>
        </div>
        <div className={`main_${style}`}>
          <div className={`section_${style}`}>
            <div>
              <h1>Hi, I am Chukwukwe Chisom</h1>
              <p>Frontend Developer</p>
              <button>Download CV</button>
              <div className='icons_container'>
                <img src={twiterLogo} alt='twiter' />
                <img src={whatsappLogo} alt='whatsapp' />
                <img src={facebookLogo} alt='facebook' />
                <img src={instagramLogo} alt='instagram' />
                <img src={linkdinLogo} alt='linkdin' />
              </div>
            </div>
            <div>
              <img src={mainImg} alt='main-img' />
            </div>
          </div>
        </div>
        <div className={`footer_${style}`}>
          <div className='footer_container'>
            <div>
              <button>
                <img src={jsLogo} alt='js' />
                Java Script
              </button>
            </div>
            <div>
              {' '}
              <button>
                <img src={reactLogo} alt='react' />
                React
              </button>
            </div>
            <div>
              {' '}
              <button>
                <img src={angularLogo} alt='angular' />
                Angular Js
              </button>
            </div>
            <div>
              {' '}
              <button>
                <img src={vueLogo} alt='vue' />
                Vue js
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
