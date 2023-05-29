import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./Splide.scss";

const Splides = () => {
    return (
        <div className="container">
            <Splide
                options={{
                    rewind: true,
                    gap: "1rem",
                    autoplay: "playing",
                    interval: 3000,
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <div className="home-splide_img">
                        <img
                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                            alt="Image1"
                        />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="home-splide_img">
                        <img
                            src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                            alt="Image2"
                        />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="home-splide_img">
                        <img
                            src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                            alt="Image3"
                        />
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Splides;
