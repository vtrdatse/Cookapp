import { Card, Form, Input, Button } from "antd";
import MenuProfile from "../../../shared/components/MenuProfile";

const ChangePassword = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <MenuProfile>
            <Card className="w-full" title="Change Password" bordered={false}>
                <Form
                    layout="vertical"
                    name="basic"
                    style={{
                        maxWidth: "100%",
                    }}

                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Current Password"
                        name="current_password"

                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="New Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Confirm New Password"
                        name="password_confirm"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
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

export default ChangePassword;