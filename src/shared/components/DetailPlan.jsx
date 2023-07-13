import { Row, Col, Form, Modal } from "antd";
import { useState } from "react";
import UploadImage from "./UploadImage";
const DetailPlan = ({ title, recipes }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPlan, setIsPlan] = useState();
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="mt-10">
            <h2 className="text-xl text-center font-bold uppercase text-black bg-[#FFD9C0] mb-2">{title}</h2>
            <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off">
                <Row gutter={[16, 16]} justify={"start"} align={"middle"}>
                    <Col sm={12} lg={6}>
                        <div
                            onClick={() => {
                                setIsPlan(recipes)
                                showModal()
                            }}
                            className='min-h-[200px] w-full rounded-md cursor-pointer'
                            style={{
                                backgroundImage: `url("https://healthbydesign.com/wp-content/uploads/mealplanning.png")`,
                                backgroundOrigin: 'initial',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                opacity: 1,
                            }}
                        ></div>
                        <Modal title="Detail Plan" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            {isPlan && (
                                <>
                                    <p>StartTime: {isPlan.starttime}</p>
                                    <p>EndTime {isPlan.endtime}</p>
                                    <p>RefPost: {isPlan.ref_post}</p>
                                    <p>Title: {isPlan.title}</p>
                                </>
                            )}
                        </Modal>
                    </Col>
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