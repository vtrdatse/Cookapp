import { Col, Rate, Row } from 'antd';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { tooltipArray } from "../constants";

const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
    1024: { items: 3 },

};

const items = [
    <div className="item mx-auto pr-10 h-[180px] w-[450px]" data-value="1">
        <Row gutter={16} className='w-full h-full'>
            <Col span={12}>
                <img className='rounded-full w-full h-full' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
            </Col>
            <Col span={12} className="bg-[#FFD9C0] text-center my-auto p-3 rounded-lg">
                <h2>Vegetables 1</h2>
                <Rate disabled tooltips={tooltipArray} value={3} />
            </Col>
        </Row>
    </div>,
    <div className="item mx-auto pr-10 h-[180px] w-[450px]" data-value="2">
        <Row gutter={16} className='w-full h-full'>
            <Col span={12}>
                <img className='rounded-full w-full h-full' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
            </Col>
            <Col span={12} className="bg-[#FFD9C0] text-center my-auto p-3 rounded-lg">
                <h2>Vegetables 2</h2>
                <Rate disabled tooltips={tooltipArray} value={3} />
            </Col>
        </Row>
    </div>,
    <div className="item mx-auto pr-10 h-[180px] w-[450px]" data-value="2">
        <Row gutter={16} className='w-full h-full'>
            <Col span={12}>
                <img className='rounded-full w-full h-full' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
            </Col>
            <Col span={12} className="bg-[#FFD9C0] text-center my-auto p-3 rounded-lg">
                <h2>Vegetables 3</h2>
                <Rate disabled tooltips={tooltipArray} value={3} />
            </Col>
        </Row>
    </div>,
];

const Gallery = ({ title }) => {
    return (
        <>
            <div className='mb-5'>
                <h1 className="text-center font-bold text-black capitalize" style={{ borderTop: "1px solid #000", padding: 10 }}>Vegetables</h1>
                <div className='w-full text-black p-5'>
                    <AliceCarousel mouseTracking items={items} responsive={responsive} />
                </div>
            </div>
            <div className='mb-5'>
                <h1 className="text-center font-bold text-black capitalize" style={{ borderTop: "1px solid #000", padding: 10 }}>Spices and herbs</h1>
                <div className='w-full text-black p-5'>
                    <AliceCarousel mouseTracking items={items} responsive={responsive} />
                </div>
            </div>
        </>


    );
}
export default Gallery