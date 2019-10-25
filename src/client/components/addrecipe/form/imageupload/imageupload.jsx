import React, { useState } from 'react'

function ImageUpload() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    let url =   `https://api.cloudinary.com/v1_1/kinskin/image/upload`
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'recipekeeper')
    setLoading(true)
    const res = await fetch(url,
        {
            method: 'POST',
            body: data
          }
        )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className='my-4'>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
  )
}

export default ImageUpload;