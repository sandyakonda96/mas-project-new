import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Multipurpose Awareness Society <br />
            <span>Enriching Lives</span>
          </h1>
          <b>
            <p>
              Multipurpose Awareness Society (MAS) empowers communities through
              education, health, environment, and sustainable development 
              initiatives, focusing on marginalized groups and social welfare.
            </p>
          </b>
          <div className="hero-buttons">
            <button className="learn">Learn More</button>
            <button className="involved">Get Involved</button>
          </div>
        </div>

        {/* Image */}
        <div className="hero-image">
          <img 
            src="https://t3.ftcdn.net/jpg/06/03/21/12/360_F_603211204_pC06ntrzN95QQLs0J0DVTwlNAFqZUjFJ.jpg" 
            alt="Community Awareness" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
