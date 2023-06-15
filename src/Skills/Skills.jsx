import React, { Component } from 'react'
import img1 from '../assets/img/portfolio-1.jpg'
import img2 from '../assets/img/portfolio-2.jpg'
import img3 from '../assets/img/portfolio-3.jpg'
import img4 from '../assets/img/portfolio-4.jpg'
import img5 from '../assets/img/portfolio-5.jpg'
import img6 from '../assets/img/portfolio-6.jpg'

export default class Skills extends Component {
  render() {
    return <>
    <div id='main'>
        <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title text-light">
          <h2>Skills</h2>
          <p>Skilled  in HTML, CSS, bootstrap , and JavaScript, experience with frontend frameworks(react js , angular ), and knowledge of responsive design and web performance optimization techniques. Passionate about searching, self-learning and team work. Strong in design and integration problem-solving skills.</p>
        </div>

      </div>
    </section>

    
    


    <section id="services" class="services">
      <div class="container" data-aos="fade-up">

      

        <div class="row">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box iconbox-orange rounded">
              <div class="row">
              <img className='img-fluid' src={img1} alt="" />
              </div>
              <h4><a href="">User Interface</a></h4>
              <p> I Optimize the home and landing pages of websites and make them
                user-friendly.
               </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box iconbox-orange rounded">
              <div class="row">
              <img className='img-fluid' src={img2} alt="" />
              </div>
              <h4><a href="">Web Development</a></h4>
              <p>Build website pages from scratch with HTML-CSS-Bootstrap.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box iconbox-orange rounded">
              <div class="row">
              <img className='img-fluid' src={img3} alt="" />
              </div>
              <h4><a href="">Responsive design</a></h4>
              <p>I ensure that web applications and websites are optimized for different devices, such as desktops, tablets, and smartphones.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-yellow rounded">
              <div class="row">
              <img className='img-fluid' src={img4} alt="" />
              </div>
              <h4><a href="">Performance optimization</a></h4>
              <p>optimize the performance of web applications by reducing load times and improving page speed.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-orange rounded">
              <div class="row">
              <img className='img-fluid' src={img5} alt="" />
              </div>
              <h4><a href="">Accessibility</a></h4>
              <p>ensure that web applications and websites are accessible to users with disabilities, including those who use assistive technologies like screen readers.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-orange rounded">
              <div class="row">
            <img className='img-fluid' src={img6} alt="" />
              </div>
              <h4><a href="">communicates with backend</a></h4>
              <p> building a web application or website that communicates with a backend API (Application Programming Interface) to retrieve and display data to the user.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
   
    
    </>
  }
}


{/* <div class="row skills-content">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">HTML <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">React js <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">bootstrap <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">typescript <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div> */}