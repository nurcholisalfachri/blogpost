import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../../component/Post/Post";
// import axios from "axios";
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
        // axios.get('http://localhost:3004/posts')
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        // .then((result) => {
        //     this.setState({
        //         post: result.data
        //     })
        // }) 
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        // mengambil semua data post dr api local
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
        // mengambil semua data comments dr api json placeholder
    }
    // mengambil semua data dr api local, lalu memasukkan nya ke state post

    postDataToAPI = () => {
        // axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
        //     // this.state.formBlogPost a data yg td di buat
        //     console.log(res);
        //     this.getPostAPI();
        //     this.setState({
        //         formBlogPost: {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         },
        //     })
        // })
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
    // memasukkan data yg td d klik simpan ke db.json dan menjalankan getPostAPI

    putDataToAPI = () => {
        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
        //     console.log(res);
        //     this.getPostAPI();
        //     this.setState({
        //         isUpdate: false,
        //         formBlogPost: {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         },
        //     })
        // })
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
        // axios.delete(`http://localhost:3004/posts/${data}`)
        // // data berisi id, dari remove(props.data.id) = handleRemove(id=data), dr dalam post masuk ke spesific comp post masuk ke handleRemove
        // // dsni data sudah terhapus
        // .then((res) => {
        //     this.getPostAPI()
        // })
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
        // console.log('form change', event.target); berisi html si target
        let formBlogPostNew = {...this.state.formBlogPost};
        // console.log('init states: ', this.state.formBlogPost); berisi huruf yg trs bertambah ketika d tulis
        // console.log('new value: ', formBlogPostNew); berisi index dan huruf yg trs bertambah ketika d tulis
        let timestamp = new Date().getTime();
        // console.log(timestamp);
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        // formBlogPostNew dgn title dan body yg berisi value
        // console.log(event.target.name); = value title dan body dr key name di html
        // let title = event.target.value
        this.setState({
            // formBlogPost: title
            formBlogPost: formBlogPostNew
            // formBlogPostNew berisi formBlogPost tp dg title dan body yg berisi value 
        }, 
        // () => {
        //     console.log('value obj formBlogPost: ', this.state.formBlogPost) 
        //     berisi formBlogPost setelah di perbarui (setState)
        // }
        )
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI()
        } else {
            // console.log(this.state.formBlogPost);
            this.postDataToAPI();
        }
    }

    // handleDetail = (id) => {
    //     this.props.history.push(`/detail-post/${id}`);
    //     di klik menuju ke url tsb
    // }
   
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get('http://localhost:3004/posts')
        // .then((result) => {
        //     this.setState({
        //         post: result.data
        //     })
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
        this.getPostAPI()
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Halaman Blogpost</p>
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder='add blog content' onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        // return <Post key={post.id} title={post.title} desc={post.body} remove={this.handleRemove}/>
                        // return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                        // melooping / menampilkan postingan ke halaman dgn data dr api local
                    })
                }
            </Fragment>

        )
    }
}

export default BlogPost