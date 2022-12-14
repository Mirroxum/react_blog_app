import axios from "axios";
import { useNavigate } from "react-router";

export default class PostService {
    static async getAll(limit=10, page=1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
            return response 
        }

    static async getPost(postId) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
            return response
        }

    static async getComment(postId) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
            return response 
        }
    }
