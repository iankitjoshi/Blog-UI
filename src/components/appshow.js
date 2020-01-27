import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class AppShow extends React.Component{
    constructor(){
        super()
        this.state = {
            users : {} ,
            posts: {},
            comments: []
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) 
        .then(response => {
            const posts = response.data
           // console.log('Post',posts);
            axios.get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
            .then(response =>{
                const users = response.data
                //console.log('User',users,'Post',posts)
                this.setState({posts,users})
               // console.log('User',users,'Post',posts);
            })
        })
        .catch(err => {
            alert(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => {
            const comments = response.data
            this.setState({comments})
        })
        .catch(err => {
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h2> Post By: {this.state.users.name}</h2>
                <h4>Title: {this.state.posts.title}</h4>
                <h4>Body:{this.state.posts.body}</h4>
                <hr/>
                <h2>Comments :- </h2>
                <ol>
                    {
                        this.state.comments.map(comment =>{
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ol>
                <h3> More Post of the Author :-<Link to={`/user/${this.state.users.id}`}>{this.state.users.name}</Link></h3>
            </div>
        )
    }
}

export default AppShow

