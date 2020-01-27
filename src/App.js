import React from 'react'

import { BrowserRouter, Route, Link} from 'react-router-dom'

import Home from './Home'
import User from './User'
import Post from './Post'
import userList from './components/userList'
import usersnamepost from './components/usersnamepost'
import userPost from './components/userPost'
import username from './components/username'
import appshow from './components/appshow'
import AutoFill from './Autofill'

function App(props){
    return(
        <BrowserRouter>
        <div>
            <h1 style={{textAlign:'center', color:"red"}}> Blog-UI</h1>
            <Link style={{color:'green' }} to="/"> Home |</Link>
            <Link style={{color:'skyblue' }} to="/users"> User |</Link>
            <Link style={{color:'purple' }} to="/posts"> Post |</Link>
            <Link to="/autofill">AutoFill |</Link>



            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={User}/>
            <Route path="/posts" component={Post}/>

            <Route path="/users" component={userList}/>
            <Route path="/user/:id" component={username}/>
            <Route path="/user/:id" component={usersnamepost}/>

            <Route path="/posts/" component={userPost}/>
            <Route path="/post/:id" component={appshow}/>

            <Route path="/autofill" component={AutoFill}/>
            
            

            
            
        </div>
        
        </BrowserRouter>
    )
}

export default App


