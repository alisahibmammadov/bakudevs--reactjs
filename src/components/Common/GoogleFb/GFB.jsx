import React from 'react'
import '../../../assets/styles/GoogleFb/GFB.scss'
function GFB() {
  return (
    <form className='gfb-main'>
        <div className='f-row'>
            <nav>
              <span>Facebook ilə daxil ol</span>
            </nav>
            <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className='g-row'>
            <nav><span>Google ilə qeydiyyatdan keç</span></nav>
            <i class="fa-brands fa-google-plus-g"></i>
        </div>
    </form>
  )
}

export default GFB