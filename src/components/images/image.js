import React from 'react'
import Axios from 'axios'
import './images.css'
import TextField from '@material-ui/core/TextField'

class Images extends React.Component{
    constructor(){
        super()
        this.state = {
            image : [],
            search : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            search : this.state.search
        }
        this.setState({formData})
        console.log('formData',formData)

        Axios.get(`https://app.zenserp.com/api/v2/search?apikey=b75d08a0-7277-11ea-b617-e31b6fb86a3f&q=${formData.search}&tbm=isch`)
        .then(response => {
            const image = response.data.image_results
            this.setState({image})
            console.log(image,'image')
        })
        .catch(err => {
            console.log(err,'err')
        })

    }

    handleChange = (e) => {
        const search = e.target.value
        this.setState({search})
        console.log(search,'search')
    }
    // componentDidMount(){
    //     Axios.get(`https://app.zenserp.com/api/v2/search?apikey=b75d08a0-7277-11ea-b617-e31b6fb86a3f&q=${formData}&tbm=isch`)
    //     .then(response => {
    //         const image = response.data.image_results
    //         this.setState({image})
    //         console.log(image,'image')
    //     })
    //     .catch(err => {
    //         console.log(err,'err')
    //     })
    // }
    render(){
        return(
            <div className="page">
                
                <form className="form" onSubmit={this.handleSubmit}>
                
                <TextField type="text" className="search-bar"  value={this.state.search} id={this.state.search} onChange={this.handleChange}  label=" Image Search" />

                <input className="search-button  btn btn-primary" type="submit" value="Search" />
                </form>
                
                <ol>
                    {
                        this.state.image.map(img => {
                            return<img className='images'  src={img.sourceUrl} />
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default Images