import React from 'react';

const Footer = () => {
  return (
    <>
    <section id='footer'>

    <div>
      <div>
        <h2 className='text-white'>Follow me on social media</h2>
      </div>

      <div className='flex gap-10 p-2.5 justify-center items-center'>
        <div >
          <a href="https://github.com/Light-royal24"  className='flex items-center justify-center flex-col '>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
        <p className='text-white'>github</p>
          </a>
        </div>
        <div>
          <a href="https://web.facebook.com/john.zion.3158/"  className='flex items-center justify-center flex-col '>
          <img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
        <p className='text-white'>Facebook</p>
          </a>
        </div>
        <div className='flex'>
          <a href="" className='flex items-center justify-center flex-col '>
          <img width="30" height="30" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
        <p className='text-white'>Instagram</p>
          </a>
        </div>
      </div>

      <div className='footer-allright text-white flex justify-center '>
        <p>Copyright © David Prosper 2023. All rights reserved.</p>
      </div>
    </div>
    </section>
    </>
  )
}

export default Footer;