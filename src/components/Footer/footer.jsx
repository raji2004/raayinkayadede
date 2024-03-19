import React from "react";
import Style from "./footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
// import { Hashlink as Link } from "react-router-dom";
import Icon1 from "../../assets/icons/pngicons/Group 3.png";
import Icon2 from "../../assets/icons/pngicons/Group 4.png";
import Icon3 from "../../assets/icons/pngicons/Group 5.png";

export const Footer = () => {
  return (
    <>
      <footer className={Style.footer}>
        <div className={Style.main}>
          <div className={Style.container}>
            <div className={Style.logo}>
              <h1 style={{ color: "#ff1100" }}>RAAYIN'KAYADEDE</h1>
              <h1 style={{ color: "#ffffff" }}>NIGERIAN LIMITED</h1>
              <h2 style={{ color: "#ffffff" }}>
                <span style={{ color: "#ffffff" }}>Rc:</span>1829733
              </h2>
            </div>
            <div className={Style.text}>
              <p>
                RAAYIN’KAYADEDE NIGERIA LIMITED is a construction company that
                is associated and involved in building construction.
              </p>
            </div>

            {/* <div>
        <h1 style={{color:"#fff", fontSize:200}}><i class="fa-solid fa-draw-polygon"></i></h1>
        </div> */}
          </div>

          <div className={Style.container}>
            <h1 className={Style.links}>Company</h1>
            <Link smooth to="#projects">
              <h2 className={Style.links}>Projects</h2>
            </Link>
            <Link smooth to="#about-us">
              <h2 className={Style.links}>About us</h2>
            </Link>
            <Link smooth to="#services">
              <h2 className={Style.links}>Services</h2>
            </Link>
          </div>
          <div className={Style.container}>
            <h1 className={Style.resource}>Resources</h1>

            <h2 className={Style.resource}>
              Want to make an inquiry.. <br />
              Reach us on these platforms
            </h2>

            <div className={Style.icons}>
              <div>
                <img src={Icon1} alt="" />
              </div>
              <div>
                <img src={Icon2} alt="" />
              </div>
              <div>
                <img src={Icon3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.copyright}>
          <p>Copyright &copy; 2023 Powered By ProtonTech Technologies</p>
        </div>
      </footer>
    </>
  );
};

export const FooterMobile = () => {
  return (
      <>
          <footer className="bg-black text-white py-8 px-6">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/3 flex flex-col items-center">
                      <div className="logo">
                          <h1 className="text-red-500 text-2xl font-bold">RAAYIN'KAYADEDE</h1>
                          <h1 className="text-white text-2xl font-bold">NIGERIAN LIMITED</h1>
                          <h2 className="text-white">
                              <span className="text-white">Rc:</span>1829733
                          </h2>
                      </div>
                      <div className=" mt-6">
                          <p>
                              RAAYIN’KAYADEDE NIGERIA LIMITED is a construction company that is associated and involved in building construction.
                          </p>
                      </div>
                  </div>

                  <div className="mt-8 md:mt-0 w-full md:w-1/3 flex flex-col items-center">
                      <h1 className="text-2xl font-bold mb-4">Company</h1>
                      <h2 className="text-lg mb-2 hover:text-red-600">Projects</h2>
                      <h2 className="text-lg mb-2 hover:text-red-600">About us</h2>
                      <h2 className="text-lg mb-2 hover:text-red-600">Services</h2>
                  </div>

                  <div className="mt-8 md:mt-0 w-full md:w-1/3 flex flex-col items-center">
                      <h1 className="text-2xl font-bold mb-4">Resources</h1>
                      <h2 className="text-lg mb-2">
                          Want to make an inquiry.. 
                          Reach us on these platforms
                      </h2>
                      <div className="flex gap-4">
                          <div>
                              <img src={Icon1} alt="" />
                          </div>
                          <div>
                              <img src={Icon2} alt="" />
                          </div>
                          <div>
                              <img src={Icon3} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="mt-8 text-center">
                  <p>Copyright &copy; 2023 Powered By ProtonTech Technologies</p>
              </div>
          </footer>
      </>
  );
};
