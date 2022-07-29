import React from 'react'
import "./style.css"
import Service from './component/Service'
import Testimonial from './component/Testimonial'
import PopularCourses from './component/PopularCourses'
import Category from './component/Category'



function Home() {
  return (
    <div>
        <>
  {/* Carousel Start */}
  {/* Carousel End */}

  {/* Service Start */}
 <Service/>
  {/* Service End */}
 
  {/* Categories Start */}
  <Category/>
  {/* Categories Start */}


  {/* Courses Start */}
 <PopularCourses/>
  {/* Courses End */}
 

  {/* Testimonial Start */}
 <Testimonial/>
  {/* Testimonial End */}
</>

    </div>
  )
}

export default Home