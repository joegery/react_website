import ProgramImage1 from '../assets/images/group.jpg'
import ProgramImage2 from '../assets/images/1on1.jpg'
import ProgramImage3 from '../assets/images/kids.jpg'

const Program = () => {
    return <section class="program container" id="program">
    <h3 class="section-title">OUR PROGRAMS</h3>
    <span class="section-subtitle">Discover Your Path to Excellence: Explore Our Range of Dynamic MMA Programs, Catering to All Levels and Aspiring Warriors.</span>
    <div class="row program-row">
      <div class="col program-card">
        <img
          class="program-card-image"
          src={ProgramImage1}
          alt=""
        />
        <h4 class="card-title">Group Lessons</h4>
        <p class="card-description">
        Unleash Your Inner Warrior in our Thrilling Group MMA Lessons! Train with Passionate Instructors, Forge Bonds with Fellow Fighters, and Elevate Your Skills to New Heights. All Levels Welcome - Step into the Cage and Embrace the Challenge Today!
        </p>
      </div>
      <div class="col program-card">
        <img
          class="program-card-image"
          src={ProgramImage2}
          alt=""
        />
        <h4 class="card-title">1 on 1 Training</h4>
        <p class="card-description">
        Personalized MMA Mastery: Ignite Your Potential with Exclusive One-on-One Lessons! Our Expert Coaches Tailor Training to Your Goals, Enhance Technique, and Boost Confidence. Unleash the Champion Within and Experience the Ultimate Growth in Your MMA Journey. Book Your Private Session Now!
        </p>
      </div>
      <div class="col program-card">
        <img
          class="program-card-image"
          src={ProgramImage3}
          alt=""
        />
        <h4 class="card-title">Kids Programs</h4>
        <p class="card-description">
        Raising Future Champions: Empower Your Kids with Our Exciting MMA Kids Programs! Our Safe and Fun Environment Instills Discipline, Respect, and Confidence While Learning Essential Martial Arts Skills. Watch Your Children Thrive as They Build Strength, Character, and Lifelong Friendships. Enroll Them Today for a Transformative Martial Arts Adventure!
        </p>
      </div>
    </div>
  </section>
}

export default Program;