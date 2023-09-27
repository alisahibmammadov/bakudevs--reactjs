import React from 'react'
import '../../../assets/styles/GoogleFb/GFB.scss'
function GFB() {
  return (
    <form className='gfb-main'>
        <div className='f-row'>
            <input type="text" placeholder='Facebook ilə daxil ol' />
            <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className='g-row'>
            <input type="text" placeholder='Google ilə qeydiyyatdan keç'/>
            <i class="fa-brands fa-google-plus-g"></i>
        </div>
    </form>
  )
}

export default GFB