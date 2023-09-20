import React from 'react'
import '../../assets/styles/Buttons/AllCoursesBtn.scss'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function AllCoursesBtn() {
  return (
    <Button className='all-courses-btn' variant='link'><Link className='link' to='/courses'>Bütün kurslar <i class="fa-solid fa-chevron-right"></i></Link></Button>
  )
}

export default AllCoursesBtn