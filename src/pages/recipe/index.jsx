import BannerPage from "../../shared/components/BannerPage";
import LayoutWebsite from "../../shared/layout/LayoutWebsite";
import API from "../../../api.json";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { recipesService } from "../../shared/services/recipes.service";

const Recipes = () => {
    const { user } = useSelector(state => state.appSlice)
    const { data } = useQuery('Recipes', () => recipesService.getAllRecipes(), {
        enabled: !user
    });
    const dataFake = API.food
    return (
        <LayoutWebsite>
            <BannerPage title="RECIPES" />
            <div className='w-full text-black p-5'>
                <Row className='w-full flex justify-center' align='middle' justify='space-between' gutter={32}>
                    {dataFake && dataFake.map((food, index) => (
                        <Col className='text-center font-bold uppercase mt-5' key={index} sm={12} lg={6} span={6}>
                            <div className='py-5 scale-90'>
                                <Link to={`/recipes/${food.id}`}>
                                    <div
                                        className='min-h-[200px] w-full rounded-md hover:scale-110'
                                        style={{
                                            backgroundImage: `url("${food.image[0]}")`,
                                            backgroundOrigin: 'initial',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: '100% 100%',
                                            opacity: 1,
                                            transition: 'transform 0.3s ease',
                                        }}
                                    ></div>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </LayoutWebsite>
    );

}

export default Recipes;