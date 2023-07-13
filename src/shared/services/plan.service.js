import { httpsNoToken } from "../config/https.config";

class PlanService {
  getPlanById(id) {
    return httpsNoToken.get(`/Plan/${id}`);
  }
}

export const planService = new PlanService();

// [
//     {
//       "starttime": "string",
//       "endtime": "string",
//       "dayinschedule": "string",
//       "ref_account": "string",
//       "ref_post": "string",
//       "title": "string"
//     }
//   ]