/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../components/ui/Header";
import Platform from "../components/Platform";
import SwiperCP from "../components/SwiperCP";
import Footer from "../components/ui/Footer";
import { useParams } from "react-router-dom";
import API from "../api.json";

const RecipesDetailPage = () => {
  const { id } = useParams();

  const food = API.food.filter((food) => food.id === id)[0];
  console.log(food);
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
        <span>{food.name}</span>
        <span>&gt;</span>
        <span>Details</span>
      </div>
      {/* summary view */}
      <div className="detail-summary">
        <div className="detail-summary-flex">
          <div className="detail-summary-image">
            <img src={food.image[0]} />
          </div>
          <div className="thumbnails">
            {food.image.map((img) => (
              <img src={img} />
            ))}
          </div>
        </div>
        <div className="detail-summary-text">
          <h2>{food.name}</h2>
          <div className="line-2">
            <p className="star-list ">
              {Array.from({ length: 4 }, (_, index) => (
                <img src="https://cdn-icons-png.flaticon.com/256/17/17672.png" />
              ))}
              <img src="https://cdn-icons-png.flaticon.com/256/32/32172.png" />
            </p>
            <p>
              {food.rate} (2,201) | {food.reviews.quantity} REVIEWS
            </p>
          </div>
          <div className="line-3">
            <p>{food.summary}</p>
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
            <p>PREP TIME: {food.prepTime} Mins</p>
            <p>ADDITIONAL TIME: {food.addTime} mins </p>
            <p>COOK TIME: {food.cookTime} mins</p>
            <p>TOTAL TIME: {food.totalTime} mins</p>
          </div>
          <div className="ss-2">
            <center style={{ margin: "30px 0px" }}>
              <h2>Ingredient</h2>
            </center>
            <p>sauce: </p>
            <ul>{food.sauce}</ul>
            <p>directions: </p>
            <ul>{food.direction}</ul>
          </div>
          <div className="ss-3">
            <h4>NUTRITION FACT</h4>
            <div className="nutrition-container">
              <div>
                <p>{food.nutri}</p>
                <p>CALORIES</p>
              </div>
              <div>
                <p>{food.nutri}</p>
                <p>CALORIES</p>
              </div>
              <div>
                <p>{food.nutri}</p>
                <p>CALORIES</p>
              </div>
              <div>
                <p>{food.nutri}</p>
                <p>CALORIES</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box"></div>
      </div>
      {/* rate view */}
      <div className="rate-view-container">
        <h3>REVIEWS ({food.reviews.quantity})</h3>
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
            <p>
              {food.rate} (2,201) | {food.reviews.quantity} REVIEWS
            </p>
          </div>
          <div className="ss-2">
            <div>
              <div className="hr"></div>
              {food.reviews.reviewers.map((reviewer) => (
                <div className="review-container">
                  <div className="user-review">
                    <div>
                      <img src={reviewer.image} />
                    </div>
                    <div>
                      <p style={{ marginBottom: "5px" }}>{reviewer.name}</p>
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
                    <p>{reviewer.content}</p>
                  </div>
                </div>
              ))}{" "}
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
