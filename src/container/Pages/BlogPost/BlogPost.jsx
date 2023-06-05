import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../../component/Post/Post";
import API from '../../../services/index';

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    
    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
    }
    

    postDataToAPI = () => {

        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
    }

    putDataToAPI = () => {
        
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
                
            })
        })
    }

    handleRemove = (data) => {
        
        API.deleteNewsBlog(data).then((res) => {
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
            this.setState({
                formBlogPost: formBlogPostNew
            },
        )
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI()
        } else {
            this.postDataToAPI();
        }
    }
   
    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blogpost Page</p>
                <hr />
                <div className="add-con">
                    <div className="form-add-post">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange}/>
                        <label htmlFor="body">Blog Content</label>
                        <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder='add blog content' onChange={this.handleFormChange}></textarea>
                        <button className='btn-submit' onClick={this.handleSubmit}>Save</button>
                    </div>
                    <div className="post-con">
                        {
                            this.state.post.map(post => {
                                return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                            })
                        }
                    </div>
                </div>
            </Fragment>

        )
    }
}


export default BlogPost;