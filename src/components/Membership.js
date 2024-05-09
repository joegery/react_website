

const Membership = () => {
    return <section class="membership container" id="pricing">
    <h3 class="section-title">MEMBERSHIP PLANS</h3>
    <span class="section-subtitle"
      >Choose What Plan is Best for You: Unlock Your Full Potential with the Power of Membership. Access Top-Notch Facilities, Expert Coaching, and a Supportive Community in Our MMA Gym. Join Today and Embark on a Journey of Growth, Strength, and Success!
    </span>
    <div class="row membership">
      <div class="col membership-card">
        <div>
          <span class="membership-plan">Basic</span>
          <h4 class="card-title membership-title">$70</h4>
          <p class="card-description membership-description">per month</p>
        </div>
        <ul class="membership-feature">
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Access to all group MMA classes
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Use of standard gym facilities, including weights and cardio equipment
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Complimentary towel service
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Exclusive access to member-only events and seminars
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Discounts on merchandise and merchandise
          </li>
        </ul>
        <a href="#get-started" class="membership-btn">GET STARTED</a>
      </div>
      <div class="col membership-card active">
        <div>
          <span class="membership-plan">Warrior</span>
          <h4 class="card-title membership-title">$100</h4>
          <p class="card-description membership-description">per month</p>
        </div>
        <ul class="membership-feature">
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            All benefits of the Basic Membership
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Priority registration for group classes and workshops
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Personalized fitness assessment and goal-setting session
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Two complimentary one-on-one training session per month with a skilled coach
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Free access to specialized fitness classes (e.g., strength training, conditioning)
          </li>
          
        </ul>
        <a href="#get-started" class="membership-btn">GET STARTED</a>
      </div>
      <div class="col membership-card">
        <div>
          <span class="membership-plan">Barbarian</span>
          <h4 class="card-title membership-title">$200</h4>
          <p class="card-description membership-description">per month</p>
        </div>
        <ul class="membership-feature">
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            All benefits of the Premium Membership
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Unlimited one-on-one training sessions with your choice of coaches
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Customized nutrition plan designed to support your fitness goals
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Invitations to exclusive member appreciation events and guest workshops
          </li>
          <li class="membership-list">
            <i class="ri-checkbox-circle-fill membership-checklist"></i>
            Complimentary access to seminars hosted by renowned fighters and trainers
          </li>
        </ul>
        <a href="#get-started" class="membership-btn">GET STARTED</a>
      </div>
    </div>
  </section>
}

export default Membership;