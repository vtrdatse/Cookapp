import { Card, Row, Col } from "antd";
import MenuProfile from "../../../shared/components/MenuProfile";
import ReviewRecipe from "../../../shared/components/ReviewRecipe";

const Reviews = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <MenuProfile>
            <Card className="w-full" title={
                <>
                    <h1>Reviews</h1>
                    <h2>The following are reviews you have added to content</h2>
                </>}
                bordered={false}>
                <Row gutter={[24,24]}>
                    <Col span={24}>
                        <ReviewRecipe></ReviewRecipe>
                    </Col>
                    <Col span={24}>
                        <ReviewRecipe></ReviewRecipe>
                    </Col>
                </Row>
            </Card>
        </MenuProfile>
    );
}

export default Reviews;