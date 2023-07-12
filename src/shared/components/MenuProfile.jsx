import LayoutWebsite from "../../shared/layout/LayoutWebsite";
import { Row, Col, Menu, Breadcrumb, Divider, Avatar, Card } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const { Meta } = Card;

const items = [
    getItem('Presonnal Info', '/profile/presonnal-infor'),
    getItem('Change Password', '/profile/change-password'),
    getItem('Favourite', '/profile/favourite'),
    getItem('Allrecipes Personal Recipes', '/profile/allrecipes-personal-recipes'),
    getItem('Reviews', '/profile/reviews'),
];
const MenuProfile = ({ children }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation();
    return (<LayoutWebsite>
        <Breadcrumb
            className="mb-3"
            items={[
                {
                    title: <a href="/">Home</a>,
                },
                {
                    title: 'Profile',
                },
            ]}
        />
        <Row className='w-full h-full' gutter={[16, 16]}>
            <Col span={12}>
                <Row>
                    <Col span={24} className="border-b border-b-red-300 p-4">
                        <Row justify={"center"} align={"middle"} gutter={16}>
                            <Col>
                                <Meta
                                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                />
                            </Col>
                            <Col>
                                <h3 className='text-black uppercase underline'>Sunflower</h3>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <div
                            className='h-[500px] w-full'>
                            <Menu
                                onClick={(menu) => {
                                    navigate(menu.key)
                                }}
                                style={{ width: "100%", border: "none" }}
                                defaultSelectedKeys={[pathname.split("/").splice(0, 3).join("/")]}
                                mode="inline"
                                theme="light"
                                items={items}
                            />
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col span={12}>
                {children}
            </Col>
        </Row>
    </LayoutWebsite>);
}

export default MenuProfile;
