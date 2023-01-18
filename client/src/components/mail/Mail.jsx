import React from 'react'
import './mail.css';

const Mail = () => {
  return (
    <div className='mail'>
        <h2 className="mailTitle">Save Time, Have Fun</h2>
        <span className="mailDesc">Subscribe For Updates</span>
        <div className="mailInput">
            <input type="text" placeholder='Enter your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Mail
