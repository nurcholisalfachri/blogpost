import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

// POST
const postNewsBlog = (data) => Post('posts', data);
// data dari API.postNewsBlog(this.state.formBlogPost)

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`);
// id dari props.remove(props.data.id) di post jsx

// PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, data);

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', true);
const getComments = () => Get('comments', false);

const API = {
    getNewsBlog,
    getComments,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;