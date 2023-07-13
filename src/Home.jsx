import LayoutWebsite from "./shared/layout/LayoutWebsite";
import { Row, Col } from 'antd';
import Ingerdient from "./shared/components/Ingerdient";
import PopularRecipes from "./shared/components/PopularRecipes";
import { SWIPER_CP } from "./shared/constants";
import API from "../api.json";
import Gallery from "./shared/components/Carousel";

const Home = () => {
    return (
        <>
            <div className="absolute w-screen top-0" span={24}>
                <div
                    className='w-full min-h-[500px]'
                    style={{
                        backgroundImage: `url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000")`,
                        backgroundOrigin: 'initial',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",
                        opacity: 1,
                    }}
                ></div>
            </div>
            <LayoutWebsite>
                <Row justify={"center"} align={"middle"} className='w-full h-full' gutter={[16, 16]}>
                    <Col span={24}>
                        <Ingerdient />
                    </Col>
                    <Col span={24}>
                        <PopularRecipes dataFake={API.food.slice(0,4)} />
                    </Col>
                    <Col span={24}>
                        <Gallery title={"VEGETABLE"} />
                    </Col>
                </Row>
            </LayoutWebsite>
        </>
    );
}

export default Home;