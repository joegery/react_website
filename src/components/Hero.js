import HeroImage from '../assets/images/empty.jpg';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
            <h1 className="hero-title">
                THE BEST MMA GYM <br />
                IN THE CITY
            </h1>
            <a href="#program" className="hero-btn-get-started">
                GET STARTED
            </a>
        </section>
    );
}

export default Hero;