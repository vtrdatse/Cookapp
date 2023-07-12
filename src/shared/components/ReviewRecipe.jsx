import { Avatar, Card, Rate, Row, Col } from 'antd';
import { useState } from 'react';
const { Meta } = Card;
import { tooltipArray } from "../constants";

const ReviewRecipe = () => {
    const [value, setValue] = useState(Math.round(3));
    return (<Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={
            <>
            <h3 className='uppercase underline'>Sunflower</h3>
            <Row className='w-2/3' justify={"center"} align={"middle"}>
                <Col span={12}>
                    <Rate disabled tooltips={tooltipArray} value={value} />
                </Col>
                <Col span={12}>01/31/2019</Col>
            </Row>
            </>
        }
        description="SCRUMPTIOUS!!! What I love about this recipe is one can tinker with the marinade by adding more or less of something until satisfied before pouring over the chicken. I had some leftover pineapple juice so subbed part of that for the water. I also added 3 cloves crushed garlic,"
    />);
}

export default ReviewRecipe;