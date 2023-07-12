import { Card, Form, Input, Button, Row, Col, Divider,message } from "antd";
import { useNavigate } from "react-router-dom";
import MenuProfile from "../../../../shared/components/MenuProfile";
import UploadImage from "../../../../shared/components/UploadImage";
import { useMutation } from 'react-query';
import {recipesService} from "../../../../shared/services/recipes.service";
const Create = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log(values);
        createMutation.mutate(values)
    };
    const createMutation = useMutation({
        mutationKey: 'recipe',
        mutationFn: (body) => recipesService.createRecipe(body),
        onSuccess(data, _variables, _context) {
            if(!data) return
            message.success(
                'Tạo mới thành công',
            );
            navigate("/")
        },
        onError(error, variables, context) {
            message.error(
                'Tạo mới không thành công',
            );
        },
    })
    return (
        <MenuProfile>
            <Card className="w-full" title={
                <>
                    <h1>+ Add A Recipe</h1>
                    <h2>Uploading personal recipes is easy! Add yours to your favorites, share with friends, family, or the Allrecipes community.</h2>
                </>}
                bordered={false}>
                <Form
                    layout="vertical"
                    name="basic"
                    style={{
                        maxWidth: "100%",
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Divider className="w-full"></Divider>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        label="Recipe Title"
                                        name="title"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="Description"
                                        name="content"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Photo(optional)"
                                name="image"
                            >
                                <UploadImage />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Divider className="w-full"></Divider>

                    <h2 className="text-xl mb-2">Ingredients</h2>
                    <Form.Item
                        label="Ingredient"
                        name="first_name_1"
                    >
                        <Input />
                    </Form.Item>

                    <Divider className="w-full"></Divider>
                    <h2 className="text-xl mb-2">Directions</h2>
                    <Form.Item
                        label="Step 1"
                        name="first_name_2"
                    >
                        <Input />
                    </Form.Item>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item>
                                <Button onClick={() => navigate(-1)} className="w-full" htmlType="button">
                                    Back
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item>
                                <Button className="w-full" htmlType="submit">
                                    Save change
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </Card>
        </MenuProfile>
    );
}

export default Create;