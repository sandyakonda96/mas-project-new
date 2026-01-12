function About() {
  return (
    <section className="about">
      {/* LEFT SIDE TEXT */}
      <div className="about-text">
        <h3 className="about-heading">About Us</h3>
        <h3 className="about-quote">
          “Let us begin with awareness and grow through change.”
        </h3>
        <p className="about-paragraph">
          A Multipurpose Awareness Society (MAS) in the education sector typically
          focuses on empowering individuals and communities through learning, skill
          development, and social awareness. Its core aim is to bridge educational
          gaps and promote inclusive, lifelong learning.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="about-image">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/069/020/276/small/engaged-diverse-college-students-studying-together-on-white-background-photo.jpg"
          alt="About MAS"
        />
      </div>
    </section>
  );
}

export default About;
