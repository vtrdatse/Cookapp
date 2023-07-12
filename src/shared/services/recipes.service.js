import { httpsNoToken } from "../config/https.config";

class RecipesService {
  getAllRecipes() {
    return httpsNoToken.get(`/Recipeposts`);
  }
  getDetailRecipe(id) {
    return httpsNoToken.get(`/Recipeposts/${id}`);
  }
  createRecipe(body){
    return httpsNoToken.post(`/Recipeposts`,body);
  }
  updateRecipe(id, body){
    return httpsNoToken.put(`/Recipeposts/${id}`, body);
  }
  deleteRecipe(id){
    return httpsNoToken.delete(`/Recipeposts/${id}`);
  }
}

export const recipesService = new RecipesService();

// GET
// [
//     {
//       "id": "string",
//       "title": "string",
//       "content": "string",
//       "create_time": "2023-07-10T16:49:00.835Z",
//       "update_time": "2023-07-10T16:49:00.835Z",
//       "catetitle": "string",
//       "preptime": 0,
//       "addtime": 0,
//       "cooktime": 0,
//       "totaltime": 0,
//       "fullName": "string",
//       "image": "string",
//       "tag": "string",
//       "ingredient": "string",
//       "nutrition": "string"
//     }
//   ]

// POST,PUT
// {
//     "title": "string",
//     "refTag": "string",
//     "content": "string",
//     "refCategory": "string",
//     "refAccount": "string",
//     "image": "string",
//     "preptime": 0,
//     "addtime": 0,
//     "cooktime": 0
//   }