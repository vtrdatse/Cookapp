import { Row, Col, Button } from "antd";
import React, { useState } from 'react'
import { tooltipArray } from "../constants";
import { Rate, Image } from 'antd';
import { CommentOutlined, HeartOutlined, ShareAltOutlined, StarOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const InfoDetailRecipe = ({ recipe }) => {
    const [cookies, setCookie] = useCookies(['auth']);
    const navigate = useNavigate()
    return (<>
        <Row className="mt-5" gutter={16}>
            <Col xs={24} lg={12}>
                <Row>
                    <Col span={24}>
                        <Image
                            className="w-full rounded-md"
                            src={recipe.image[0]}
                        />
                    </Col>
                    <Col lg={24} span={24}>
                        <Row className="mt-3" align={"middle"} justify="center" gutter={8}>
                            {recipe && recipe.image.slice(1, recipe.image.length).map((item, index) => {
                                return (
                                    <Col key={index} sm={12} lg={24 / recipe.image.length}>
                                        <div
                                            className='h-[100px] w-full rounded-md'
                                        >
                                            <Image
                                                width={150}
                                                height={100}
                                                src={item}
                                            />
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} lg={12}>
                <Row className='w-full text-black' gutter={16}>
                    <Col span={24}>{recipe.name}</Col>
                    <Col span={24}>
                        <Row align="middle" justify={"start"}>
                            <Col span={8}>
                                <span>
                                    <Rate tooltips={tooltipArray} value={3}/>
                                </span>
                            </Col>
                            <Col>{recipe.rate} (2,201)</Col>
                            <Col>| {recipe.reviews.quantity} REVIEWS</Col>
                        </Row>
                    </Col>
                    <Col span={24}>{recipe.summary}</Col>
                    <Col span={24}>Recipe by harry wetzel  |  updated on march 8, 2025</Col>
                    <Col span={24}>
                        <div className="flex justify-start items-center gap-3 mt-3">
                            <Button onClick={()=> {cookies ? navigate("/login") : ""}} type="button" icon={<HeartOutlined className="p-0 m-0 align-middle" />}>Save</Button>
                            <Button onClick={()=> {cookies ? navigate("/login") : ""}} type="button" icon={<ShareAltOutlined className="p-0 m-0 align-middle" />}>Share</Button>
                            <Button onClick={()=> {cookies ? navigate("/login") : ""}} type="button" icon={<CommentOutlined className="p-0 m-0 align-middle" />}>Comment</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>);
}

export default InfoDetailRecipe;