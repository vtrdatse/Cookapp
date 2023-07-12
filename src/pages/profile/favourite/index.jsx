import { Card, Row, Col, Form, Button } from "antd";
import MenuProfile from "../../../shared/components/MenuProfile";
import UploadImage from "../../../shared/components/UploadImage";


const Favourite = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const fakeURL = ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"]
    return (
        <MenuProfile>
            <Card className="w-full" title={
                <>
                    <h1>Saved Items & Collections</h1>
                    <h2>Create Collections To Organize Your Saverd Items.</h2>
                </>}
                bordered={false}>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Row gutter={[16, 16]} justify={"center"} align={"middle"}>
                        {fakeURL.map((item,index) => {
                            return (
                                <Col key={index} span={12}>
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
                    <Form.Item>
                        <Button className="mt-3" htmlType="submit">
                            Save change
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </MenuProfile>
    );
}

export default Favourite;