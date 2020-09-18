import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg"
          alt="home_image"
        />

        <div className="home__row">
          <Product
            id="123456"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="35489132"
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls (updated for 2019)"
            price={49.09}
            rating={5}
            image="https://m.media-amazon.com/images/I/813T5unjeQL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="987135184"
            title="SETEK Superboost WiFi Extender Signal Booster Long Range Coverage, Wireless Internet Amplifier - Covers 15 Devices with 2 External Advanced Antennas, 5 Working Modes, LAN/Ethernet (White)"
            price={39.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61B9g0XWPSL._AC_UY218_.jpg"
          />
          <Product
            id="89466516511"
            title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
            price={62.64}
            rating={1}
            image="https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_UY218_.jpg"
          />
          <Product
            id="11658794"
            title="NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player; High Performance, Dolby Vision, 3GB RAM, 2x USB, Works with Alexa"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61rowppY2TL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="23354841"
            title="Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020"
            price={105.19}
            rating={4}
            image="https://m.media-amazon.com/images/I/81uNJ+-LyJL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
