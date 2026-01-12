

function Events() {
  return (
    <section className="events">
      <div className="events-container">
        
        {/* LEFT SIDE IMAGES */}
        <div className="events-images">
          <div className="image-box">
            <img
              src="https://www.swaconhospital.com/wp-content/uploads/2019/09/34-5-reasons-why-you-need-a-regular-checkup-feat-1080x600.jpg"
              alt="Health Checkup"
            />
          <b> <p className="image-caption">Health Checkup</p></b>
          </div>

          <div className="image-box">
            <img
              src="https://cloudfrontgharpediabucket.gharpedia.com/uploads/2022/06/Plant-Trees-01-1403070001-1.jpg"
              alt="Tree Plantation"
            />
           <b> <p className="image-caption">Tree Plantation</p> </b>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="events-content">
          <h2 className="events-title">Upcoming Events</h2>

          <p className="events-para">
            Our upcoming events are focused on creating meaningful impact within
            communities by addressing key areas such as healthcare, education,
            environmental sustainability, and social awareness.
          </p>

          

          <button>Register Now</button>
        </div>
      </div>
    </section>
  );
}

export default Events;
