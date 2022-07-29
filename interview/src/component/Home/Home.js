import React from 'react'
import "../style.css"
import Service from './Service'
import Testimonial from './Testimonial'
import PopularCourses from './PopularCourses'
import Category from './Category'



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