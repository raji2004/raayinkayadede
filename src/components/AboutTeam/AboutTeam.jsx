import React from "react";
import Style from "./aboutteam.module.css";
import Image1 from "../../assets/images/Screenshot_20230824-233719~2.jpg";
import Image2 from "../../assets/images/Screenshot_20230824-234639~2.jpg";
import Image3 from "../../assets/images/IMG-20230616-WA0000.jpg";
import Image4 from "../../assets/images/IMG-20230923-WA0024.jpg";
import Circle from "../../assets/illustrations/circle-fill.svg";

export const AboutTeam = () => {
  return (
    <>
      <div className={`${Style.team}`}>
        <header className={Style.header}>Meet Our Team Executives</header>
        <div className={Style.profile}>
          {/* <div className={Style.profilecontent}></div> */}
          <div className={Style.member}>
            <img className={Style.image} src={Image1} alt="" />
            <div className={Style.textblock}>
              <p>
                The Managing Director is responsible for making strategic
                decisions, managing operations, and ensuring the company's
                success in delivering construction projects on time and within
                budget.
              </p>
            </div>
            {/* <div className={Style.text}>
              <h3>Managing Director</h3>
              <p>Abdullahi AbdulQuddus</p>
            </div> */}
          </div>


          <div className={Style.member}>
            <img className={Style.image} src={Image2} alt="" />
            <div className={Style.textblock}>
              <p>
                The Managing Director is responsible for making strategic
                decisions, managing operations, and ensuring the company's
                success in delivering construction projects on time and within
                budget.
              </p>
            </div>
            {/* <div className={Style.text}>
              <h3>Managing Director</h3>
              <p>Abdullahi AbdulQuddus</p>
            </div> */}
          </div>

          <div className={Style.member}>
            <img className={Style.image} src={Image3} alt="" />
            <div className={Style.textblock}>
              <p>
                The Managing Director is responsible for making strategic
                decisions, managing operations, and ensuring the company's
                success in delivering construction projects on time and within
                budget.
              </p>
            </div>
            {/* <div className={Style.text}>
                        <h3>Managing Director</h3>
                        <p>Abdullahi AbdulQuddus</p>
                    </div> */}
          </div>
        </div>

        <div className={Style.teamnames}>
          <div className={Style.text}>
            <h3>Managing Director</h3>
            <p>Abdullahi Abdulquddus</p>
          </div>

          <div className={Style.text}>
            <h3>Executive Director</h3>
            <p>Abdullahi Abdulquddus</p>
          </div>

          <div className={Style.text}>
            <h3>Executive Director</h3>
            <p>Abdullahi Abdulrahman</p>
          </div>
        </div>
      </div>

      <div className={Style.acknowledgement}>
        <img className={Style.image} src={Image4} alt="" />
        <div className={Style.bgoverlay}></div>
        <div className={Style.abouttextcontainer}>
          <header className={Style.head}>ACKNOWLEDGEMENT</header>
          <div className={Style.row}>
            <img className={Style.circle} src={Circle} alt="" />
            <div>
              <p className={Style.columntext}>
                Our valued clients, thank you for entrusting us with your
                construction projects. Your faith in our capabilities drives us
                to continuously raise the bar in delivering excellence.
              </p>
            </div>
          </div>

          <div className={Style.row}>
            <img className={Style.circle} src={Circle} alt="" />
            <div>
              <p className={Style.columntext}>
                We appreciate the collaboration and quality products and
                materials provided by our partners and suppliers. Your
                reliability is integral to our success.
              </p>
            </div>
          </div>

          <div className={Style.row}>
            <img className={Style.circle} src={Circle} alt="" />
            <div>
              <p className={Style.columntext}>
                We acknowledge the guidance and compliance standards set forth
                by regulatory bodies, which help us maintain the highest levels
                of safety and quality in our projects.
              </p>
            </div>
          </div>

          <div className={Style.row}>
            <img className={Style.circle} src={Circle} alt="" />
            <div>
              <p className={Style.columntext}>
                To our friends, families, and supporters, your encouragement
                keeps us motivated to strive for excellence. Your support fuels
                our dedication to craftsmanship, innovation, and sustainability.
                We look forward to continued collaboration and the opportunity
                to build a brighter future together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const AboutTeamMobile = () => {
  return (
    <>
      <div className={`${Style.team}`}>
        <header className={Style.header}>Meet Our Team Executives</header>
        <div className={`${Style.profile}`}>
          {/* <div className={Style.profilecontent}></div> */}
          <div className={Style.member}>
            <img className={Style.image} src={Image1} alt="" />
            <div className={Style.textblock}>
              <p>
                The Managing Director is responsible for making strategic
                decisions, managing operations, and ensuring the company's
                success in delivering construction projects on time and within
                budget.
              </p>
            </div>

            {/* <div className={Style.text}>
              <h3>Managing Director</h3>
              <p>Abdullahi AbdulQuddus</p>
            </div> */}
          </div>

          <div className={Style.teamnames}>

            <div className={Style.text}>
              <h3>Managing Director</h3>
              <p>Abdullahi Abdulquddus</p>
            </div>
          </div>


          <div className={Style.member}>
            <img className={Style.image} src={Image2} alt="" />
            <div className={Style.textblock}>
              <p>
                The Managing Director is responsible for making strategic
                decisions, managing operations, and ensuring the company's
                success in delivering construction projects on time and within
                budget.
              </p>
            </div>
            {/* <div className={Style.text}>
              <h3>Managing Director</h3>
              <p>Abdullahi AbdulQuddus</p>
            </div> */}
          </div>

          <div className={Style.teamnames}>


            <div className={Style.text}>
              <h3>Executive Director</h3>
              <p>Abdullahi Abdulquddus</p>
            </div>

          </div>

          <div className={Style.member}>
            <img className={Style.image} src={Image3} alt="" />
            <div className={Style.textblock}>
              <p>
                The Managing Director is responsible for making strategic
                decisions, managing operations, and ensuring the company's
                success in delivering construction projects on time and within
                budget.
              </p>
            </div>
            {/* <div className={Style.text}>
                        <h3>Managing Director</h3>
                        <p>Abdullahi AbdulQuddus</p>
                    </div> */}
          </div>
        </div>
        <div className={Style.teamnames}>
          <div className={Style.text}>
            <h3>Executive Director</h3>
            <p>Abdullahi Abdulrahman</p>
          </div>

        </div>

        
      </div>

      <div className="w-full h-screen relative mt-8  ">
        <img className="w-full h-full object-cover" src={Image4} alt="" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-start items-center p-4">
          <header className="text-white text-3xl font-bold mb-4">ACKNOWLEDGEMENT</header>
          <div className="flex flex-col md:flex-row gap-4 w-full overflow-x-auto">
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <img className="w-5 h-5" src={Circle} alt="" />
                <p className="text-white text-lg">
                  Our valued clients, thank you for entrusting us with your construction projects. Your faith in our capabilities drives us to continuously raise the bar in delivering excellence.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <img className="w-5 h-5" src={Circle} alt="" />
                <p className="text-white text-lg">
                  We appreciate the collaboration and quality products and
                  materials provided by our partners and suppliers. Your
                  reliability is integral to our success.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <img className="w-5 h-5" src={Circle} alt="" />
                <p className="text-white text-lg">
                  We acknowledge the guidance and compliance standards set forth
                  by regulatory bodies, which help us maintain the highest levels
                  of safety and quality in our projects.                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <img className="w-5 h-5" src={Circle} alt="" />
                <p className="text-white text-lg">
                  To our friends, families, and supporters, your encouragement
                  keeps us motivated to strive for excellence. Your support fuels
                  our dedication to craftsmanship, innovation, and sustainability.
                  We look forward to continued collaboration and the opportunity
                  to build a brighter future together.
                </p>
              </div>
            </div>

            {/* Repeat the structure for other acknowledgments */}
          </div>
        </div>
      </div>
    </>
  );
};
