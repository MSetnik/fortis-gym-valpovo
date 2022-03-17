import React from "react";
import "./index.css";

import { GoLocation } from "react-icons/go";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

const ContactInfo = () => {
  return (
    <div className='contact-info-container'>

      <div className="contact-info-row" >
        <GoLocation color="#f18035" size={24}/>
        <div className="contact-info-details">
          <h5>Adresa:</h5>
          <h5>
            <a href="https://www.google.com/maps/place/Trg+Ante+Star%C4%8Devi%C4%87a+21,+31551,+Beli%C5%A1%C4%87e/@45.6869573,18.4037506,17z/data=!3m1!4b1!4m5!3m4!1s0x475d23116587f091:0x669b7c265b2ebb80!8m2!3d45.6869573!4d18.4059393">
              Trg kralja Tomislava 16, Valpovo
            </a>
          </h5>
        </div>
      </div>

      <div className="contact-info-row">
        <GiSmartphone color="#f18035" size={24}/>
        <div className="contact-info-details">
          <h5>Broj telefona:</h5>
          <h5><a href="tel:095 887 1728">KONTAKT BROJ</a></h5>
        </div>
      </div>

      <div className="contact-info-row">
        <MdOutlineAlternateEmail color="#f18035" size={24}/>
        <div className="contact-info-details">
          <h5>Email:</h5>
          <h5><a href="mailto:deki1511@gmail.com">fortisgym3@gmail.com</a></h5>
        </div>
      </div>

      <div id="working-hours"className="contact-info-row">
        <BiTimeFive color="#f18035" size={24}/>
        <div className="contact-info-details">
          <h5>Radno vrijeme:</h5>
          <div className="work-hour-div">
            <div className="work-hour-row">
              <div className="hours-body">
                <h5 className="">Ponedjeljak</h5>
                <h5 className="">09:00 - 21:00</h5>
              </div>

              <div className="hours-body">
                <h5 className="">Utorak</h5>
                <h5 className="">09:00 - 21:00</h5>
              </div>

              <div className="hours-body">
                <h5 className="">Srijeda</h5>
                <h5 className="">09:00 - 21:00</h5>
              </div>

              <div className="hours-body">
                <h5 className="">četvrtak</h5>
                <h5 className="">09:00 - 21:00</h5>
              </div>

              <div className="hours-body">
                <h5 className="">Petak</h5>
                <h5 className="">09:00 - 21:00</h5>
              </div>

              <div className="hours-body">
                <h5 className="">Subota</h5>
                <h5 className="">12:00 - 19:00</h5>
              </div>

              <div className="hours-body">
                <h5 className="">Nedjelja</h5>
                <h5 className="">ZATVORENO</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
