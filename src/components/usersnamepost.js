import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state = {
            user : []
        }

    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => {
            const user = response.data
            this.setState({user})
        })
        .catch(err => {
            alert(err)
        })

    }
    render(){
        return(
            <div>
                {/*<h2> Post Written By User :- </h2>*/}
                <ol>
                    {
                        this.state.user.map(us => {
                            return <li key={us.id}><Link to={`/post/${us.id}`}> {us.title} </Link></li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default UserShow