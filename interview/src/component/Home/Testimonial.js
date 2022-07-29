import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <div>
      <div className="text-center">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 className="mb-5">Our Students Say!</h1>
        </div> 
    
        <div className="wrapper">
  <div className="box">
    <i className="fas fa-quote-left quote" />
    <p>
      Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits.
      Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus
      repudiandae deleniti ideas fuga molestiae, alias.
    </p>
    <div className="content">
      <div className="info">
        <div className="name">Alex Smith</div>
        <div className="job">Designer | Developer</div>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
      </div>
      <div className="image">
        <img src="img/testimonial-1.jpg" alt="" />
      </div>
    </div>
  </div>
  <div className="box">
    <i className="fas fa-quote-left quote" />
    <p>
      Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits.
      Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus
      repudiandae deleniti ideas fuga molestiae, alias.
    </p>
    <div className="content">
      <div className="info">
        <div className="name">Steven Chris</div>
        <div className="job">YouTuber | Blogger</div>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
      </div>
      <div className="image">
        <img src="img/testimonial-2.jpg" alt="" />
      </div>
    </div>
  </div>
  <div className="box">
    <i className="fas fa-quote-left  quote" />
    <p>
      Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits.
      Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus
      repudiandae deleniti ideas fuga molestiae, alias.
    </p>
    <div className="content">
      <div className="info">
        <div className="name">Kristina Bellis</div>
        <div className="job">Freelancer | Advertiser</div>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
      </div>
      <div className="image">
        <img src="img/testimonial-3.jpg" alt="" />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Testimonial