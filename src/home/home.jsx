import { Component } from 'react';
import img from '../assets/img/mr.fox.jpg';

export default class Home extends Component {
  render() {
    return <> <header id="header" class="d-flex flex-column justify-content-center ">

<nav id="navbar" class="navbar nav-menu pl-5">
  <ul>
    <li><a href="#hero" class="nav-link scrollto active"><i class="fa-solid fa-house"></i> <span>Home</span></a></li>
    <li><a href="#about" class="nav-link scrollto"><i class="fa-regular fa-address-card"></i><span>About</span></a></li>
    <li><a href="#services" class="nav-link scrollto"><i class="fa-regular fa-server"></i> <span>Services</span></a></li>
    <li><a href="#resume" class="nav-link scrollto"> <i class="fa-solid fa-phone"></i> <span>Resume</span></a></li>

  </ul>
</nav>

</header>


<section id="hero" class="d-flex flex-column justify-content-center">
<div class="container-fluid " data-aos="zoom-in" data-aos-delay="100">
  <h1>HELLO I AM MR.FOX</h1>
  <p>I'm Developer</p>
    <button class="btn bg-warning">Download My CV</button>
</div>
</section>
<main id="main">

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p class="text-light">
            Hello!,As a  Frontend Developer , I'm equipped to create visually stunning and user friendly web experiences that captivate your audience. your Web Developer and Designer with a passion for crafting high-converting websites that skyrocket your online presence. 
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img className='w-100' src={img} alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Web Designer &amp; Frontend Developer.</h3>
            <p class="text-light fst-italic">
              I am a professional Web Designer and Front-End Developer creating modern and responsive designs for Web and Mobile. Let us work together. Thank you.
            </p>
            <div class="row text-light">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+20100111000</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Cairo, EGYPT</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>fox@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>

 
  

  </main>
    
    </>
    
  }
}
