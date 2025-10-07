import React from 'react'
import propTypes from 'prop-types'

const BlurBlob = ({position,size}) => {

    const{top,left}= position
    const{height,width}=size

  return (
    <div className='absolute'
    style={{
        top:top,
        left :left,
        width:width,
        height:height,
        transform:'translate(-50%,-50%)',
    }}
    >
        <div className='w-full h-full bg-purple-500 rounded-full opacity-10 blur-2xl animate-blob'>


        </div>
    </div>
  )
}


    BlurBlob.propTypes={
        position: propTypes.shape({
            top: propTypes.string,
            left: propTypes.string,
        }),
        size:propTypes.shape({
            height: propTypes.string,
            width: propTypes.string
        })
    }

export default BlurBlob
