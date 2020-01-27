import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Total Post 100

class UserPost extends React.Component{
    constructor(){
        super()
        this.state = {
            post : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const post = response.data
            this.setState({post})
        })
        .catch(err => {
            alert(err)
        })

    }
    

    render(){
        return(
            <div>
                <h1> Total Posts - {this.state.post.length} </h1>
                <ol>
                    {
                        this.state.post.map(user =>{
                            return <li key={user.id}> <Link to ={`/post/${user.id}`}> {user.title} </Link></li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default UserPost