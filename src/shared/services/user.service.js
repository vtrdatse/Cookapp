import { httpsNoToken } from "../config/https.config";

class UserService {
  getProfile(id) {
    return httpsNoToken.get(`/Accounts/${id}`);
  }
  updateAccountProfile(id, body){
    return httpsNoToken.put(`/Accounts/${id}`, body);
  }
}

export const userService = new UserService();

// GET
// {
// "id": "string",
// "username": "string",
// "password": "string",
// "roleid": "string",
// "dob": "2023-07-10T16:43:21.876Z",
// "isActive": true,
// "fullName": "string"
// }

// PUT
// {
//     "id": "string",
//     "username": "string",
//     "password": "string",
//     "dob": "2023-07-10T16:46:17.304Z",
//     "fullName": "string",
//     "avatar": "string",
//     "bio": "string"
//   }