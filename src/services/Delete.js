import axios from "axios";
import { RootPath } from "./Config";

const Delete = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${RootPath}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}


export default Delete;