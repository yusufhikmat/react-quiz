import React from 'react'
import Questions from './Questions'

const Main = () => {
  return (
    <div className='main'>
        <div className='top'>
        <div className='timer'>30</div>
        </div>
        <div className='bottom'>
        <Questions />
        </div>
    </div>
  )
}

export default Main