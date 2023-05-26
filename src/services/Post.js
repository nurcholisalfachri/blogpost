import axios from "axios";
import { RootPath } from "./Config";

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${RootPath}/${path}`, data)
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Post;