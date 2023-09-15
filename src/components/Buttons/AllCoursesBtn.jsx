import React from 'react'
import '../../assets/styles/Buttons/AllCoursesBtn.scss'
import { Button } from 'react-bootstrap'


function AllCoursesBtn() {
  return (
    <Button className='all-courses-btn' variant='link'>Bütün kurslar <i class="fa-solid fa-chevron-right"></i></Button>
  )
}

export default AllCoursesBtn