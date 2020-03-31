import React from 'react'
import './grid.css'

class Grid extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    handleClick = (e) => {
        setInterval(() => {
            const dom = document.getElementById('demo')
            dom.style.backgroundColor = 'green'
            console.log('object');
        }, 500);
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log('handleClick',e.target.name)
    }

    render(){
        return(
            <div>
                <h4>Grid</h4>

                <button className="button" onClick={this.handleClick} id="demo" name="1">1</button>
                <button className="button" onClick={this.handleClick} id="demo" name="2">2</button>
                <button className="button" onClick={this.handleClick} id="demo" name="3">3</button><br />

                <button className="button" onClick={this.handleClick} id="demo" name="4">4</button>
                <button className="button" onClick={this.handleClick} id="demo" name="5">5</button>
                <button className="button" onClick={this.handleClick} id="demo" name="6">6</button><br />

                <button className="button" onClick={this.handleClick} id="demo" name="7">7</button>
                <button className="button" onClick={this.handleClick} id="demo" name="8">8</button>
                <button className="button" onClick={this.handleClick} id="demo" name="9">9</button>
            </div>
        )
    }
}

export default Grid