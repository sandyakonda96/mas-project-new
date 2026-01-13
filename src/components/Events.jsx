import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Events() {
  const events = [
    {
      title: "Health Checkup Camp",
      img: "https://www.swaconhospital.com/wp-content/uploads/2019/09/34-5-reasons-why-you-need-a-regular-checkup-feat-1080x600.jpg",
      rating: 4,
    },
    {
      title: "Tree Plantation Drive",
      img: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2022/06/Plant-Trees-01-1403070001-1.jpg",
      rating: 5,
    },
    {
      title: "Educational Workshop",
      img: "https://cdn.energysparks.uk/static-assets/for-schools/workshop-class-f7a0bf54df19d10d90d5d0451b41e2209626b6c0a1651246627c4a03fa13efde.png",
      rating: 3,
    },
    {
      title: "Women Empowerment Seminar",
      img: "https://images.pexels.com/photos/17637293/pexels-photo-17637293.jpeg",
      rating: 5,
    },
    {
      title: "Blood Donation Camp",
      img: "https://hindumissionhospital.in/wp-content/uploads/elementor/thumbs/stock-photo-the-hand-of-a-man-who-donates-blood-male-donor-gives-blood-in-a-mobile-blood-donation-center-1104323831-transformed-pr9psz49i8krji0sx3ei0gd6ksjxl1i41385rjylim.jpeg",
      rating: 4,
    },
    {
      title: "Awareness Rally",
      img: "https://www.shutterstock.com/editorial/image-editorial/MeT8Qbw6Nezfc1x4NjM3MzU=/people-participation-spread-social-awareness-rally-on-440nw-13951052a.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="events">
      <div className="events-wrapper">

        <div className="events-content">
          <h2>Upcoming Events</h2>
          <p>
            Join us in our events focused on healthcare, education, environment,
            and social empowerment. Register and be part of the change!
          </p>
        </div>

        {/* 3 x 2 grid */}
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.img} alt={event.title} />

              <div className="event-overlay">
                <h3 className="event-title">{event.title}</h3>

                <div className="event-rating">
                  {[1, 2, 3, 4, 5].map((i) =>
                    i <= event.rating ? (
                      <FaStar key={i} color="#FFD700" />
                    ) : (
                      <FaRegStar key={i} color="#FFD700" />
                    )
                  )}
                </div>

                <div className="event-buttons">
                  <button>Register</button>
                  <button className="outline">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Events;
