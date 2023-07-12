import { Row, Col } from "antd";
const DetailIngerdientRecipe = ({ recipe }) => {
    return (<>
        {recipe && (
            <Row className="mt-5" gutter={16}>
                <Col className="bg-[#fdba74] text-black" span={16}>
                    <h3>PREP TIME: {recipe.prepTime} MINS</h3>
                    <h3>ADDITIONAL TIME: {recipe.addTime} MINS</h3>
                    <h3>COOK TIME: {recipe.cookTime} MINS</h3>
                    <h3>TOTAL TIME: {recipe.totalTime} MINS</h3>
                    <h1>INGREDIENT</h1>
                    <h2>SAUCE:</h2>
                    <h3>{recipe.sauce}</h3>
                    <h2>DIRECTIONS:</h2>
                    <h3>{recipe.direction}</h3>
                </Col>
                <Col className="bg-red-300" span={8}></Col>
            </Row>)}
    </>);
}

export default DetailIngerdientRecipe;