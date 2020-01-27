import React from 'react'
import axios from 'axios'

class UserInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            users:{},
            input: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleNaChange = this.handleNaChange.bind(this)
        this.handleEmChange = this.handleEmChange.bind(this)
        this.handleUsChange = this.handleUsChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.input}`)
            .then((response) => {
                const users = response.data
                console.log('User1',users)
                this.setState({ users }) 
                console.log('User2',users)
            })
            .catch((err) => {
                alert(err)
            })
    }

    handleNameChange(e){
       const input = e.target.value
        this.setState({input})
    }

    handleNaChange(e){
        const input = e.target.value
        this.setState({input}) 
    }

    handleEmChange(e){
        const input = e.target.value
        this.setState({input}) 
    }

    handleUsChange(e){
        const input = e.target.value
        this.setState({input}) 
    }

    render(){
        return(
            <div>
                <br/>
                    <h1> Autofill :- </h1>
                <br/>
                <form onBlur={this.handleSubmit}>
                    <label>
                        
                        ID
                        <br/>
                        <input type="text" onChange={this.handleNameChange}/> <br/>
                    </label> 
                    <label>
                        
                        Name
                        <br/>
                        <input type="text" value={this.state.users.name} onChange={this.handleNaChange}/>
                    </label>
                    <br/>
                    <label>
                        
                        Username
                        <br/> 
                        <input  type="text"  value={this.state.users.username} onChange={this.handleUsChange}/>
                    </label>
                    <br/>
                    <label>
                        
                        Email
                        <br/>
                        <input  type="text"  value={this.state.users.email} onChange={this.handleEmChange}/>
                    </label>
                    <br/><br/>                   
                    </form>
            </div>
        )
    }
}

export default UserInfo
