import React from 'react'
import './ball.css'

class Ball extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    handleClick = () => {
       const dom = document.getElementById('demo')
        let count = 0
        var int1 =    setInterval(() => {
            dom.style.margin = `${count}0px`
            count += 1
            console.log('int 1')
            console.log(dom.style.margin,'dom.style.margin(in interval 1)')
                    if(dom.style.margin === '490px'){
                        let count1 = 48
                        var int2 =   setInterval(() => {
                            dom.style.margin = `${count1}0px`
                            count1 -= 1
                            console.log('int 2')
                            console.log(dom.style.margin,'dom.style.margin(in setinterva2)')
                            if(dom.style.margin === '0px'){
                                clearInterval(int2)
                                console.log(dom.style.margin,'dom.style.margin( in if int 2)')
                            }
                        }, 150); 
                    }
            if(dom.style.margin === '490px'){
                clearInterval(int1)
                console.log(dom.style.margin,'dom.style.margin in if on int 1')
            }
        }, 150);

        console.log(dom.style.margin,'dom.style.margin')
        console.log('handleClick')
    } 

    render(){
        return(
            <div className="ball-page">
                <button  onClick={this.handleClick} id="demo" className="ball"></button>
            </div>
        )
    }
}

 export default Ball