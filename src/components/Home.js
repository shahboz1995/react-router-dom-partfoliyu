import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <header className="header">
      <div className="sacion">
        <div className="elon">
          <div className="elon1">
            <img src="https://w7.pngwing.com/pngs/238/988/png-transparent-the-golden-festival-circle-of-eid-al-fitr-eid-al-adha.png" className="preson" alt="doira" />
            <h2>My Portfolio</h2>
          </div>
        </div>
        <div className="crativ">
          <h1>
            Be Creative, <br />
            Be Impressive
          </h1>
          <p className="crative">Creative Designer and Social Media Officer</p>
          <p className="have">
            I have to be able to communicate ideas to a wide range of
            stakeholders in both my own voice and in Sprout's. Communicating on
            social.
          </p>
        </div>
        <div className="partfoliyo">
          <button className="btn-portfoliyo">Portfolio</button>
          <div className="curric">Curriculum Vitae</div>
        </div>
      </div>
      <div className="elonMack">
        <main className="main">
          <div className="home-a">            
            <Link to="/">Home</Link>        
            <Link to="https://aliyevshaxboz.netlify.app">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="https://www.linkedin.com/in/shakboz-aliyev-a9b1a9232/">Contact</Link>            
          </div>
          <div className="icon"></div>
        </main>
        <div className="elonImg">
          <div className="imgRomka">
            <img
              src="https://avatars.githubusercontent.com/u/96514603?s=400&u=a0fa304abca2af6f10bc27e4f0b2494bc67c550e&v=4"
              alt="no img"
              className="person-img"
            />
            <h3 className="person1">Shakhboz Aliyev</h3>
            <p className="founder">Founder of PT. CryptoCoin Price Control</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
