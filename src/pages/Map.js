/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import IMG_COVER from "../asset/pexels-min-an-1337974.jpg";

const Map = () => {
    return (
        <>
            <div className="map-container">
                <div className="map-overlay"></div>
                <div className="map__image">
                    {/* <img src={IMG_COVER} alt="banner" /> */}
                </div>
                <div className="map-current">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.654985449266!2d106.83037941436093!3d10.837693192279962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521ba9415b293%3A0xb6d3b7f0c8d2a78c!2sVinhome%20Grand%20Park%20Homestay%20House%20(Phong%20Nh%C3%A3)!5e0!3m2!1svi!2s!4v1676203944217!5m2!1svi!2s"
                        //   style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="map-footer">
                <a href="https://www.google.com/maps/place/Vinhome+Grand+Park+Homestay+House+(Phong+Nh%C3%A3)/@10.552277,106.94169,7z/data=!4m9!3m8!1s0x317521ba9415b293:0xb6d3b7f0c8d2a78c!5m2!4m1!1i2!8m2!3d10.8376932!4d106.8325681!16s%2Fg%2F11sr7vbcxx?hl=vi">
                    View on Google Maps
                </a>
            </div>
        </>
    );
};

export default Map;
