import React from "react";
import Style from "./navigation.module.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "../../components";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export const Navigation = () => {
  return (
    <>
      <nav className={Style.nav}>
        <div className={Style.navcontainer}>
          <ul className={Style.navlinks}>
            <div className={Style.logo}>
              <Link>
                <h1 style={{ color: "#ff1100" }}>RAAYIN'KAYADEDE</h1>
                <h1 style={{ color: "#000000" }}>NIGERIAN LIMITED</h1>
                <h2 style={{ color: "#000000" }}>
                  <span style={{ color: "#ff1100" }}>Rc:</span>1829733
                </h2>
              </Link>
            </div>

            <div className={Style.links}>
              <li>
                {/* <a href="/">Home</a> */}
                <Link to={"/"}>
                  <Button text={"Home"} />
                </Link>
              </li>
              <li>
                {/* <a href="./about">About</a> */}
                <Link to={"/About"}>
                  <Button text={"About"} />
                </Link>
              </li>
              <li>
                {/* <a href="./contact">Contact</a> */}
                <Link to={"/Contact"}>
                  <Button text={"Contact"} />
                </Link>
              </li>
              {/* <label for="check" className="close-menu"><i class="fas fa-times" style={{color:"#000"}}></i></label> */}
            </div>
            {/* <label for="check" className="open-menu"><i class="fas fa-bars"></i></label> */}
          </ul>
        </div>
      </nav>
    </>
  );
};


export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden flex justify-between p-2 shadow-sm  bg-white">
      <div className={Style.logo}>
        <Link>
          <h1 style={{ color: "#ff1100" }}>RAAYIN'KAYADEDE</h1>
          <h1 style={{ color: "#000000" }}>NIGERIAN LIMITED</h1>
          <h2 style={{ color: "#000000" }}>
            <span style={{ color: "#ff1100" }}>Rc:</span>1829733
          </h2>
        </Link>
      </div>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[4.0rem] p-5 pt-0  border-b border-b-white/20 bg-white z-10 h-1/4">

          <ul className="grid gap-2 place-items-center">
            

            <div className={''}>
              <li>
                {/* <a href="/">Home</a> */}
                <Link to={"/"}>
                  <Button text={"Home"} />
                </Link>
              </li>
              <li>
                {/* <a href="./about">About</a> */}
                <Link to={"/About"}>
                  <Button text={"About"} />
                </Link>
              </li>
              <li>
                {/* <a href="./contact">Contact</a> */}
                <Link to={"/Contact"}>
                  <Button text={"Contact"} />
                </Link>
              </li>
              {/* <label for="check" className="close-menu"><i class="fas fa-times" style={{color:"#000"}}></i></label> */}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};