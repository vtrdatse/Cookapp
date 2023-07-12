import { httpsNoToken } from "../config/https.config";

class CommentService {
  getAllComments() {
    return httpsNoToken.get(`/Comments`);
  }
  getDetailComment(id) {
    return httpsNoToken.get(`/Comments/${id}`);
  }
  createComment(body){
    return httpsNoToken.post(`/Comments`,body);
  }
  updateComment(id, body){
    return httpsNoToken.put(`/Comments/${id}`, body);
  }
  deleteComment(id){
    return httpsNoToken.delete(`/Comments/${id}`);
  }
}

export const commentService = new CommentService();

// GET
// [
//     {
//       "id": "string",
//       "content": "string",
//       "create_time": {
//         "ticks": 0,
//         "days": 0,
//         "hours": 0,
//         "milliseconds": 0,
//         "microseconds": 0,
//         "nanoseconds": 0,
//         "minutes": 0,
//         "seconds": 0,
//         "totalDays": 0,
//         "totalHours": 0,
//         "totalMilliseconds": 0,
//         "totalMicroseconds": 0,
//         "totalNanoseconds": 0,
//         "totalMinutes": 0,
//         "totalSeconds": 0
//       },
//       "ref_user": "string",
//       "ref_post": "string",
//       "fullname": "string",
//       "avatar": "string"
//     }
// ]

// POST,PUT
// {
//     "id": "string",
//     "content": "string",
//     "createTime": {
//       "ticks": 0
//     },
//     "refUser": "string",
//     "refPost": "string",
//     "refPostNavigation": {
//       "id": "string",
//       "title": "string",
//       "refTag": "string",
//       "content": "string",
//       "createTime": {
//         "ticks": 0
//       },
//       "updateTime": {
//         "ticks": 0
//       },
//       "refCategory": "string",
//       "refAccount": "string",
//       "refImage": "string",
//       "refVideo": "string"
//     }
//   }