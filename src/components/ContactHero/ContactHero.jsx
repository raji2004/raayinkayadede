import React from "react";
import Style from "./contacthero.module.css";
import { TextField, } from "@mui/material";
import { Button } from "../../components";
import { color } from "framer-motion";
export const ContactHero = () => {
  return (
    <div style={{ height: '160vh' }}>
      <div className={Style.container}>
        <div className={Style.contacthero}>
          <div className={Style.designtext}>
            <h4 className={Style.text}>
              We'd love to hear <br /> from you{" "}
            </h4>
            <p className={Style.subtext}>
           At Raayin Kayadede, we highly value customer feedback. Our goal is to provide a seamless communication experience, ensuring prompt and efficient responses to all customer inquiries. We are committed to maintaining high standards of customer service and satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className={Style.form}>
        <div className={Style.formcontent}>
          <div className={Style.formheader}>
            <h3>
              Fill out the form and we'll be in touch as soon as possible!
            </h3>
          </div>
          <div className={Style.inputs}>

            <TextField
              fullWidth
              required
              id="outline-required"
              label="Full Name"
              size="Normal"
              style={{ marginBottom: 45 }}
            />

            <TextField
              fullWidth
              required
              id="outline-required"
              label="Email"
              size="Normal"
              style={{ marginBottom: 45 }}
            />

            <TextField
              fullWidth
              required
              id="outline-required"
              label="Phone Number"
              size="Normal"
              style={{ marginBottom: 45 }}
            />

            <TextField
              multiline={true}
              rows={4}
              fullWidth
              required
              id="outline-required"
              label="Message"
              placeholder="How can we help?"
              size="Normal"
              style={{ marginBottom: 45 }}
              color="primary"
            />

            <Button text={"Submit"} style={{ backgroundColor: 'red', alignSelf: 'center',color:'white', }} />
          </div>
        </div>
      </div>
    </div>
  );
};




export const ContactHeroMobile = () => {
  //rounded-bl-full rounded-tr-full
  return (
    <>
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 w-full md:w-screen h-80 md:h-3/5  relative">
        <div className="container mx-auto flex justify-center items-center flex-col h-full">
          <div className="text-white text-center">
            <h4 className="text-xl md:text-6xl leading-tight">
              We'd love to hear <br /> from you{" "}
            </h4>
            <p className="mt-8 ml-10 text-xs text-center">
              At Raayin Kayadede, we highly value customer feedback. Our goal
              is to provide a seamless communication experience, ensuring prompt
              and efficient responses to all customer inquiries. We are committed
              to maintaining high standards of customer service and satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center flex-col">
        <div className="bg-white rounded-full w-full h-auto md:h-screen md:w-2/5 mt-10 p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">
              Fill out the form and we'll be in touch as soon as possible!
            </h3>
          </div>
          <div className="w-full space-y-4">
            <TextField
              fullWidth
              required
              id="outline-required"
              label="Full Name"
              size="Normal"
              variant="outlined"
            />

            <TextField
              fullWidth
              required
              id="outline-required"
              label="Email"
              size="Normal"
              variant="outlined"
            />

            <TextField
              fullWidth
              required
              id="outline-required"
              label="Phone Number"
              size="Normal"
              variant="outlined"
            />

            <TextField
              multiline
              rows={4}
              fullWidth
              required
              id="outline-required"
              label="Message"
              placeholder="How can we help?"
              size="Normal"
              variant="outlined"
              color="primary"
            />
            <Button text={"Submit"} style={{marginTop:50, backgroundColor: 'red', alignSelf: 'center' }} />
          </div>
        </div>
      </div>
    </>
  );
};
