import React from 'react'
import video from '../images/sea-24216.mp4'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className="video">
        <h4>Tour</h4>
        <div className="player">
            <ReactPlayer controls url={video} />
            <p className='p'>
              Barcelona, the capital of Catalonia, is a city known for its unique architecture, 
              including the famous works of Antoni Gaudí such as the Sagrada Familia and Park Güell. The lively La Rambla, Gothic Quarter, and the beautiful beaches of Barceloneta contribute to the city's dynamic atmosphere.
            </p>
            <button className='hero-btn btn-3'>Visit</button>
        </div>
    </div>
  )
}

export default Video
