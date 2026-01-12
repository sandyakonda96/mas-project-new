import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Multipurpose Awereness Society <br />
          <span>Enriching Lives</span>
        </h1>
        <b><p>Multipurpose Awareness Society (MAS) empowers communities through
           education, health, environment, and sustainable development 
           initiatives, focusing on marginalized groups and social welfare.</p></b>
        <div className="hero-buttons">
          <button className="learn">Learn More</button>
          <button className="involved">Get Involved</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
