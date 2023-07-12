import { Button, Checkbox, Form, Input, Row, Col, message } from 'antd';
import LayoutNotAuth from "../../shared/layout/LayoutNotAuth"
import jwt_decode from 'jwt-decode'
import {setCookie } from 'cookies-next';
import { authService } from '../../shared/services/auth.service';
import { APP_SAVE_KEYS } from '../../shared/constants';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { login } from '../../shared/store/appSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginMutation = useMutation({
        mutationKey: 'login',
        mutationFn: (body) => authService.authenticated(body),
        onSuccess(data, _variables, _context) {
            const res = data.result
            if(!res.token) return
            const decodeData = jwt_decode(res.token.accessToken)
            if (decodeData) {
                setCookie(APP_SAVE_KEYS.KEYS, res.accessToken, { maxAge: decodeData.exp });
                dispatch(login(data.result))
                message.success(
                    'Đăng nhập thành công',
                );
                navigate("/")
            }
        },
        onError(error, variables, context) {
            message.error(
                'Đăng nhập không thành công',
            );
        },
    })
    const onFinish = (values) => {
        console.log('Success:', values);
        loginMutation.mutate(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <LayoutNotAuth>
            <Row className='w-full h-full' gutter={24}>
                <Col span={12}>
                    <Form
                        className='flex flex-col justify-center items-center min-w-full'
                        layout='vertical'
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}

                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            className='w-full'
                            label="Tên đăng nhập"
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

                        <Form.Item
                            className='w-full'
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Ghi nhớ</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button className=' bg-blue-400' htmlType="submit">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12}>
                    <div
                        className=' h-[400px] w-full'
                        style={{
                            backgroundImage: `url("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")`,
                            backgroundOrigin: 'initial',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            opacity: 1,
                        }}
                    ></div>
                </Col>
            </Row>
        </LayoutNotAuth>
    )
}
export default Login;