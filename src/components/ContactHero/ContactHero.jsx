import React from "react";
import Style from "./contacthero.module.css";
import {TextField, Button} from "@mui/material";

export const ContactHero = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.contacthero}>
          <div className={Style.designtext}>
            <h4 className={Style.text}>
              We'd love to hear <br /> from you{" "}
            </h4>
            <p className={Style.subtext}>
              Contact us using the form below and we'll get back to you right
              away
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
              style={{ marginBottom: 45}}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};




export const ContactHeroMobile = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 w-full h-4/5 md:h-82vh rounded-bl-full rounded-tr-full relative">
        <div className="container mx-auto flex justify-center items-center flex-col h-full">
          <div className="text-white text-center">
            <h4 className="text-xl md:text-6xl leading-tight">
              We'd love to hear <br /> from you{" "}
            </h4>
            <p className="mt-8 ml-10 text-sm text-center">
              Contact us using the form below and we'll get back to you right
              away
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center flex-col">
        <div className="bg-white rounded-full w-full h-screen md:w-2/5 mt-10 p-8 shadow-md">
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
          </div>
        </div>
      </div>
    </>
  );
};
