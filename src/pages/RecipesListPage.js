import React from "react";
import Header from "../components/ui/Header";
import Banner from "../components/Banner";
import Ingredient from "../components/Ingredient";
import Platform from "../components/Platform";
import SwiperCP from "../components/SwiperCP";
import Other from "../components/Order";
import Footer from "../components/ui/Footer";

const RecipesListPage = () => {
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
    <div>
      <Header />
      <Banner />
      <Ingredient />
      <Platform />
      {SWIPER_CP.map((item, index) => (
        <SwiperCP data={item} />
      ))}
      <Other />
      <Footer />
    </div>
  );
};

export default RecipesListPage;
