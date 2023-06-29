import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="about-container">
                {/* title */}
                <div className="">
                    <h1>+ ADD A RECIPE
                    </h1>
                    <p>Uploading personal recipes is easy! Add yours to your favorites, share with friends, family, or the Allrecipes community.
                    </p>
                    <p>NEW</p>
                </div>

                {/* 1 */}
                <div className="x1">
                    <div>
                        <p>RECIPE TILTLE
                        </p>
                        <input placeholder="give your recipe a title
" />
                        <br />
                        <br />
                        <p>DESCRIPTION</p>
                        <input placeholder="" />
                    </div>
                    <div>
                        <p>PHOTO(optional)
                        </p>
                        <div className="white"></div>
                        <p className="UPLOAD">UPLOAD</p>
                    </div>
                </div>

                {/* 2 */}
                <div className="x2">
                    <p>INGREDIENTS
                    </p>
                    <input />
                    <br />
                    <br />
                    <br />
                    <p></p>
                    <input />
                    <br />
                    <br />
                    <br />
                    <p></p>
                    <input />
                    <br />
                    <br />
                    <br />
                </div>

                {/* 3 */}
                <div className="x2">
                    <p>DIRECTIONS
                    </p>
                    <p>step 1
                    </p>
                    <input />
                    <br />
                    <br />
                    <br />
                    <p>step 2
                    </p>
                    <input />
                    <br />
                    <br />
                    <br />
                    <p>step 3
                    </p>
                    <input />
                    <br />
                    <br />
                    <br />
                </div>

                {/* bt */}
                <div className="bt">
                    <button className="cc">Cancel</button>
                    <button className="sm">SUBMIT RECIPE
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutPage;
