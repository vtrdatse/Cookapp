import { useParams } from "react-router-dom";
import LayoutWebsite from "../../../shared/layout/LayoutWebsite"; 
import API from "../../../../api.json"
import { Breadcrumb, Row, Col } from "antd";
import InfoDetailRecipe from "../../../shared/components/InfoDetailRecipe";
import DetailIngerdientRecipe from "../../../shared/components/DetailIngerdientRecipe";
import PopularRecipes from "../../../shared/components/PopularRecipes";
import Gallery from "../../../shared/components/Carousel";

const DetailRecipe = () => {
    const { id } = useParams();
    const recipe = API.food.filter((food) => food.id === id)[0];
    return (<LayoutWebsite>
        {id && (
            <Breadcrumb
                items={[
                    {
                        title: 'Home',
                    },
                    {
                        title: <a href="">None</a>,
                    },
                    {
                        title: `${id}`,
                    },
                ]}
            />)}
        <Row justify={"center"} align={"middle"} className='w-full h-full' gutter={[16,32]}>
            <Col span={24}>
                <InfoDetailRecipe recipe={recipe} />
            </Col>
            <Col span={24}>
                <DetailIngerdientRecipe recipe={recipe} />
            </Col>
            <Col span={24}>
                <PopularRecipes data={API.food}/>
            </Col>
            <Col span={24}>
                <Gallery title={"FOOD"}/>
            </Col>
        </Row>
    </LayoutWebsite>);
}

export default DetailRecipe;