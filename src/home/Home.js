import React from "react";
import Splides from "./Splide";
import Title1 from "./Title1";
import Title2 from "./Title2";
import Center from "./Center";
import "./Home.scss";

export default function Home() {
    return (
        <>
            <Splides />
            <Title1 />
            <Center />
            <Title2 />
        </>
    );
}
