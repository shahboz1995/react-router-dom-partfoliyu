import React from 'react'
import './project.css'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="div">
      <div className="projects">
        <h1>Projects</h1>
      </div>
      <div className="imge">
        <div className="carts">
          <Link to="https://github.com/shahboz1995/React-Menu">
            <div className="projectImg">
              <div className="cartImg">
                <img
                  className="cartItemsImg"
                  src="https://s-globus.ru/public/storage/images/actionsite/obpit/b30d546d519baf33054194bfaf7e5803.jpg"
                />
              </div>
              <div className="menyu">
                <h4>Menyu</h4>
              </div>
            </div>
          </Link>
          <Link to="https://github.com/shahboz1995/react-tootile">
            <div className="projectImg">
              <div className="cartImg">
                <img
                  className="cartItemsImg"
                  src="http://zornet.ru/_ld/103/08806893.jpg"
                />
              </div>
              <div className="menyu">
                <h4>Slayder</h4>
              </div>
            </div>
          </Link>
          <Link to="https://github.com/shahboz1995/tours-react">
            <div className="projectImg">
              <div className="cartImg">
                <img
                  className="cartItemsImg"
                  src="https://sportishka.com/uploads/posts/2022-11/1667558928_24-sportishka-com-p-parus-dubai-plyazh-krasivo-27.jpg"
                />
              </div>
              <div className="menyu">
                <h4>Tours</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="carts">
          <Link to="https://github.com/shahboz1995/calculator-react">
            <div className="projectImg">
              <div className="cartImg">
                <img
                  className="cartItemsImg"
                  src="https://img2.goodfon.ru/original/2560x1440/b/ff/abstact-colors-color-explosion-sky-background.jpg"
                />
              </div>
              <div className="menyu">
                <h4>Color genirator</h4>
              </div>
            </div>
          </Link>
          <Link to="https://github.com/shahboz1995/MucikJavasickrip">
            <div className="projectImg">
              <div className="cartImg">
                <img
                  className="cartItemsImg"
                  src="https://i.pinimg.com/originals/f5/e1/46/f5e14685b8570848e4657fb6f23874c3.jpg"
                />
              </div>
              <div className="menyu">
                <h4>Musik</h4>
              </div>
            </div>
          </Link>
          <Link to="https://github.com/shahboz1995/react-lorem">
            <div className="projectImg">
              <div className="cartImg">
                <img
                  className="cartItemsImg"
                  src="https://yt3.ggpht.com/ytc/AKedOLT1ooAveAiLDSsgqxfLSu8ayWOw3scDmmf8RPrn=s900-c-k-c0x00ffffff-no-rj"
                />
              </div>
              <div className="menyu">
                <h4>Lorem</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
