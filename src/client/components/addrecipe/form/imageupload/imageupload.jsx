import React, { useState } from 'react'

class ImageUpload extends React.Component{

    constructor(){
        super()
        this.state = {
            image: '',
            loading: false
        }
    }

    uploadImage(event){
        let url =   `https://api.cloudinary.com/v1_1/kinskin/image/upload`
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'recipekeeper')
        this.setState({loading: true}, ()=>{
            fetch(url,
                {
                    method: 'POST',
                    body: data
                }
            )
            .then(response => response.json())
            .then(data => this.setState({image:data.secure_url,loading:false}))
            .then(()=>{this.props.uploadImage(this.state.image)})
            .catch(err => console.log('err: ', err))
        })
    }

    render(){
        let loading = this.state.loading
        return(
            <div className='my-4'>
                <input type="file" name="file" placeholder="Upload an image" onChange={(event)=>this.uploadImage(event)}/>
                {
                    loading ? (
                    <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> ) : (
                    <img src={this.state.image} style={{ width: '300px' }} />
                )}
            </div>
        )
    }
}

export default ImageUpload;