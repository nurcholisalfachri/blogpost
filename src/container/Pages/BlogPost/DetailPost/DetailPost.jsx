import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import './DetailPost.css';

const DetailPost = (props) => {
    const [post, setPost] = useState({})
    // post ini state.post
    // setpost a u merubah post / isi datanya
    let { postId } = useParams(); 
    // postId = match.params.postID
    // postId yg d tulis sbg id di <Route path="/detail-post/:postId" element={<DetailPost />} />

    useEffect(() => {
        // console.log(props)
        axios.get(`http://localhost:3004/posts/${postId}`).then(res => setPost(res.data))
        // mengambil data berdasarkan id, lalu post object kosong di masukkan dgn setpost object berisi data dgn id tsb
    });
  
    return (
        <div className="p-detail-post">
            <p className="detail-title">{post.title}</p>
            <p className="detail-body">{post.body}</p>
        </div>
    )
    // setelah component(html) terpasang, lalu melakukan useeffect(compdidmount), baru post title terisi
  
}

// class DetailPost extends Component {
//     state = {
//         post: {
//             title: '',
//             body: ''
//         }
//     }

//     componentDidMount(){
//         let id = this.props.match.params.postID; karena di home nya <Route path="/detail-post/:postID" element={<DetailPost />} /> bukan /:id
//         axios.get(`http://localhost:3004/posts/${id}`).then(res => {
//             id dari .match.params.postID,
//             console.log('result: ', res);
//             let post = res.data;
//             this.setState({
//                 post: {
//                     title: post.title,
//                     body: post.body
//                 }
//             })
//         })
//     }

//     render(){
//         console.log(this.props) ketika mengklik titlenya, lalu msk ke halaman detail, cl nya mengembalikan data2 termasuk match
//         return(
//             <div className="p=detail-post">
//                 <p className="detail-title">{this.state.post.title}</p>
//                 <p className="detail-body">{this.state.post.body}</p>
//             </div>
//         )
//     }
// }

export default DetailPost;