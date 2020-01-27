import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserList extends React.Component{
    constructor(){
        super()
        this.state = {
            users: []
        }

    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            this.setState({users})
        })
        .catch(err => {
            alert(err)
        })
    }

    render(){
        return(
            <div>
                <h1>Listing User - {this.state.users.length} </h1>
                <ol>
                    {
                        this.state.users.map(user => {
                            return <li key={user.id}> <Link to ={`/user/${user.id}`}> {user.name} </Link></li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default UserList