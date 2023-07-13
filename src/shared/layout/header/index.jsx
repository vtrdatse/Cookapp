import { Row, Col, Affix, Tooltip, Drawer } from "antd";
import {
    UserOutlined,
    SearchOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Logo from "../../components/Logo";
const Header = ({ showModal }) => {
    const [cookies, setCookie] = useCookies(['auth']);
    const [shouldChangeBackground, setShouldChangeBackground] = useState(false);
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false);
    const [isMenu, setIsMenu] = useState()
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setIsMenu(pathname.split("/")[1])
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 0) {
                setShouldChangeBackground(true);
            } else {
                setShouldChangeBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Affix className="bg-[#fff] opacity-100 z-50" offsetTop={0}>
            <Row align={"middle"} className={`${shouldChangeBackground ? 'bg-[#ecebeb] opacity-90' : ''} p-5 text-black`} gutter={16}>
                <Col span={8}>
                    <h1 className="font-bold">
                        <Link to="/">
                            <Logo />
                        </Link></h1>
                </Col>
                <Col className="hidden cursor-pointer md:block" span={14}>
                    <Row gutter={4}>
                        <Col lg={4} span={6}><Link to="/" className={isMenu === "" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Home</Link></Col>
                        <Col lg={4} span={6}><Link to="/plan" className={isMenu === "plan" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Plan</Link></Col>
                        <Col lg={4} span={6}><Link to="/recipes" className={isMenu === "recipes" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Recipes</Link></Col>
                        <Col lg={4} span={6}><Link to="/contact" className={isMenu === "contact" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Contact</Link></Col>
                    </Row>
                </Col>
                <Col className="block cursor-pointer md:hidden" span={14}>

                    <MenuOutlined onClick={() => setOpen(true)} className="float-right" />
                    <Drawer placement="right" onClose={onClose} open={open}>
                        <Row gutter={[24, 24]}>
                            <Col span={24}><Link to="/" className={isMenu === "" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Home</Link></Col>
                            <Col span={24}><Link to="/plan" className={isMenu === "plan" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Plan</Link></Col>
                            <Col span={24}><Link to="/recipes" className={isMenu === "recipes" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Recipes</Link></Col>
                            <Col span={24}><Link to="/contact" className={isMenu === "contact" ? `bg-[#FFB07F] rounded-lg p-3 md:text-xl` : "hover:bg-[#FFB07F] rounded-lg p-3 md:text-xl"}>Contact</Link></Col>
                        </Row>
                    </Drawer>
                </Col>

                <Col className="hidden md:block" span={2}>
                    <Row>
                        <Col span={12}><SearchOutlined onClick={showModal} className="text-xl rounded-lg p-1" /></Col>
                        <Col span={12}>
                            <Tooltip destroyTooltipOnHide={true} placement="bottom" title={
                                <div className="px-3">
                                    {!cookies ? (
                                        <>
                                            <Link to="/profile">
                                                <p className="text-black">Profile</p>
                                            </Link>
                                            <p onClick={() => null} className="text-black cursor-pointer">Logout</p>
                                        </>
                                    ) : <Link to="/login">
                                        <p className="text-black">Login</p>
                                    </Link>}
                                </div>
                            } color="#fff">
                                <UserOutlined className={isMenu === "profile" ? "bg-red-400 rounded-lg p-1 text-xl cursor-pointer" : "text-xl hover:bg-red-400 rounded-lg p-1 cursor-pointer"} />
                            </Tooltip>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Affix>

    );
}

export default Header;