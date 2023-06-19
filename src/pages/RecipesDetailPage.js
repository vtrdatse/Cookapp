/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../components/ui/Header";
import Banner from "../components/Banner";
import Ingredient from "../components/Ingredient";
import Platform from "../components/Platform";
import SwiperCP from "../components/SwiperCP";
import Other from "../components/Order";
import Footer from "../components/ui/Footer";


const RecipesDetailPage = () => {
    const ACTION_LIST = [
        {
            name: "SAVE",
            img: "https://cdn-icons-png.flaticon.com/256/51/51715.png",
            color: "red",
        },
        {
            name: "RATE",
            img: "https://cdn-icons-png.flaticon.com/256/17/17672.png",
        },
        {
            name: "SHARE",
            img: "https://www.pngkey.com/png/full/207-2071219_arrow-share-conversion-comments-share-icon.png",
        },
        {
            name: "COMMENT",
            img: "https://www.veryicon.com/download/png/object/material_design_icons/comment-text-outline-1?s=256",
        },
    ];

    const SWIPER_CP = [
        {
            title: "Lorem is applet",
            slides: [
                {
                    img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
                    text: "Lorem ",
                    desc: "loreme is applet",
                },
                {
                    img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
                    text: "Lorem ",
                    desc: "loreme is applet",
                },
                {
                    img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
                    text: "Lorem ",
                    desc: "loreme is applet",
                },
                {
                    img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
                    text: "Lorem ",
                    desc: "loreme is applet",
                },
            ],
        },
    ];

    return (
        <div className="details-container">
            <Header />
            {/* path */}
            <div className="details-route">
                <span>HOME</span>
                <span>&gt;</span>
                <span>Grilled Chicken</span>
                <span>&gt;</span>
                <span>Details</span>
            </div>
            {/* summary view */}
            <div className="detail-summary">
                <div className="detail-summary-flex">
                    <div className="detail-summary-image">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg?crop=0.8890666666666666xw:1xh;center,top&resize=1200:*" />
                    </div>
                    <div className="thumbnails">
                        {Array.from({ length: 4 }, (_, index) => (
                            <img src="https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg?crop=0.8890666666666666xw:1xh;center,top&resize=1200:*" />
                        ))}
                    </div>
                </div>
                <div className="detail-summary-text">
                    <h2>Grilled Chicken</h2>
                    <div className="line-2">
                        <p className="star-list ">
                            {Array.from({ length: 4 }, (_, index) => (
                                <img src="https://cdn-icons-png.flaticon.com/256/17/17672.png" />
                            ))}
                            <img src="https://cdn-icons-png.flaticon.com/256/32/32172.png" />
                        </p>
                        <p>4.0 (2,201) | 1,549 REVIEWS</p>
                    </div>
                    <div className="line-3">
                        <p>
                            The key to cooking chicken breasts without drying them out.
                            The secret is all in the marinade. Our easy, simple marinade uses balsamic, olive oil, brown sugar, garlic, and dried herbs to give our chicken heaps of flavor, and ensure it stays juicy while cooking. We’d recommend marinating it for no longer than 12 hours. Technically (according to the USDA), you can keep raw chicken refrigerated for up to 2 days, but we don't recommend marinating for that long, since you’ll run the risk of getting mushy chicken.
                        </p>
                        <p>Recipe by Happy Cook | Upload on match 8, 2022</p>
                    </div>
                    <div className="line-4">
                        {ACTION_LIST.map((action) => (
                            <div className="action-item">
                                <p>{action.name}</p>
                                <img src={action.img} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* details view */}
            <div className="details-view-container">
                <div className="details-view-text">
                    <div className="ss-1">
                        <p>PREP TIME: 20 Mins</p>
                        <p>ADDITIONAL TIME: 2 hrs 30mins </p>
                        <p>COOK TIME: 20 mins</p>
                        <p>TOTAL TIME: 3 hrs 90 mins</p>
                    </div>
                    <div className="ss-2">
                        <center style={{ margin: "30px 0px" }}>
                            <h2>Ingredient</h2>
                        </center>
                        <p>sauce: </p>
                        <ul>
                            {Array.from({ length: 1 }, (_, index) => (
                                <li>
                                    1/4 c. balsamic vinegar
                                    3 tbsp. extra-virgin olive oil
                                    2 tbsp. brown sugar
                                    3 cloves garlic, minced
                                    1 tsp. dried thyme
                                    1 tsp. dried rosemary
                                    4 chicken breasts
                                    Kosher salt
                                    Freshly ground black pepper
                                    Freshly chopped parsley, for garnish
                                </li>
                            ))}
                        </ul>
                        <p>directions: </p>
                        <ul>
                            {Array.from({ length: 1 }, (_, index) => (
                                <li>
                                    Step 1
                                    In a medium bowl, whisk together balsamic vinegar, olive oil, brown sugar, garlic, and dried herbs, and season generously with salt and pepper. Reserve ¼ cup.
                                    Step 2
                                    Add chicken to the bowl and toss to combine. Let marinate at least 20 minutes and up to overnight.
                                    Step 3
                                    Preheat grill to medium high. Add chicken and grill, basting with reserved marinade, until cooked through, 6 minutes per side.
                                    Step 4
                                    Garnish with parsley before serving.
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ss-3">
                        <h4>NUTRITION FACT</h4>
                        <div className="nutrition-container">
                            <div>
                                <p>445</p>
                                <p>CALORIES</p>
                            </div>
                            <div>
                                <p>445</p>
                                <p>CALORIES</p>
                            </div>
                            <div>
                                <p>445</p>
                                <p>CALORIES</p>
                            </div>
                            <div>
                                <p>445</p>
                                <p>CALORIES</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box"></div>
            </div>
            {/* rate view */}
            <div className="rate-view-container">
                <h3>REVIEWS (1.526)</h3>
                <div className="rate-view">
                    <img src="https://cdn-icons-png.flaticon.com/512/9489/9489930.png" />
                    <h3>
                        <b>Neque porro quisquam est qui dolorem</b>
                    </h3>
                    <h3>
                        <b>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                        </b>
                    </h3>
                    <div className="add">ADD RATING & REVIEW</div>
                    <div className="hr"></div>
                    <div className="ss-1">
                        <p className="star-list ">
                            {Array.from({ length: 4 }, (_, index) => (
                                <img src="https://cdn-icons-png.flaticon.com/256/17/17672.png" />
                            ))}
                            <img src="https://cdn-icons-png.flaticon.com/256/32/32172.png" />
                        </p>
                        <p>4.0 (2,201) | 1,549 REVIEWS</p>
                    </div>
                    <div className="ss-2">
                        <div>
                            <div className="hr"></div>
                            {Array.from({ length: 4 }, (_, index) => (
                                <div className="review-container">
                                    <div className="user-review">
                                        <div>
                                            <img src="https://static.wikia.nocookie.net/dragonballfanon/images/2/21/Three-Star_Earthling_Dragonball_%28Xz%29.png/revision/latest?cb=20211120234245" />
                                        </div>
                                        <div>
                                            <p style={{ marginBottom: "5px" }}>SUNFLOWER</p>
                                            <div className="rate-array">
                                                {Array.from({ length: 4 }, (_, index) => (
                                                    <img
                                                        src="https://cdn-icons-png.flaticon.com/256/17/17672.png"
                                                        style={{ width: "20px", height: "20px" }}
                                                    />
                                                ))}
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/256/32/32172.png"
                                                    style={{ width: "20px", height: "20px" }}
                                                />
                                                <p>10/102/2002</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic typesetting,
                                            remaining essentially unchanged. It was popularised in the
                                            1960s with the release of Letraset sheets containing Lorem
                                            Ipsum passages, and more recently with desktop publishing
                                            software like Aldus PageMaker including versions of Lorem
                                            Ipsum.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Platform />
            {SWIPER_CP.map((item, index) => (
                <SwiperCP data={item} />
            ))}
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default RecipesDetailPage;
