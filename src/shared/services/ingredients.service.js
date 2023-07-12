import { httpsNoToken } from "../config/https.config";

class IngredientsService {
  getAllIngredients() {
    return httpsNoToken.get(`/Ingredients`);
  }
}

export const ingredientsService = new IngredientsService();

// GET
// [
//     {
//       "id": "string",
//       "name": "string"
//     }
// ]
