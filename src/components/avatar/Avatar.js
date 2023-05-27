import React from 'react'

const Avatar = ({ src }) => {
    return (
        <img className='rounded-circle border border-dark  border-4 p-1 shadow mb-3'
            src={src}
            style={{ width: '100px', height: '100px' }} />
    )
}

export default Avatar