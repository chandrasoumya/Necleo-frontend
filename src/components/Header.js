import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div >

        <img className='logo' src='./logo.png'/>
      </div>
      <div className='profile-section'>
        <div>
            <p>Free Trail | <span>2days left</span></p>
            <span>Extend free trail</span>
        </div>
        <div>
            <img src='./profilepic.png'/>
        </div>
        <img className='downarrow' src='./downarrow.png'/>
      </div>
    </div>
  )
}

export default Header;

