import axios from "axios";
import { RootPath } from "./Config";

const Put = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${RootPath}/${path}`, data)
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Put;