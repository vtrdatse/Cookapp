import { Row, Col, Form } from "antd";
import UploadImage from "./UploadImage";
const DetailPlan = ({title, recipes}) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className="mt-10">
        <h2 className="text-xl text-center font-bold uppercase text-black bg-[#FFD9C0] mb-2">{title}</h2>
        <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off">
            <Row gutter={[16, 16]} justify={"start"} align={"middle"}>
                {recipes.map((item, index) => {
                    return (
                        <Col key={index} span={6}>
                            <div
                                className='min-h-[200px] w-full rounded-md'
                                style={{
                                    backgroundImage: `url("${item}")`,
                                    backgroundOrigin: 'initial',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    opacity: 1,
                                }}
                            ></div>
                        </Col>
                    )
                })}
                <Col span={12}>
                    <Form.Item
                        name="image">
                        <UploadImage />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
        </div>
    );
}

export default DetailPlan;