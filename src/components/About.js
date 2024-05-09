import AboutImage from '../assets/images/class.jpg';

const About = () => {
    return <section class="about container" id="about">
    <div class="about-wrapper">
      <img class="about-image" src={AboutImage} alt="" />
      <div class="about-data">
        <h3 class="about-title">ABOUT US</h3>
        <p class="about-description">
        Welcome to our premier MMA gym, where passion for martial arts and a thriving community intersect. At our core, we believe in empowering individuals of all ages and skill levels to unleash their inner warriors and achieve greatness in both mind and body. Our dedicated team of experienced coaches is committed to providing personalized training experiences, whether in our exhilarating group classes that foster camaraderie and growth or through exclusive one-on-one sessions tailored to your unique goals. We take pride in our safe and inclusive environment, nurturing the potential of young talents through our exciting Kids Programs. Join us today to embrace the journey of self-discovery, resilience, and triumph as you choose what's best for you and embark on an inspiring path to excellence in the world of MMA.
        </p>
        <a href="#read-more" class="about-btn">READ MORE</a>
      </div>
    </div>
  </section>
}

export default About;