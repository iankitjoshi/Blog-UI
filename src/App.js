import React from 'react'

import { BrowserRouter, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'
import Home from './Home'
import User from './User'
import Post from './Post'
import userList from './components/userList'
import usersnamepost from './components/usersnamepost'
import userPost from './components/userPost'
import username from './components/username'
import appshow from './components/appshow'
import AutoFill from './Autofill'
import Ball from './components/ball/ball';
import  Grid  from './components/Grid/gird';
import Images from './components/images/image';

function App(props){
    return(
        <BrowserRouter>
        <div>
        <h1 style={{textAlign:'center', color:"red"}}>Blog-UI</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
            <Link style={{color:'green' }} to="/"> Home |</Link>
            <Link style={{color:'skyblue' }} to="/users"> User |</Link>
            <Link style={{color:'purple' }} to="/posts"> Post |</Link>
            <Link to="/autofill">AutoFill |</Link>
            <Link to="/ball">Ball   |</Link>
            <Link to="/grid">Grid   |</Link>
            <Link to="/images">Images   </Link>
            </nav>



            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={User}/>
            <Route path="/posts" component={Post}/>

            <Route path="/users" component={userList}/>
            <Route path="/user/:id" component={username}/>
            <Route path="/user/:id" component={usersnamepost}/>

            <Route path="/posts/" component={userPost}/>
            <Route path="/post/:id" component={appshow}/>

            <Route path="/autofill" component={AutoFill}/>
            
            <Route path="/ball" component={Ball} />

            <Route path="/grid" component={Grid} />
            
            <Route path="/images" component={Images} />

            
            
        </div>
        
        </BrowserRouter>
    )
}

export default App


