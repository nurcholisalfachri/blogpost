import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

// POST
const postNewsBlog = (data) => Post('posts', data);

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`);

// PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, data);

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);

const API = {
    getNewsBlog,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;