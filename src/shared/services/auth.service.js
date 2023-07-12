import { httpsNoToken } from "../config/https.config";

class AuthService {
  authenticated(body) {
    return httpsNoToken.post('/Auth', body);
  }
}

export const authService = new AuthService();

// {
//   success: true,
//   responseCode: 0,
//   responseMessage: "string",
//   result: {
//     id: "string",
//     username: "string",
//     password: "string",
//     roleid: "string",
//     token: {
//       accessToken: "string",
//       tokenType: "string",
//       expiresIn: 0,
//       refreshToken: "string",
//       error: "string"
//     }
//   }
// }
