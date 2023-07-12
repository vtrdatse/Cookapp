import { Card, Form, Input, Button, Row, Col, DatePicker } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import MenuProfile from "../../../shared/components/MenuProfile";
import { userService } from "../../../shared/services/user.service";

const PresonnalInfor = () => {
    const {user} = useSelector(state => state.appSlice)
    const [form] = useForm()
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const { data } = useQuery('userInfor', () => userService.getProfile(), { enabled: !user });
    useEffect(() => {
        form.setFieldsValue(data)
    },[data])
    return (
        <MenuProfile>
            <Card className="w-full" title="My Basic Infor" bordered={false}>
                <Form
                    form={form}
                    layout="vertical"
                    name="basic"
                    style={{
                        maxWidth: "100%",
                    }}
                  
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Frist Name"
                                name="first_name"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Last Name"
                                name="last_name"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Birthday"
                        name="birthday"
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item>
                        <Button className="w-full" htmlType="submit">
                            Save change
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </MenuProfile>
    );
}

export default PresonnalInfor;