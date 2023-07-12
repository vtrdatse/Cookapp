import { PlusOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import MenuProfile from "../../../shared/components/MenuProfile";


const AllrecipesPersonalRecipes = () => {
    const navigate = useNavigate()
    return (
        <MenuProfile>
            <Card className="w-full" title={
                <>
                    <h1>Allrecipes personal recipes</h1>
                    <h2>Recipes you have created on Allrecipes.</h2>
                </>}
                bordered={false}>
                <div className="flex flex-col justify-center items-center gap-3">
                    <h3 className="text-xl">You haven't created any recipes yet.</h3>
                    <p>To add a recipe click the botton below</p>
                    <Button icon={<PlusOutlined className="p-0 m-0 align-middle" />} onClick={() => navigate("/profile/allrecipes-personal-recipes/create")}>ADD A RECIPE</Button>
                </div>
            </Card>
        </MenuProfile>
    );
}

export default AllrecipesPersonalRecipes;